import type { Metadata } from 'next';
import { ServicioContenido, metadataServicio } from '@/components/sections/servicio-page';
import { PROTOCOLO_LEY_KARIN } from '@/lib/servicios/protocolo-ley-karin';

export const metadata: Metadata = metadataServicio(PROTOCOLO_LEY_KARIN);

export default function Page() {
  return <ServicioContenido servicio={PROTOCOLO_LEY_KARIN} />;
}
