import React from 'react';

import * as S from './style';

interface MovieCardProps {
  id: number;
  title: string;
  release: string;
  poster: string;
}

export function MovieCard({ title, release, poster, id }: MovieCardProps) {
  return (
    <S.MovieCardContainer>
      <a href={`/movie/${id}`}>
        <img src={poster} alt="poster" />
        <div>
          <p className="title">{title}</p>
          <p className="release">{release}</p>
        </div>
      </a>
      {/* <a href="https://www.themoviedb.org/" className="title">
        <p>Title</p>
      </a> */}
    </S.MovieCardContainer>
  );
}
