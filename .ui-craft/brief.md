# EstudioJuridicoVina — brief de superficie pública (sitio / marketing)

## 1. Product purpose
Sitio público de un estudio especializado en Derecho del Trabajo que debe ayudar a trabajadores, empresas y sindicatos a identificar rápidamente si este estudio es el correcto para su problema y a solicitar una evaluación con confianza.

## 2. Primary user
Trabajador o trabajadora con un conflicto laboral activo, buscando en Google desde el teléfono o un notebook en un contexto de urgencia, con plazos corriendo y baja tolerancia a ambigüedad; empresas y sindicatos son públicos secundarios que deben seguir siendo visibles desde la arquitectura principal.

## 3. Principles
1. **La autoridad se demuestra; no se decora.** La credibilidad sale de tribunales, doctrina, equipo y claridad jurídica, no de efectos vistosos ni lenguaje grandilocuente.
2. **Tres públicos, tres puertas claras.** Trabajador, empresa y sindicato deben encontrar su camino sin adivinar ni sentirse usuarios de segunda categoría.
3. **Institucional no significa frío.** La forma debe ser sobria y editorial, pero con suficiente calidez humana para invitar a consultar un caso real.
4. **El Derecho del Trabajo manda sobre el marketing.** Si una decisión de diseño simplifica de más una materia jurídica relevante, gana la claridad jurídica antes que el slogan.
5. **La página debe moverse con contención.** El motion acompaña jerarquía y transición; nunca compite con la lectura ni con la confianza.

## 4. Success metric for the surface
En menos de 30 segundos, una persona debe entender que el estudio es exclusivamente laboral, reconocer si entra como trabajador, empresa o sindicato, y llegar al CTA correcto sin confusión. Si el usuario no puede identificar su puerta de entrada en el primer scroll, la superficie falló.

## 5. Out of scope
- No convertir la home en un blog, enciclopedia ni listado completo de materias.
- No usar testimonios, métricas o claims que hoy no estén validados con evidencia o autorización.
- No resolver en la home toda la complejidad doctrinal o procesal de cada área.
- No mezclar otros tonos de marca (tech, startup, lujo, corporate genérico) que diluyan la especialización laboral.
- No usar motion espectacular, scroll-jacking, parallax invasivo ni video como adorno pasivo.

## 6. Learned constraints
- **2026-08-07** — La home trabaja con **variance 6**. *Why:* necesita carácter editorial e institucional sin caer en composición experimental que opaque la claridad jurídica.
- **2026-08-07** — La firma visual de la home es **la regla arena**. *Why:* introduce el acento cálido del sistema sin convertirlo en ornamento repetitivo.
- **2026-08-07** — El tono aprobado es **institucional-editorial**. *Why:* el estudio debe leerse serio y especializado, no corporativo genérico ni publicitario.
- **2026-08-07** — La navegación y la home deben mantener visibles los **tres públicos**: trabajador, empresa y sindicato. *Why:* la práctica real del estudio cubre esas tres puertas y la arquitectura debe reflejarlo.
- **2026-08-07** — Registro verbal en **usted** y español neutro, con CTA específicos por público. *Why:* el sitio debe sonar jurídico y claro, no coloquial ni genérico.
- **2026-08-07** — El body font operativo del sitio es **Source Sans 3**, aunque el design-system inicial propuso Inter. *Why:* Source Sans 3 sostiene mejor la lectura editorial sin empujar el sitio hacia estética de producto SaaS.
- **2026-08-07** — El hero puede tener motion más alto que el resto, pero el resto de la página se mantiene en **MOTION 4**. *Why:* el video del hero debe sentirse vivo sin romper la contención editorial del sitio completo.
- **2026-08-07** — `docs/design-system.md` es el **archivo canónico de tokens** de este proyecto. *Why:* se decidió mantener una sola fuente de verdad y no crear un `.ui-craft/tokens.md` paralelo que pueda divergir.

## 7. Fold classes used
- **2026-08-07** — `split-editorial-video` — home. Hero dividido: texto editorial a la izquierda, activo real (foto/video de Viña del Mar) a la derecha, con autoridad tipográfica y movimiento contenido.
