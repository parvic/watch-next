/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { getCredits } from '../../services/movie-services';

import * as S from './style';

interface CreditsProps {
  movieId: number;
}

interface CastProps {
  id: number;
  name: string;
  profile_path: string;
}

interface CrewProps {
  id: number;
  name: string;
  known_for_department: string;
  profile_path: string;
  job: string;
}

export function Credits({ movieId }: CreditsProps) {
  const [movieCast, setMovieCast] = useState<CastProps[]>([]);
  const [movieCrew, setMovieCrew] = useState<CrewProps[]>([]);

  async function fetchMovieCast(mId: number) {
    const { data } = await getCredits(mId);
    setMovieCast(data.cast);
  }

  async function fetchMovieCrew(mId: number) {
    const { data } = await getCredits(mId);
    setMovieCrew(data.crew);
  }

  useEffect(() => {
    fetchMovieCast(movieId);
    fetchMovieCrew(movieId);
  }, [movieId]);

  return (
    <S.MovieCrewContainer>
      <div className="cast">
        {movieCast &&
          movieCast.slice(0, 5).map(cast => {
            return (
              <div>
                <img
                  style={{ width: '5rem', height: '5rem', objectFit: 'cover' }}
                  src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                  alt=""
                />
                <p>{cast.name}</p>
              </div>
            );
          })}
      </div>
      <div className="crew">
        <span className="director">Director</span>
        <span className="director-name">
          {movieCrew &&
            movieCrew.map(crew => {
              return crew.job === 'Director' && crew.name;
            })}
        </span>
        <span className="writers">Writer(s)</span>
        <span className="writers-names">
          {movieCrew &&
            movieCrew.map(crew => {
              return (
                crew.known_for_department === 'Writing' && `${crew.name}, `
              );
            })}
        </span>
      </div>
    </S.MovieCrewContainer>
  );
}
