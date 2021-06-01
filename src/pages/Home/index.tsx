import React, { useContext, useState } from 'react';

import { MovieContext } from '../../context/MovieContext';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import * as S from './style';

export default function Home() {
  const { movies } = useContext(MovieContext);

  const [date, setDate] = useState();

  // poster sizes
  return (
    <>
      <S.HomeContainer>
        <Header />
        <HomeFeatured />
        <S.HomeMain>
          {movies.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                release={movie.release_date.slice(0, 4)}
                poster={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              />
            );
          })}
        </S.HomeMain>
      </S.HomeContainer>
    </>
  );
}

function HomeFeatured() {
  return (
    <S.HomeFeatured>
      <h1>Três Homens em conflito</h1>
    </S.HomeFeatured>
  );
}
