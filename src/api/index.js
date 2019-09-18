import axios from 'axios';
import { Promise } from 'q';

const rootApi = 'https://api.themoviedb.org/';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';
const languages = ['pt-BR', 'en-US'];
// qtde de filmes por requisição 20 p/ página
var page = 1;
const primary = `?api_key=${api_key}&language=${languages[0]}&page=${page}`;

// Listas primárias [em cartaz, mais votados, popular, próximos lançamentos]
var sort_by = ['now_playing','top_rated', 'popular', 'upcoming'];

// Listas personalizadas [marvel, 007, animados]
var list_id = ['114888', '114886', '114884'];


export function getMovies() {

  // Listas primárias
  const now_playing = axios.get(`${rootApi}3/movie/${sort_by[0]}${primary}`);
  const top_rated = axios.get(`${rootApi}3/movie/${sort_by[1]}${primary}`);
  const popular = axios.get(`${rootApi}3/movie/${sort_by[2]}${primary}`);
  const upcoming = axios.get(`${rootApi}3/movie/${sort_by[3]}${primary}`);

  // Listas personalizadas
  const marvel = axios.get(`${rootApi}4/list/${list_id[0]}?api_key=${api_key}&language=${languages[0]}&page=${page}`);
  const jb = axios.get(`${rootApi}4/list/${list_id[1]}?api_key=${api_key}&language=${languages[0]}&page=${page}`);
  const animate = axios.get(`${rootApi}4/list/${list_id[2]}?api_key=${api_key}&language=${languages[0]}&page=${page}`);

  return Promise.all(
    [ now_playing,
      top_rated,
      popular,
      upcoming,
      marvel,
      jb,
      animate
    ]
  )
}

export function searchMovies(value) {
  let query = value;
  const search_movies = axios.get(`${rootApi}/3/search/movie?api_key=${api_key}&language=${languages[0]}&query=${query}&page=${page}&include_adult=false}`)

  return Promise.resolve(search_movies);
}

export function getMovie(value) {
  let query = value;
  const movie = axios.get(`${rootApi}/3/movie/${query}?api_key=${api_key}&language=${languages[0]}}`)
  

  return Promise.resolve(movie);
}
