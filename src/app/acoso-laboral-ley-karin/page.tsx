import type { Metadata } from 'next';
import { ServicioContenido, metadataServicio } from '@/components/sections/servicio-page';
import { ACOSO_LEY_KARIN } from '@/lib/servicios/acoso-ley-karin';

export const metadata: Metadata = metadataServicio(ACOSO_LEY_KARIN);

export default function Page() {
  return <ServicioContenido servicio={ACOSO_LEY_KARIN} />;
}
