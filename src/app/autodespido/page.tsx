import type { Metadata } from 'next';
import { ServicioContenido, metadataServicio } from '@/components/sections/servicio-page';
import { AUTODESPIDO } from '@/lib/servicios/autodespido';

export const metadata: Metadata = metadataServicio(AUTODESPIDO);

export default function Page() {
  return <ServicioContenido servicio={AUTODESPIDO} />;
}
