import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MovieContext } from '../../context/MovieContext';
import { MovieCard } from '../MovieCard';

import * as S from './style';

interface SimilarMoviesProps {
  movieId: number;
}

export default function SimilarMovies({ movieId }: SimilarMoviesProps) {
  const { fetchSimilarMovies, similarMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchSimilarMovies(movieId);
    console.log(similarMovies);
  }, [movieId]);

  return (
    similarMovies && (
      <S.SimilarMoviesContainer>
        <h2>Filmes Recomendados</h2>
        <div>
          {similarMovies &&
            similarMovies.slice(0, 8).map(similar => (
              <Link key={similar.id} to={`/movie/${similar.id}`}>
                <MovieCard
                  id={similar.id}
                  title={similar.title}
                  release_date={similar.release_date.slice(0, 4)}
                  poster={`https://image.tmdb.org/t/p/w185${similar.poster_path}`}
                />
              </Link>
            ))}
        </div>
      </S.SimilarMoviesContainer>
    )
  );
}
