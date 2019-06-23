import axios from 'axios';
import { Promise } from 'q';

const rootApi = 'https://api.themoviedb.org/3/discover/movie';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';
var languages = ['pt-BR', 'en-US'];
// [lançamento, mais populares, mais votados]
var sort_by = ['release_date.desc', 'popularity.desc', 'vote_count.desc'];
var page = 1


export function getPopularity() {
  const movie = axios.get(`${rootApi}?api_key=${api_key}&language=${languages[0]}&${sort_by[1]}&page=${page}`);
  // const movie = axios.get(`${rootApi}?${sort_by[0]}.${gte}&${sort_by[0]}.${lte}`);
  return Promise.resolve(movie);
}

export function getRelease() {
  let gte = getDate(30);
  let lte = getDate(15);
  const movie = axios.get(`${rootApi}?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}.${gte}&${sort_by[0]}.${lte}&page=${page}`);
  // const movie = axios.get(`${rootApi}?${sort_by[0]}.${gte}&${sort_by[0]}.${lte}`);
  return Promise.resolve(movie);
}

export function getVoteCount() {
  const movie = axios.get(`${rootApi}?api_key=${api_key}&language=${languages[0]}&${sort_by[2]}&page=${page}`);
  // const movie = axios.get(`${rootApi}?${sort_by[0]}.${gte}&${sort_by[0]}.${lte}`);
  return Promise.resolve(movie);
}

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
