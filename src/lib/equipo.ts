// lib/equipo.ts
// Datos canónicos del equipo del estudio.
// FUENTE DE VERDAD: página antigua /abogados/ (vps-5952525-x.dattaweb.com/abogados/), 2026-10-27.
// Datos extraídos textualmente de la antigua: formación, emails y publicaciones de Lautaro.
// Fotos: /images/equipo/{lautaro-farina,pablo-vilches,diego-zarate}.jpg (1200×1748, sin EXIF).

export type Publicacion = {
  titulo: string;
  medio: string;
  anio: string;
};

export type Abogado = {
  slug: string;
  nombre: string;
  area: string; // especialidad destacada (titular)
  credenciales: string[]; // formación verificada (línea por línea, como la antigua)
  foto: string | null;
  /** object-position para alinear las caras sin recortar el archivo. */
  fotoPosition?: string;
  email?: string;
  linkedin?: string;
  bio: string;
  publicaciones?: Publicacion[];
};

export const EQUIPO: Abogado[] = [
  {
    slug: "lautaro-farina",
    nombre: "Lautaro Fariña Quezada",
    area: "Remuneraciones y doctrina",
    credenciales: [
      "Licenciado en Ciencias Jurídicas y Sociales (2005)",
      "Abogado, Pontificia Universidad Católica de Valparaíso (2009)",
      "Magíster en Derecho del Trabajo, Universidad de Talca / Universidad de Valencia, España (2012)",
    ],
    foto: "/images/equipo/lautaro-farina-v2.jpg",
    fotoPosition: "50% 72%",
    email: "lautaro.farina@estudiovina.cl",
    bio: "Abogado especializado en Derecho del Trabajo. Su producción doctrinal sobre remuneraciones ha sido citada por la Dirección del Trabajo en su jurisprudencia administrativa.",
    publicaciones: [
      {
        titulo: "Regulación del Sueldo en el Código del Trabajo",
        medio: "Editorial Legal Publishing",
        anio: "2010",
      },
      {
        titulo: "El Despido Implícito o Constructivo",
        medio: "Revista Estudios Laborales, Sociedad Chilena de Derecho del Trabajo",
        anio: "2016",
      },
      {
        titulo: "Remuneración Variable: Elemento Diferenciador y Relación con las Remuneraciones Participativas",
        medio: "Revista Chilena de Derecho del Trabajo, Vol. 6, N° 11",
        anio: "2015",
      },
    ],
  },
  {
    slug: "pablo-vilches",
    nombre: "Pablo Vilches Letelier",
    area: "Derecho Laboral Colectivo",
    credenciales: [
      "Licenciado en Ciencias Jurídicas (2014)",
      "Abogado, Universidad Adolfo Ibáñez (2016)",
      "Diplomado en Derecho Laboral Colectivo, Universidad Diego Portales (2016)",
    ],
    foto: "/images/equipo/pablo-vilches-v2.jpg",
    fotoPosition: "50% 28%",
    email: "pablovilches@estudiovina.cl",
    bio: "Abogado del estudio con experiencia en litigación laboral y comparecencia ante los Juzgados de Letras del Trabajo, con formación especializada en derecho laboral colectivo.",
  },
  {
    slug: "diego-zarate",
    nombre: "Diego Zarate Núñez",
    area: "Derecho del Trabajo",
    credenciales: [
      "Licenciado en Ciencias Jurídicas, Universidad Andrés Bello (2018)",
      "Abogado, Universidad Andrés Bello (2019)",
    ],
    foto: "/images/equipo/diego-zarate-v2.jpg",
    fotoPosition: "50% 26%",
    email: "diegozarate@estudiovina.cl",
    bio: "Abogado de la Universidad Andrés Bello (2019). Integra el equipo de Derecho del Trabajo del estudio.",
  },
  {
    slug: "enzo-bullion",
    nombre: "Enzo Bullion",
    area: "Derecho del Trabajo",
    credenciales: [
      "Abogado, Pontificia Universidad Católica de Valparaíso (2024)",
    ],
    foto: null,
    fotoPosition: "50% 50%",
    bio: "Abogado de la Pontificia Universidad Católica de Valparaíso (2024). Integra el equipo de Derecho del Trabajo del estudio.",
  },
] as const;
