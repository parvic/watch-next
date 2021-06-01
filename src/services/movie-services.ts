import { api } from './api';

export async function getTrendingMovies() {
  try {
    const { data, status } = await api.get(
      `/discover/movie?api_key=34d6e856a918914f65527a936f73f3f2&language=pt-BR&sort_by=popularity.desc&page=1`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getSearchResult(movieName: string) {
  try {
    const { data, status } = await api.get(
      `search/movie?api_key=34d6e856a918914f65527a936f73f3f2&language=pt-BR&query=${movieName}&page=1&include_adult=false`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getMovieDetail(movieId: string) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}?api_key=34d6e856a918914f65527a936f73f3f2&language=pt-BR`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}

export async function getCredits(movieId: number) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}/credits?api_key=34d6e856a918914f65527a936f73f3f2&language=pt-BR`,
    );
    return { data, status };
  } catch (error) {
    return { error };
  }
}
