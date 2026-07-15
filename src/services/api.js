import axios from "axios";

const API_KEY = "live_S61BmtHwjPYK2pc1C8E0alnn51Jjc0J1eSExNjlypjEIplEXmg9eiVfgxFb3AgUt";
const BASE_URL = "https://api.thecatapi.com/v1/images/search";

export const searchPost = async (query, limit = 10) => {
  const res = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      breed_ids: "beng",
      limit,
      s: query,
    },
  });
  return res.data;
};

export const getPostDetail = async (id) => {
  const res = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      i: id,
    },
  });
  return res.data;
};