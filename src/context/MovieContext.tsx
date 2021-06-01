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
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [queryMovies, setQueryMovies] = useState<MovieProps[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();

  function handleQueryMovies(qMovies: MovieProps[]) {
    setQueryMovies(queryMovies);
  }

  async function fetchTrendingMovies() {
    const { data } = await getTrendingMovies();
    setMovies(data.results);
  }

  async function handleMovieDetail(mDetail: MovieDetailProps) {
    setMovieDetail(movieDetail);
  }

  async function handleSearchMovies(mName: string) {
    const { data } = await getSearchResult(mName);
    setQueryMovies(data.results);
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        queryMovies,
        movieDetail,
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
