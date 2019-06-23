import axios from 'axios';
import { Promise } from 'q';

const rootApi = 'https://api.themoviedb.org/';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';
var languages = ['pt-BR', 'en-US'];

// Listas primárias [lançamento, mais populares, mais votados, já assistidos]
var sort_by = ['primary_release_date.desc', 'popularity.desc', 'vote_count.desc', 'release_date.asc'];

// Listas personalizadas [já assistidos, marvel, 007, animados, ]
var list_id = ['114883', '114888', '114886', '114884',];

// qtde de filmes por requisição 20 p/ página
var page = 1


// Popular Movies
export function getPopularity() {
  const movie = axios.get(`${rootApi}3/discover/movie?api_key=${api_key}&language=${languages[0]}&${sort_by[1]}&page=${page}`);
  // const movie = axios.get(`${rootApi}?${sort_by[0]}.${gte}&${sort_by[0]}.${lte}`);
  return Promise.resolve(movie);
}

// Now playing Movies in this week
export function getNow() {
  let gte = getDate(0);
  let lte = getDate(7);
  const movie = axios.get(`${rootApi}3/discover/movie?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}.${gte}&${sort_by[0]}.${lte}&page=${page}`);
  return Promise.resolve(movie);
}

// Upcoming Movies to the next month
export function getUpcoming() {
  let gte = getDate(0);
  let lte = getDate(30);
  const movie = axios.get(`${rootApi}3/discover/movie?api_key=${api_key}&language=${languages[0]}&${sort_by[3]}.${gte}&${sort_by[0]}.${lte}&page=${page}`);
  return Promise.resolve(movie);
}

// Top rated Movies
export function getVoteCount() {
  const movie = axios.get(`${rootApi}3/discover/movie?api_key=${api_key}&language=${languages[0]}&${sort_by[2]}&page=${page}`);
  return Promise.resolve(movie);
}

// List Movies include Latest Movies
export function getListMovies() {
  const movie = axios.get(`${rootApi}4/list/${list_id[0]}?api_key=${api_key}&language=${languages[0]}&${sort_by[3]}&page=${page}`);
  return Promise.resolve(movie);
}

// Formatação de data 
function getDate(days) {
  let now = new Date();

  now.setDate(now.getDate() + days);

  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  mm =  (mm < 10) ? '0' + mm : mm;
  let yyyy = now.getFullYear();

  let dateFormatted = yyyy + '-' + mm + '-' + dd;
  console.log(dateFormatted)
  
  return dateFormatted;
}
