import "./style.css";

const genero = {
  popRock: "🎵 Pop Rock",
  rock: "🎸 Rock",
  hardRock: "🤘 Hard Rock",
  clasica: "🎼 Clásica",
};

const estiloTitulo =
  "font-weight: bold; font-size: 1.5rem; background-color: green";

const grupos = [
  {
    nombre: "The Beatles",
    año: "1960",
    activo: true,
    genero: genero.popRock,
  },
  {
    nombre: "Queen",
    año: "1970",
    activo: false,
    genero: genero.rock,
  },
  {
    nombre: "AC DC",
    año: "1973",
    activo: true,
    genero: genero.hardRock,
  },
  {
    nombre: "Ludvig van Beethoven",
    año: "1770",
    activo: false,
    genero: genero.clasica,
  },
  {
    nombre: "The Rolling Stones",
    año: "1962",
    activo: true,
    genero: genero.rock,
  },
];

grupos.forEach((grupo) => {
  console.log(
    `%c${grupo.nombre}%c / ${grupo.año} / Activo: ${grupo.activo} / ${grupo.genero}`,
    estiloTitulo,
    ""
  );
});
