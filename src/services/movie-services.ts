import { api } from './api';

export async function getTrendingMovies(pageNumber: number) {
  try {
    const { data, status } = await api.get(
      `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&page=${pageNumber}`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getSearchResult(movieName: string) {
  try {
    const { data, status } = await api.get(
      `search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&query=${movieName}&page=1&include_adult=false`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getMovieDetail(movieId: string) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getCredits(movieId: number) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getSimilarMovies(movieId: number) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getMovieSocial(movieId: number) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}
