import axios from 'axios';

const rootApi = process.env.REACT_APP_ROOT_API;
const queryParams = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'pt-BR',
  page: 1,
  include_adult: false,
};

const buildUrl = (index, type = 'movies') => {
  if (type === 'movies') {
    // Listas primárias [em cartaz, mais votados, popular, próximos lançamentos]
    let sort_by = ['now_playing','top_rated', 'popular', 'upcoming'];
    return axios.get(`${rootApi}/3/movie/${sort_by[index]}`, { params: queryParams });
  }

  // Listas personalizadas [marvel, 007, animados]
  let list_id = ['114888', '114886', '114884',];
  return axios.get(`${rootApi}4/list/${list_id[index]}`, { params: queryParams });
}

export function getMovies() {

  // Listas primárias
  const now_playing = buildUrl(0);
  const top_rated = buildUrl(1);
  const popular = buildUrl(2);
  const upcoming = buildUrl(3);

  // Listas personalizadas
  const marvel = buildUrl(0, 'list');
  const jb = buildUrl(1, 'list');
  const animate = buildUrl(2, 'list');

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

export function searchMovies(query) {
  return axios.get(`${rootApi}3/search/movie`, {
    params: {
      ...queryParams,
      query,
    }
  });
}

export function getMovie(query) {
  return axios.get(`${rootApi}3/movie/${query}`, { params: queryParams });
}
