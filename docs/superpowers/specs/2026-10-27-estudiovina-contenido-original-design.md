# Integración del contenido del WordPress original — Diseño

Fecha: 2026-10-27  
Estado: aprobado por Rodrigo  
Proyecto: Estudio Jurídico Laboral de Viña del Mar

## 1. Objetivo

Incorporar quirúrgicamente al sitio Next.js actual la información institucional pública que existe en el WordPress original y que todavía no está representada en el proyecto: integrantes y formación del equipo, servicios específicos, contactos, dirección, cifras de trayectoria, política de honorarios y fotografías profesionales.

La integración debe conservar la arquitectura, identidad editorial y contenido ya desarrollado. No se recreará el WordPress ni se duplicarán las taxonomías actuales.

## 2. Fuentes verificadas

La recuperación se realizó el 2026-10-27 desde `https://vps-5952525-x.dattaweb.com/` mediante:

- recorrido del sitio renderizado;
- API pública REST de WordPress;
- páginas Inicio, Abogados, Servicios, Honorarios y Contacto;
- biblioteca pública de 43 medios;
- comparación con el proyecto Next.js actual.

El WordPress contiene cinco páginas publicadas, una entrada de prueba y un enlace desde Inicio hacia `/revise-su-causa-2/`, que actualmente responde con una página 404. La entrada de prueba y la ruta rota quedan excluidas.

## 3. Enfoque elegido

Se aplicará una **integración quirúrgica en las páginas actuales**.

Se descartan las siguientes alternativas:

1. Recrear `/abogados` y `/servicios`, porque duplicaría `/equipo` y `/areas`.
2. Tratar toda la información como un archivo histórico, porque impediría aprovechar datos institucionales y comerciales expresamente aprobados para incorporación.

## 4. Arquitectura de contenido

### 4.1 Inicio

La página de Inicio incorporará prueba institucional sin alterar su dirección visual:

- más de 10 años litigando;
- experiencia en más de 600 juicios laborales;
- especialización exclusiva en Derecho del Trabajo;
- compromiso de informar al cliente de cada paso y hacerlo participar en las decisiones;
- resumen del sistema de honorarios y enlace a `/honorarios`.

Las cifras se formularán como límites mínimos ya alcanzados, no como un contador actualizado en tiempo real.

### 4.2 Equipo

Se conservarán todos los perfiles existentes. No se eliminará a Joaquín Hernández Sepúlveda.

#### Lautaro Fariña Quezada

Se incorporarán:

- Licenciado en Ciencias Jurídicas y Sociales (2005);
- abogado de la Pontificia Universidad Católica de Valparaíso (2009);
- Magíster en Derecho del Trabajo por la Universidad de Talca y la Universidad de Valencia, España (2012);
- email `lautaro.farina@estudiovina.cl`;
- fotografía profesional original;
- publicación adicional: *El Despido Implícito o Constructivo*, Revista Estudios Laborales, Sociedad Chilena de Derecho del Trabajo (2016).

Se preservarán las publicaciones y referencias doctrinales ya documentadas en el sitio actual.

#### Pablo Vilches Letelier

Se completará el perfil con:

- nombre completo;
- Licenciado en Ciencias Jurídicas (2014);
- abogado de la Universidad Adolfo Ibáñez (2016);
- Diplomado en Derecho Laboral Colectivo, Universidad Diego Portales (2016);
- email `pablovilches@estudiovina.cl`;
- fotografía profesional original.

#### Diego Zarate Núñez

Se añadirá el perfil con:

- Licenciado en Ciencias Jurídicas, Universidad Andrés Bello (2018);
- abogado de la Universidad Andrés Bello (2019);
- email `diegozarate@estudiovina.cl`;
- fotografía profesional original.

#### Joaquín Hernández Sepúlveda

Se conservará el perfil actual sin modificaciones no requeridas.

### 4.3 Áreas y servicios

Las siete áreas existentes seguirán siendo la taxonomía canónica. Los servicios recuperados se distribuirán en ellas sin crear una página `/servicios` paralela:

- despido injustificado;
- autodespido o despido indirecto;
- incumplimiento de contrato;
- representación de trabajadores ante instancias administrativas de conciliación;
- tutela y vulneración de derechos fundamentales;
- acoso laboral y sexual;
- discriminación laboral;
- fuero maternal;
- cotizaciones impagas;
- accidentes laborales e indemnización;
- invalidez y prestaciones;
- negociación colectiva;
- constitución de sindicatos.

Cada servicio se incorporará en el área semánticamente correspondiente. No se eliminará ningún servicio actual.

### 4.4 Honorarios

Se creará `/honorarios` con una adaptación editorial fiel al contenido original:

- el estudio cobra honorarios si la gestión judicial obtiene un resultado favorable;
- el porcentaje se acuerda previamente con el cliente;
- el pago se realiza después de que el trabajador recibe efectivamente el dinero;
- no se realizan cobros por adelantado;
- el cobro se calcula sobre lo efectivamente pagado al trabajador.

La página cerrará con un CTA hacia `/contacto`. La ruta se incorporará a la navegación de forma coherente con los enlaces existentes.

### 4.5 Contacto

`SITE_CONFIG` será la única fuente de verdad para:

- email general: `contacto@estudiovina.cl`;
- teléfonos: `+56 9 7378 1151` y `+56 9 4563 1394`;
- dirección: `1 Oriente 252, oficinas 203 y 307, Viña del Mar`;
- horario: lunes a viernes, 09:00–18:00;
- enlace al mapa original.

La página de Contacto y el footer consumirán estos datos. Se retirarán los marcadores `XXXX`, el email de marcador y el WhatsApp no validado. El formulario actual se conservará.

## 5. Medios

Se descargarán y utilizarán las tres fotografías profesionales del equipo que actualmente aparecen en `/abogados/`:

- `1L.jpg` para Lautaro Fariña;
- `2p.jpg` para Pablo Vilches;
- `3d-1.jpg` para Diego Zarate.

Se preservará el logo y el sistema visual actuales. No se publicarán automáticamente imágenes antiguas de stock, duplicados ni archivos de demostración.

Se generará un inventario durable de los 43 medios originales con sus URLs, identificadores y estado de uso. Este inventario permite recuperar otros activos en el futuro sin inflar la entrega actual.

## 6. Datos y flujo

1. Los datos institucionales compartidos vivirán en `SITE_CONFIG`.
2. Los perfiles del equipo seguirán el patrón simple existente; no se introducirá un CMS ni una abstracción innecesaria.
3. Los servicios se añadirán a la estructura canónica de áreas existente.
4. Inicio, Contacto, Footer, Equipo y Honorarios consumirán estos datos sin duplicar contactos o direcciones en varios archivos.
5. Las imágenes descargadas se servirán localmente desde `public/images/equipo/`.

## 7. Estrategia de pruebas

Se seguirá RED → GREEN → REFACTOR.

### RED

Crear pruebas que fallen mientras:

- los contactos sigan siendo marcadores;
- falten los dos teléfonos, email, dirección u horario;
- no estén los cuatro perfiles del equipo;
- falten los servicios recuperados;
- no exista la política completa de honorarios;
- permanezcan enlaces internos hacia `/revise-su-causa-2/`.

### GREEN

Aplicar los cambios mínimos para satisfacer las pruebas.

### REFACTOR

Eliminar duplicación introducida por la integración sin alterar componentes ajenos al alcance.

### Verificación final

- `npm test`;
- `npm run typecheck`;
- `npm run build`;
- rastreo de todas las rutas internas;
- revisión visual en móvil y escritorio;
- verificación de imágenes del equipo;
- búsqueda de `XXXX`, emails de marcador y la ruta rota;
- revisión del diff para asegurar cambios quirúrgicos.

## 8. Alcance

### Incluido

- Inicio;
- Equipo;
- áreas y servicios;
- nueva página Honorarios;
- Contacto;
- footer y navegación;
- tres fotografías profesionales;
- inventario de los 43 medios originales;
- pruebas y verificación.

### Excluido

- rediseño general;
- cambio de identidad visual o logo;
- recreación de `/abogados` o `/servicios`;
- restauración del WordPress;
- nuevo formulario;
- panel para revisar causas;
- publicación de la entrada de prueba;
- uso de la ruta 404 `/revise-su-causa-2/`;
- incorporación indiscriminada de imágenes antiguas de stock o demostración.

## 9. Criterios de aceptación

- [ ] Inicio muestra las cifras y mensajes institucionales aprobados.
- [ ] Equipo contiene a Lautaro, Joaquín, Pablo y Diego.
- [ ] Lautaro, Pablo y Diego tienen la información y fotografías recuperadas.
- [ ] Las áreas incluyen todos los servicios originales aprobados.
- [ ] `/honorarios` explica las condiciones completas y enlaza a Contacto.
- [ ] Contacto y footer muestran email, dos teléfonos, dirección y horario reales.
- [ ] No quedan datos `XXXX` ni emails de marcador visibles.
- [ ] No existe ningún enlace interno hacia `/revise-su-causa-2/`.
- [ ] Existe inventario durable de los 43 medios originales.
- [ ] Tests, typecheck y build terminan correctamente.
- [ ] La revisión visual no detecta regresiones en móvil ni escritorio.

## 10. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| La información proviene de 2019–2020 | Incorporación aprobada explícitamente por Rodrigo; las cifras se expresan como mínimos históricos ya alcanzados. |
| Duplicación de contenidos | Mantener áreas actuales, centralizar contacto y no recrear páginas antiguas. |
| Fotografías pesadas | Descargar solo los retratos utilizados y optimizarlos sin degradación visible. |
| Afirmaciones económicas ambiguas | Mantener la formulación del WordPress y evitar ampliar sus condiciones. |
| Cambios accidentales en la identidad actual | Conservar logo, tokens, layout y componentes visuales salvo las adiciones necesarias. |
