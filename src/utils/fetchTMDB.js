import axios from "axios";
import { TMDB_API_PARAMS, TMDB_API_URL } from "../config/tmdbAPi";

export const fetchTMDB = (url, params = {}) => {
  return axios.get(`${TMDB_API_URL}${url}`, {
    params: { ...TMDB_API_PARAMS, ...params },
  });
};
