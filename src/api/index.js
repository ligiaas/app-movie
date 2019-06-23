import axios from 'axios';
import { Promise } from 'q';
import date from '../utils/date';

const rootApi = 'https://api.themoviedb.org/';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';
const languages = ['pt-BR', 'en-US'];
const discover = `{${rootApi}3/discover/movie?api_key=${api_key}&language=${languages[0]}&}`;

// Listas primárias [lançamento, mais populares, mais votados, já assistidos]
var sort_by = ['popularity.desc', 'primary_release_date','vote_count.desc', 'release_date.asc'];

// Listas personalizadas [já assistidos, marvel, 007, animados]
var list_id = ['114883', '114888', '114886', '114884',];

// qtde de filmes por requisição 20 p/ página
var page = 1;

var last_week = date(-7);
var now = date(0);
var next_week = date(7);
var next_month = date(30);

export function getMovies() {

  // Listas primárias
  const popularity_movies = axios.get(`${discover}${sort_by[0]}&page=${page}&${sort_by[0]}.gte=${last_week}&${sort_by[0]}.lte=${now}`);
  const now_playing_movies = axios.get(`${discover}${sort_by[1]}&page=${page}&${sort_by[1]}.gte=${now}&${sort_by[1]}.lte=${next_week}`);
  const top_rated_movies = axios.get(`${discover}${sort_by[2]}&page=${page}`);
  const upcoming_movies = axios.get(`${discover}${sort_by[3]}&page=${page}&${sort_by[3]}.gte=${now}&${sort_by[3]}.lte=${next_month}`);

  // Listas personalizadas
  const latest_movies = axios.get(`${rootApi}4/list/${list_id[0]}?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}&page=${page}`);
  const marvel_movies = axios.get(`${rootApi}4/list/${list_id[1]}?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}&page=${page}`);
  const jb_movies = axios.get(`${rootApi}4/list/${list_id[2]}?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}&page=${page}`);
  const animate_movies = axios.get(`${rootApi}4/list/${list_id[3]}?api_key=${api_key}&language=${languages[0]}&${sort_by[0]}&page=${page}`);

  return Promise.all([popularity_movies, now_playing_movies, top_rated_movies, upcoming_movies, latest_movies, marvel_movies, jb_movies, animate_movies])
}
