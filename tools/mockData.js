const innerJoin = (xs, ys, sel) =>
    xs.reduce((zs, x) =>
    ys.reduce((zs, y) =>        // cartesian product - all combinations
    zs.concat(sel(x, y) || []), // filter out the rows and columns you want
    zs), []);

const allcourses = [
  {
    id: 1,
    title: "Ambientes de Desarrollo de Software",
    slug: "ambientes-desarrollo-software",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 2,
    title: "Ingeniería de Requisitos",
    slug: "ingenieria-requisitos",
    professorId: 2,
    category: "Software Engineering"
  },
  {
    id: 3,
    title: "Proceso de Ingeniería de Software",
    slug: "proceso-ingenieria-software",
    professorId: 3,
    category: "Software Engineering"
  },
  {
    id: 4,
    title: "Gestión de Proyectos de Software",
    slug: "gestion-proyectos-software",
    professorId: 4,
    category: "Software Engineering"
  },
  {
    id: 5,
    title: "Diseño y Construcción de Software",
    slug: "diseño-construccion-software",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 6,
    title: "Arquitectura de Software",
    slug: "arquitectura-software",
    professorId: 5,
    category: "Software Engineering"
  },
  {
    id: 7,
    title: "Big Data",
    slug: "big-data",
    professorId: 6,
    category: "Software Engineering"
  },
  {
    id: 8,
    title: "Metodología de Investigación",
    slug: "metodologia-investigacion",
    professorId: 7,
    category: "Research"
  },
  {
    id: 9,
    title: "Calidad del Proceso de Software",
    slug: "calidad-proceso-software",
    professorId: 8,
    category: "Software Engineering"
  },
  {
    id: 10,
    title: "Gestión de la Configuración y Mantenimiento de Software",
    slug: "gestion-configuracion-mantenimiento-software",
    professorId: 5,
    category: "Software Engineering"
  },
  {
    id: 11,
    title: "Seminario de Investigación I",
    slug: "seminario-investigacion-i",
    professorId: 8,
    category: "Research"
  },
  {
    id: 12,
    title: "Tecnología Cloud Computing (Electivo)",
    slug: "tecnologia-cloud-computing",
    professorId: 9,
    category: "Software Engineering"
  },
  {
    id: 13,
    title: "Desarrollo de Software para Dispositivos",
    slug: "desarrollo-software-dispositivos",
    professorId: 1,
    category: "Software Engineering"
  },
  {
    id: 14,
    title: "Fábrica de Software",
    slug: "fabrica-software",
    professorId: 10,
    category: "Software Engineering"
  },
  {
    id: 15,
    title: "Seminario de Investigación II",
    slug: "seminario-investigacion-ii",
    professorId: 11,
    category: "Research"
  },
  {
    id: 16,
    title: "Gestión de Procesos de Negocio (Electivo)",
    slug: "gestion-procesos-negocio",
    professorId: 12,
    category: "Software Engineering"
  }
];

const professors = [
  { id: 1, name: "Efrain Bautista" },
  { id: 2, name: "Wilder Inga" },
  { id: 3, name: "Amador Izarra" },
  { id: 4, name: "Elmer Zapata" },
  { id: 5, name: "Félix Santos" },
  { id: 6, name: "Luis Saavedra" },
  { id: 7, name: "Nora La Serna" },
  { id: 8, name: "Lenis Wong" },
  { id: 9, name: "Manuel Caldas" },
  { id: 10, name: "Luis Castillo" },
  { id: 11, name: "David Mauricio" },
  { id: 12, name: "Marco Rivas" },
];

const newCourse = {
  id: null,
  title: "",
  professorId: null,
  category: ""
};

const courses = innerJoin(professors,allcourses,
  ({id: uid, name}, {id, title, slug,professorId,category}) =>
      professorId === uid && {id, title, slug,professorId,name,category});



// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  professors
};