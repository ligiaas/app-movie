import axios from 'axios';

const rootApi = 'https://api.themoviedb.org/3/discover/movie';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';
var languages = ['pt-BR', 'en-US'];
var param = 'popularity.desc';

export function getMovies() {
  const movie = axios.get(`${rootApi}?api_key=${api_key}&language=${languages[0]}&sort_by=${param}`);
  return Promise.all([movie]);
}
