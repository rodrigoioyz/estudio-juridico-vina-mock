#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

APPROVED_VERSION="6.1.1-3ubuntu5"
FFMPEG_VERSION="$(ffmpeg -version | sed -n '1p')"
FFPROBE_VERSION="$(ffprobe -version | sed -n '1p')"
[[ "$FFMPEG_VERSION" == "ffmpeg version $APPROVED_VERSION"* ]] || {
  printf 'Expected ffmpeg %s, got: %s\n' "$APPROVED_VERSION" "$FFMPEG_VERSION" >&2
  exit 1
}
[[ "$FFPROBE_VERSION" == "ffprobe version $APPROVED_VERSION"* ]] || {
  printf 'Expected ffprobe %s, got: %s\n' "$APPROVED_VERSION" "$FFPROBE_VERSION" >&2
  exit 1
}

SOURCE_DIR="$REPO_ROOT/public/hero/pacifico-urbano/sources"
OUTPUT_DIR="$REPO_ROOT/public/hero/pacifico-urbano"
SOURCES=(
  "$SOURCE_DIR/01-al-borde-del-estero.jpg"
  "$SOURCE_DIR/02-edificio-copacabana.jpg"
  "$SOURCE_DIR/03-muelle-vergara.jpg"
  "$SOURCE_DIR/04-entre-arboles.jpg"
  "$SOURCE_DIR/05-valparaiso-406.jpg"
  "$SOURCE_DIR/06-valparaiso-at-night.jpg"
)
for source in "${SOURCES[@]}"; do
  [[ -f "$source" ]] || {
    printf 'Missing approved local source: %s\n' "$source" >&2
    exit 1
  }
done

TMP_ROOT="${TMPDIR:-$PWD/.tmp}"
mkdir -p "$TMP_ROOT" "$OUTPUT_DIR"
WORK_DIR="$(mktemp -d "$TMP_ROOT/pacifico-urbano.XXXXXX")"
trap 'rm -rf "$WORK_DIR"' EXIT
MASTER="$WORK_DIR/pacifico-urbano-master.mkv"

FILTER_GRAPH=$(cat <<'FILTER'
[0:v]scale=-2:1080,crop=1920:1080:x='(in_w-out_w)*(0.12+0.20*n/54)':y=0,trim=duration=2.2,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v0];
[1:v]scale=2200:1238:force_original_aspect_ratio=increase,crop=2200:1238,zoompan=z='1.00+0.035*on/52':x='iw/2-(iw/zoom/2)+45*on/52':y='ih/2-(ih/zoom/2)':d=1:s=1920x1080:fps=25,trim=duration=2.1,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v1];
[2:v]scale=2200:1238:force_original_aspect_ratio=increase,crop=2200:1238,zoompan=z='1.015+0.045*on/44':x='iw/2-(iw/zoom/2)-30*on/44':y='ih/2-(ih/zoom/2)':d=1:s=1920x1080:fps=25,trim=duration=1.8,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v2];
[3:v]split=2[mu-bg-source][mu-fg-source];
[mu-bg-source]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,boxblur=24:4,eq=brightness=-0.12:saturation=0.72[mu-bg];
[mu-fg-source]scale=-2:940[mu-fg];
[mu-bg][mu-fg]overlay=x='(W-w)/2':y='70-12*t':shortest=1,trim=duration=1.3,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v3];
[4:v]split=2[co-bg-source][co-fg-source];
[co-bg-source]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,boxblur=24:4,eq=brightness=-0.12:saturation=0.72[co-bg];
[co-fg-source]scale=980:980[co-fg];
[co-bg][co-fg]overlay=x='(W-w)/2':y='70-22*t':shortest=1,trim=duration=1.8,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v4];
[5:v]scale=2080:1170:force_original_aspect_ratio=increase,crop=2080:1170,zoompan=z='1.00+0.025*on/107':x='iw/2-(iw/zoom/2)+55*on/107':y='ih/2-(ih/zoom/2)':d=1:s=1920x1080:fps=25,trim=duration=4.3,setpts=PTS-STARTPTS,setsar=1,eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015,format=yuv420p[v5];
[v0][v1]xfade=transition=fade:duration=0.3:offset=1.9[x1];
[x1][v2]xfade=transition=fade:duration=0.3:offset=3.7[x2];
[x2][v3]xfade=transition=fade:duration=0.3:offset=5.2[x3];
[x3][v4]xfade=transition=fade:duration=0.3:offset=6.2[x4];
[x4][v5]xfade=transition=fade:duration=0.3:offset=7.7,trim=duration=12,fps=25,fade=t=in:st=0:d=0.3,fade=t=out:st=11.7:d=0.3,format=yuv420p[vout]
FILTER
)

ffmpeg -hide_banner -loglevel warning -y \
  -framerate 25 -loop 1 -t 2.2 -i "${SOURCES[5]}" \
  -framerate 25 -loop 1 -t 2.1 -i "${SOURCES[4]}" \
  -framerate 25 -loop 1 -t 1.8 -i "${SOURCES[3]}" \
  -framerate 25 -loop 1 -t 1.3 -i "${SOURCES[2]}" \
  -framerate 25 -loop 1 -t 1.8 -i "${SOURCES[1]}" \
  -framerate 25 -loop 1 -t 4.3 -i "${SOURCES[0]}" \
  -filter_complex "$FILTER_GRAPH" \
  -map '[vout]' -an -sn -dn -map_metadata -1 \
  -c:v ffv1 -level 3 -g 1 -pix_fmt yuv420p -threads 1 "$MASTER"

ffmpeg -hide_banner -loglevel warning -y -i "$MASTER" \
  -map 0:v:0 -an -sn -dn -map_metadata -1 -fps_mode cfr \
  -c:v libx264 -preset slow -crf 25 -profile:v high -level:v 4.1 \
  -pix_fmt yuv420p -threads 1 -movflags +faststart \
  "$WORK_DIR/pacifico-urbano.mp4"

ffmpeg -hide_banner -loglevel warning -y -i "$MASTER" \
  -map 0:v:0 -an -sn -dn -map_metadata -1 -fps_mode cfr \
  -fflags +bitexact -flags:v +bitexact \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -deadline good -cpu-used 1 \
  -row-mt 0 -threads 1 -tile-columns 0 -frame-parallel 0 \
  "$WORK_DIR/pacifico-urbano.webm"

ffmpeg -hide_banner -loglevel warning -y -ss 11.2 -i "$MASTER" \
  -map 0:v:0 -frames:v 1 -an -sn -dn -map_metadata -1 \
  -c:v mjpeg -q:v 3 "$WORK_DIR/pacifico-urbano-poster.jpg"

mv "$WORK_DIR/pacifico-urbano.mp4" "$OUTPUT_DIR/pacifico-urbano.mp4"
mv "$WORK_DIR/pacifico-urbano.webm" "$OUTPUT_DIR/pacifico-urbano.webm"
mv "$WORK_DIR/pacifico-urbano-poster.jpg" "$OUTPUT_DIR/pacifico-urbano-poster.jpg"
printf 'Built Pacifico urbano poster, MP4 and WebM from approved local sources.\n'
