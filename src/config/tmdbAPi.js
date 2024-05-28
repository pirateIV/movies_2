/**
 * API url
 */
const TMDB_API_URL = "https://api.themoviedb.org/3";

const TMDB_API_PARAMS = {
  api_key: import.meta.env.VITE_TMDB_API_KEY,
  language: "en-US",
};

export { TMDB_API_URL, TMDB_API_PARAMS };
