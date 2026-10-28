import type { Metadata } from 'next';
import { ServicioContenido, metadataServicio } from '@/components/sections/servicio-page';
import { LEY_BUSTOS } from '@/lib/servicios/ley-bustos';

export const metadata: Metadata = metadataServicio(LEY_BUSTOS);

export default function Page() {
  return <ServicioContenido servicio={LEY_BUSTOS} />;
}
