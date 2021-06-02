/* eslint-disable camelcase */
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import {
  getMovieDetail,
  getSearchResult,
  getSimilarMovies,
  getTrendingMovies,
  getMovieSocial,
} from '../services/movie-services';

interface MovieContextData {
  movies: MovieProps[];
  queryMovies: MovieProps[];
  similarMovies: MovieProps[];
  featuredMovie: MovieProps | undefined;
  movieDetail: MovieDetailProps | undefined;
  movieSocial: SocialProps | undefined;
  handleMovieDetailId: (movieId: number) => void;
  fetchTrendingMovies: (page: number) => void;
  fetchMovieSocial: (movieId: number) => void;
  updateTrendingMovies: (page: number) => void;
  handleMovieDetail: (movieDetail: MovieDetailProps) => void;
  fetchFeaturedMovie: () => void;
  fetchSimilarMovies: (movieId: number) => void;
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
  backdrop_path: string;
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

interface SocialProps {
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movieDetailId, setMovieDetailId] = useState<number>(0);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [movieSocial, setMovieSocial] = useState<SocialProps>();
  const [similarMovies, setsimilarMovies] = useState<MovieProps[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<MovieProps>();
  const [queryMovies, setQueryMovies] = useState<MovieProps[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();

  function handleQueryMovies() {
    setQueryMovies(queryMovies);
  }

  function handleMovieDetailId(movieId: number) {
    setMovieDetailId(movieId);
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

  async function fetchFeaturedMovie() {
    const { data } = await getTrendingMovies(1);
    setFeaturedMovie(data.results[0]);
  }

  async function fetchSimilarMovies(movieId: number) {
    const { data } = await getSimilarMovies(movieId);
    setsimilarMovies(data.results);
  }

  async function fetchMovieSocial(movieId: number) {
    const { data } = await getMovieSocial(movieId);
    setMovieSocial(data);
  }

  async function handleMovieDetail() {
    setMovieDetail(movieDetail);
  }

  async function handleSearchMovies(mName: string) {
    const { data } = await getSearchResult(mName);
    setQueryMovies(data.results);
  }

  useEffect(() => {
    fetchMovieSocial(100);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        similarMovies,
        queryMovies,
        featuredMovie,
        movieDetail,
        movieSocial,
        handleMovieDetailId,
        fetchTrendingMovies,
        fetchMovieSocial,
        updateTrendingMovies,
        handleMovieDetail,
        fetchFeaturedMovie,
        fetchSimilarMovies,
        handleQueryMovies,
        handleSearchMovies,
        // fetchMovieDetail,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
