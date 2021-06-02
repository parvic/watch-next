/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getMovieDetail } from '../../services/movie-services';
import { MovieContext } from '../../context/MovieContext';
import { Header } from '../../components/Header';
import { Credits } from '../../components/Credits';
import SimilarMovies from '../../components/SimilarMovies';
import Social from '../../components/Social';

import * as S from './style';
import theme from '../../styles/theme/light';

interface MovieDetailProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  runtime: number;
  genres: GenreProps[];
  // cast: CastProps[];
  // crew: CrewProps[];
  // social: SocialProps[];
}

interface GenreProps {
  id: number;
  name: string;
}

interface MovieParams {
  movieId: string;
}

export default function Details() {
  const { fetchMovieSocial, movieSocial } = useContext(MovieContext);
  const { params } = useRouteMatch<MovieParams>();
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>();

  async function fetchMovieDetail(movieId: string) {
    const { data } = await getMovieDetail(movieId);
    setMovieDetail(data);
  }

  useEffect(() => {
    fetchMovieDetail(params.movieId);
  }, [setMovieDetail, params]);

  return (
    <>
      <Header />
      <S.MovieDetailsContainer>
        {movieDetail && (
          <MovieInfo
            id={movieDetail.id}
            title={movieDetail.title}
            release_date={movieDetail.release_date}
            poster_path={movieDetail.poster_path}
            backdrop_path={movieDetail.backdrop_path}
            original_title={movieDetail.original_title}
            runtime={movieDetail.runtime}
            overview={movieDetail.overview}
            genres={movieDetail.genres}
          />
        )}
        {movieDetail && <SimilarMovies movieId={movieDetail.id} />}
      </S.MovieDetailsContainer>
    </>
  );
}

interface MovieInfoProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  runtime: number;
  genres: GenreProps[];
}

function MovieInfo({
  id,
  title,
  release_date,
  poster_path,
  backdrop_path,
  original_title,
  runtime,
  overview,
  genres,
}: MovieInfoProps) {
  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  const bigScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.tablet})`,
  });
  return (
    <S.MovieInfoContainer>
      <div className="movie-general">
        <h1>{title}</h1>
        <p className="original-title">{original_title}</p>
        <div className="bullet-info">
          <span className="release-year">{release_date.slice(0, 4)}</span>
          <span className="genre">
            {genres.map(genre => {
              return genre === genres[genres.length - 1]
                ? genre.name
                : `${genre.name} & `;
            })}
          </span>
          <span className="pg">PG13</span>
          <span className="runtime">{`${runtime} minutes`}</span>
        </div>
        <p className="sinopse">{overview}</p>
        <Social movieId={id} />
        <Credits movieId={id} />
      </div>
      <div className="poster">
        {smallScreen ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt={title}
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w780${poster_path}`}
            alt={title}
          />
        )}
      </div>
    </S.MovieInfoContainer>
  );
}
