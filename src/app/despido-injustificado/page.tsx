import type { Metadata } from 'next';
import { ServicioContenido, metadataServicio } from '@/components/sections/servicio-page';
import { DESPIDO_INJUSTIFICADO } from '@/lib/servicios/despido-injustificado';

export const metadata: Metadata = metadataServicio(DESPIDO_INJUSTIFICADO);

export default function Page() {
  return <ServicioContenido servicio={DESPIDO_INJUSTIFICADO} />;
}
