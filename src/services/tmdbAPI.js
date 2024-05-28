import { fetchTMDB } from "utils/fetchTMDB";

/**
 * Get Movie lists
 */
const getMovies = (query, page = 1) => {
  return fetchTMDB(`/movie/${query}`, { page });
};

/**
 * Get Movie by id
 */
const getMovie = (id) => {
  return fetchTMDB(`/movie/${id}`, {
    append_to_response: "videos,credits,images,external_ids,release_dates",
    include_image_language: "en",
  });
};

/**
 * Get Tv Shows (listing)
 */
const getTvShows = (query, page = 1) => {
  return fetchTMDB(`/tv/${query}`, { page });
};

export { getMovies, getMovie, getTvShows };
