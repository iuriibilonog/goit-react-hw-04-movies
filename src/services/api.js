import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const key = "api_key=763543711af3137e55771560fa8539f1";

function getDataServer(url = "", config = {}) {
  return axios.get(url).then(({ data }) => data);
}

export function getTrendingMovies() {
  return getDataServer(`${BASE_URL}/trending/movie/day?${key}`);
}

export function getMovieByQuery(query) {
  return getDataServer(`${BASE_URL}/search/movie?${key}&query=${query}`);
}

export function getMovieDetails(movieId) {
  return getDataServer(`${BASE_URL}/movie/${movieId}?${key}`);
}

export function getMovieCredits(movieId) {
  return getDataServer(`${BASE_URL}/movie/${movieId}/credits?${key}`);
}

export function getMovieReviews(movieId) {
  return getDataServer(`${BASE_URL}/movie/${movieId}/reviews?${key}`);
}
