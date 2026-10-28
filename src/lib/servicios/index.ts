import type { Servicio } from './tipos';
import { DESPIDO_INJUSTIFICADO } from './despido-injustificado';
import { AUTODESPIDO } from './autodespido';
import { LEY_BUSTOS } from './ley-bustos';
import { ACOSO_LEY_KARIN } from './acoso-ley-karin';
import { PROTOCOLO_LEY_KARIN } from './protocolo-ley-karin';

export const SERVICIOS: Servicio[] = [
  DESPIDO_INJUSTIFICADO,
  AUTODESPIDO,
  LEY_BUSTOS,
  ACOSO_LEY_KARIN,
  PROTOCOLO_LEY_KARIN,
];

export type { Servicio } from './tipos';
