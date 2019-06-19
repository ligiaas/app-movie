import axios from 'axions';

const rootApi = 'https://api.themoviedb.org/3';
const api_key = '9b3b5f58a3aa91db5dca0d71820a7321';

export function getMovies() {
  const movie = axios.get(`${rootApi}/movie/550?api_key=${api_key}`);
  const tv = axios.get(`${rootApi}/movie/550?api_key=${api_key}`);
}


// /movie/550?api_key=