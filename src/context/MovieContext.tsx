/* eslint-disable camelcase */
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import {
  getMovieDetail,
  getSearchResult,
  getTrendingMovies,
} from '../services/movie-services';

interface MovieContextData {
  movies: MovieProps[];
  queryMovies: MovieProps[];
  movieDetail: MovieDetailProps | undefined;
  fetchTrendingMovies: (page: number) => void;
  updateTrendingMovies: (page: number) => void;
  handleMovieDetail: (movieDetail: MovieDetailProps) => void;
  handleQueryMovies: (queryMovies: MovieProps[]) => void;
  handleSearchMovies: (movieName: string) => void;
  // fetchMovieDetail: (mId: string) => void;
}
interface MovieProviderProps {
  children: ReactNode;
}

interface MovieProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieDetailProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  runtime: number;
  // genres: GenreProps[];
  // cast: CastProps[];
  // crew: CrewProps[];
  // social: SocialProps[];
}

interface GenreProps {
  id: number;
  name: string;
}

interface CastProps {
  id: number;
  name: string;
}

interface CrewProps {
  id: number;
  name: string;
  job: string;
}

interface SocialProps {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  // const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [queryMovies, setQueryMovies] = useState<MovieProps[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();

  function handleQueryMovies(qMovies: MovieProps[]) {
    setQueryMovies(queryMovies);
  }

  async function fetchTrendingMovies(page: number) {
    const { data } = await getTrendingMovies(page);
    setMovies(data.results);
    console.log(movies);
  }

  async function updateTrendingMovies(page: number) {
    const { data } = await getTrendingMovies(page);
    setMovies([...movies, ...data.results]);
    console.log(movies);
  }

  async function handleMovieDetail() {
    setMovieDetail(movieDetail);
  }

  async function handleSearchMovies(mName: string) {
    const { data } = await getSearchResult(mName);
    setQueryMovies(data.results);
  }

  useEffect(() => {
    // fetchTrendingMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        queryMovies,
        movieDetail,
        fetchTrendingMovies,
        updateTrendingMovies,
        handleMovieDetail,
        handleQueryMovies,
        handleSearchMovies,
        // fetchMovieDetail,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
