import axios from "axios";

// Misma API y mismo flujo de datos que el proyecto original en React.
// (TheCatApi se usa como fuente de imagenes de "publicaciones")

const API_KEY = "live_S61BmtHwjPYK2pc1C8E0alnn51Jjc0J1eSExNjlypjEIplEXmg9eiVfgxFb3AgUt";
const BASE_URL = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
const FEED_URL = "https://api.thecatapi.com/v1/images/search?limit=15";

// Trae las publicaciones del feed (misma llamada que hacia App.jsx en el proyecto web)
export const getFeed = async () => {
  const res = await axios.get(FEED_URL);

  return res.data.map((gato, index) => ({
    id: gato.id,
    contenido: gato.url,
    usuario: `cat_user_${index + 1}`,
    fotoPerfil: `https://i.pravatar.cc/40?img=${index + 1}`,
    descripcion: "Un gatito muy lindo 🐱",
    fecha: "Hace unas horas",
    likes: Math.floor(Math.random() * 500),
    comentarios: Math.floor(Math.random() * 100),
    reenviados: Math.floor(Math.random() * 50),
  }));
};

export const searchPost = async (query) => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: query,
    },
  });
  return res.data;
};

export const getPostDetail = async (id) => {
  const res = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return res.data;
};
