/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { getMovieDetail } from '../../services/movie-services';
import { MovieContext } from '../../context/MovieContext';
import { Header } from '../../components/Header';

import * as S from './style';

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

interface MovieParams {
  movieId: string;
}

export default function Details() {
  const { params } = useRouteMatch<MovieParams>();
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>({
    id: 0,
    title: '',
    release_date: '',
    poster_path: '',
    backdrop_path: '',
    original_title: '',
    overview: '',
    runtime: 0,
  });

  async function fetchMovieDetail(movieId: string) {
    const { data } = await getMovieDetail(movieId);
    setMovieDetail(data);
  }

  useEffect(() => {
    fetchMovieDetail(params.movieId);
  }, [setMovieDetail, params]);

  // if (loading) return <h1>wait</h1>;

  return (
    <S.MovieDetailsContainer>
      <Header />
      <MovieInfo
        id={movieDetail.id}
        title={movieDetail.title}
        release_date={movieDetail.release_date}
        poster_path={movieDetail.poster_path}
        backdrop_path={movieDetail.backdrop_path}
        original_title={movieDetail.original_title}
        runtime={movieDetail.runtime}
        overview={movieDetail.overview}
      />
      <MovieCrew />
    </S.MovieDetailsContainer>
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
}: MovieInfoProps) {
  return (
    <S.MovieInfoContainer>
      <div className="movie-general">
        <h1>{title}</h1>
        <span className="release-year">{release_date.slice(0, 4)}</span>
        <span className="genre">Action</span>
        <span className="pg">PG13</span>
        <p className="sinopse">{overview}</p>
        <div className="trailer">
          <a href="/">
            <img
              src="https://www.themoviedb.org/t/p/original/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://www.themoviedb.org/t/p/original/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://www.themoviedb.org/t/p/original/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      </div>
    </S.MovieInfoContainer>
  );
}

function MovieCrew() {
  return (
    <S.MovieCrewContainer>
      <div className="cast">
        <div>
          <img
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/dU35NnjZ4aGw5abIJe3WXVf3Eey.jpg"
            alt=""
          />
          <p>Name</p>
        </div>
        <div>
          <img
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/dU35NnjZ4aGw5abIJe3WXVf3Eey.jpg"
            alt=""
          />
          <p>Name</p>
        </div>
        <div>
          <img
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/dU35NnjZ4aGw5abIJe3WXVf3Eey.jpg"
            alt=""
          />
          <p>Name</p>
        </div>
        <div>
          <img
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/dU35NnjZ4aGw5abIJe3WXVf3Eey.jpg"
            alt=""
          />
          <p>Name</p>
        </div>
        <div>
          <img
            style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/dU35NnjZ4aGw5abIJe3WXVf3Eey.jpg"
            alt=""
          />
          <p>Name</p>
        </div>
      </div>
      <div className="crew">
        <span className="director">Director</span>
        <span className="director-name">Name</span>
        <span className="writers">Writer</span>
        <span className="writers-names">Writers Names</span>
      </div>
    </S.MovieCrewContainer>
  );
}
