/* eslint-disable camelcase */
import React from 'react';

import * as S from './style';

interface MovieCardProps {
  id: number;
  title: string;
  release_date: string;
  poster: string;
}

export function MovieCard({ id, title, release_date, poster }: MovieCardProps) {
  return (
    <S.MovieCardContainer>
      <div>
        <img src={poster && poster} alt="poster" />
        <div>
          <p className="title">{title && title}</p>
          <p className="release">{release_date && release_date}</p>
        </div>
      </div>
      {/* <a href="https://www.themoviedb.org/" className="title">
        <p>Title</p>
      </a> */}
    </S.MovieCardContainer>
  );
}
