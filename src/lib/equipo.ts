// lib/equipo.ts
// Datos canónicos del equipo del estudio.
// Fuente: WordPress original (vps-5952525-x.dattaweb.com/abogados/), recuperado 2026-10-27
// y aprobado en docs/superpowers/specs/2026-10-27-estudiovina-contenido-original-design.md §4.2.
// Fotos: /images/equipo/{lautaro-farina,pablo-vilches,diego-zarate}.jpg (1200×1748, sin EXIF).

export type Abogado = {
  slug: string;
  nombre: string;
  area: string; // especialidad destacada (titular en la home)
  credenciales: string[]; // formación verificada
  foto: string | null;
  email?: string;
  bio: string;
};

export const EQUIPO: Abogado[] = [
  {
    slug: "lautaro-farina",
    nombre: "Lautaro Fariña Quezada",
    area: "Remuneraciones y doctrina",
    credenciales: [
      "Licenciado en Ciencias Jurídicas y Sociales (2005)",
      "Abogado, Pontificia Universidad Católica de Valparaíso (2009)",
      "Magíster en Derecho del Trabajo, Universidad de Talca / Universidad de Valencia (2012)",
    ],
    foto: "/images/equipo/lautaro-farina-v2.jpg",
    email: "lautaro.farina@estudiovina.cl",
    bio: "Abogado especializado en Derecho del Trabajo. Autor de \"Regulación del Sueldo en el Código del Trabajo\" (2009), doctrina citada por la Dirección del Trabajo en su jurisprudencia administrativa sobre remuneraciones.",
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
    foto: "/images/equipo/pablo-vilches.jpg",
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
    foto: "/images/equipo/diego-zarate.jpg",
    email: "diegozarate@estudiovina.cl",
    bio: "Abogado de la Universidad Andrés Bello (2019). Integra el equipo de Derecho del Trabajo del estudio.",
  },
  {
    slug: "joaquin-hernandez",
    nombre: "Joaquín Hernández Sepúlveda",
    area: "Derecho del Trabajo",
    credenciales: [],
    foto: null,
    bio: "Abogado con práctica en asesoría y representación de trabajadores, empresas y organizaciones sindicales. Su experiencia comprende litigación laboral, cumplimiento normativo y asesoría preventiva para empleadores.",
  },
] as const;
