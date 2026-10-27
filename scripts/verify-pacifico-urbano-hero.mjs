import { execFileSync } from 'node:child_process';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mediaDir = join(repoRoot, 'public/hero/pacifico-urbano');
const sourcesDir = join(mediaDir, 'sources');
const outputPath = join(mediaDir, 'build-verification.json');
const approvedVersion = '6.1.1-3ubuntu5';
const limits = { poster: 500 * 1024, video: 5 * 1024 * 1024 };
const files = {
  poster: join(mediaDir, 'pacifico-urbano-poster.jpg'),
  mp4: join(mediaDir, 'pacifico-urbano.mp4'),
  webm: join(mediaDir, 'pacifico-urbano.webm'),
};
const sourceNames = [
  '01-al-borde-del-estero.jpg',
  '02-edificio-copacabana.jpg',
  '03-muelle-vergara.jpg',
  '04-entre-arboles.jpg',
  '05-valparaiso-406.jpg',
  '06-valparaiso-at-night.jpg',
];

function run(command, args) {
  return execFileSync(command, args, { encoding: 'utf8' });
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function probe(path) {
  return JSON.parse(
    run('ffprobe', ['-v', 'error', '-show_format', '-show_streams', '-of', 'json', path]),
  );
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function parseRate(rate) {
  const [numerator, denominator] = rate.split('/').map(Number);
  return numerator / denominator;
}

function verifyVideo(label, path, expectedCodec) {
  const size = statSync(path).size;
  assert(size <= limits.video, `${label} exceeds 5 MiB: ${size} bytes`);
  const metadata = probe(path);
  assert(
    metadata.streams.length === 1 && metadata.streams[0].codec_type === 'video',
    `${label} must contain exactly one video stream and no audio/subtitle/data/attachment streams`,
  );
  const stream = metadata.streams[0];
  assert(stream.codec_name === expectedCodec, `${label} codec must be ${expectedCodec}`);
  assert(stream.width === 1920 && stream.height === 1080, `${label} must be 1920x1080`);
  const fps = parseRate(stream.avg_frame_rate);
  assert(Math.abs(fps - 25) < 0.001, `${label} frame rate must be 25 fps, got ${fps}`);
  const duration = Number(stream.duration ?? metadata.format.duration);
  assert(duration >= 11.8 && duration <= 12.2, `${label} duration out of range: ${duration}`);
  return {
    bytes: size,
    sha256: sha256(path),
    codec: stream.codec_name,
    pixelFormat: stream.pix_fmt,
    width: stream.width,
    height: stream.height,
    fps,
    duration,
    streamCount: metadata.streams.length,
  };
}

function verifyPoster(path) {
  const size = statSync(path).size;
  assert(size <= limits.poster, `poster exceeds 500 KiB: ${size} bytes`);
  const metadata = probe(path);
  assert(
    metadata.streams.length === 1 && metadata.streams[0].codec_type === 'video',
    'poster must contain exactly one image stream',
  );
  const stream = metadata.streams[0];
  assert(stream.codec_name === 'mjpeg', `poster must be JPEG, got ${stream.codec_name}`);
  assert(stream.width === 1920 && stream.height === 1080, 'poster must be 1920x1080');
  const signature = readFileSync(path).subarray(0, 3).toString('hex');
  assert(signature === 'ffd8ff', `poster must have a JPEG signature, got ${signature}`);
  return {
    bytes: size,
    sha256: sha256(path),
    codec: stream.codec_name,
    width: stream.width,
    height: stream.height,
  };
}

function verifyFaststart(path) {
  const bytes = readFileSync(path);
  const moov = bytes.indexOf(Buffer.from('moov'));
  const mdat = bytes.indexOf(Buffer.from('mdat'));
  assert(moov >= 0 && mdat >= 0 && moov < mdat, 'MP4 moov atom must precede mdat (faststart)');
  return { moovOffset: moov - 4, mdatOffset: mdat - 4 };
}

let tempDir;
try {
  const ffmpegVersion = run('ffmpeg', ['-version']);
  const ffprobeVersion = run('ffprobe', ['-version']);
  assert(
    ffmpegVersion.startsWith(`ffmpeg version ${approvedVersion}`),
    'unapproved ffmpeg version',
  );
  assert(
    ffprobeVersion.startsWith(`ffprobe version ${approvedVersion}`),
    'unapproved ffprobe version',
  );

  for (const path of Object.values(files)) statSync(path);
  const poster = verifyPoster(files.poster);
  const mp4 = verifyVideo('MP4', files.mp4, 'h264');
  assert(mp4.pixelFormat === 'yuv420p', `MP4 pixel format must be yuv420p, got ${mp4.pixelFormat}`);
  const faststart = verifyFaststart(files.mp4);
  const webm = verifyVideo('WebM', files.webm, 'vp9');

  const verification = {
    schemaVersion: 1,
    approvedToolchain: approvedVersion,
    tools: { ffmpegVersion, ffprobeVersion },
    buildParameters: {
      canvas: '1920x1080',
      frameRate: 25,
      durationSeconds: 12,
      audio: false,
      grade:
        'eq=contrast=1.03:saturation=0.86:brightness=-0.015,colorbalance=bs=.025:gs=.005:rs=-.015',
      loopTransition: '0.30s fade in and 0.30s fade out',
      timeline: [
        {
          source: sourceNames[5],
          start: 0,
          end: 2.2,
          transitionIn: 0,
          treatment: 'panoramic lateral pan',
        },
        {
          source: sourceNames[4],
          start: 1.9,
          end: 4,
          transitionIn: 0.3,
          treatment: 'slow pan and zoom',
        },
        {
          source: sourceNames[3],
          start: 3.7,
          end: 5.5,
          transitionIn: 0.3,
          treatment: 'slow push in',
        },
        {
          source: sourceNames[2],
          start: 5.2,
          end: 6.5,
          transitionIn: 0.3,
          treatment: 'brief vertical inset over restrained blurred field',
        },
        {
          source: sourceNames[1],
          start: 6.2,
          end: 8,
          transitionIn: 0.3,
          treatment: 'brief rising inset over restrained blurred field',
        },
        {
          source: sourceNames[0],
          start: 7.7,
          end: 12,
          transitionIn: 0.3,
          treatment: 'dominant lateral pan and final hold',
        },
      ],
      master: ['ffv1', 'level=3', 'g=1', 'yuv420p'],
      mp4: [
        'libx264',
        'preset=slow',
        'crf=25',
        'profile=high',
        'level=4.1',
        'pix_fmt=yuv420p',
        'movflags=+faststart',
        'threads=1',
      ],
      webm: [
        'libvpx-vp9',
        'crf=34',
        'b:v=0',
        'deadline=good',
        'cpu-used=1',
        'row-mt=0',
        'threads=1',
        'tile-columns=0',
        'frame-parallel=0',
        'fflags=+bitexact',
        'flags:v=+bitexact',
      ],
      poster: ['ss=11.2', 'frames:v=1', 'q:v=3', 'codec=mjpeg'],
      sizeBudgetsBytes: limits,
    },
    inputs: Object.fromEntries(
      sourceNames.map((name) => [
        name,
        { bytes: statSync(join(sourcesDir, name)).size, sha256: sha256(join(sourcesDir, name)) },
      ]),
    ),
    buildScript: {
      path: 'scripts/build-pacifico-urbano-hero.sh',
      sha256: sha256(join(repoRoot, 'scripts/build-pacifico-urbano-hero.sh')),
    },
    outputs: { poster, mp4: { ...mp4, faststart }, webm },
  };

  const tmpRoot = process.env.TMPDIR || join(repoRoot, '.tmp');
  mkdirSync(tmpRoot, { recursive: true });
  tempDir = mkdtempSync(join(tmpRoot, 'pacifico-verify-'));
  const temporaryReport = join(tempDir, 'build-verification.json');
  writeFileSync(temporaryReport, `${JSON.stringify(verification, null, 2)}\n`);
  renameSync(temporaryReport, outputPath);
  console.log('Pacifico urbano media verification: PASS');
  console.log(JSON.stringify(verification.outputs, null, 2));
} catch (error) {
  console.error(`Pacifico urbano media verification: FAIL\n${error.message}`);
  process.exitCode = 1;
} finally {
  if (tempDir) rmSync(tempDir, { recursive: true, force: true });
}
