import axios from "axios";

const API_KEY = "live_S61BmtHwjPYK2pc1C8E0alnn51Jjc0J1eSExNjlypjEIplEXmg9eiVfgxFb3AgUt";
const BASE_URL = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

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