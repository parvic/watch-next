import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

import { MovieContext } from '../../context/MovieContext';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import * as S from './style';

export default function Home() {
  const { movies, fetchTrendingMovies, updateTrendingMovies } =
    useContext(MovieContext);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [finalPage, setFinalPage] = useState<number>(20);

  const scrollObserver = useRef<IntersectionObserver>();

  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (scrollObserver.current) scrollObserver.current.disconnect();

      scrollObserver.current = new IntersectionObserver(async entries => {
        if (entries[0].isIntersecting) {
          setPage(state => state + 1);
        }
      });

      if (node) scrollObserver.current.observe(node);
    },
    [setPage, loading],
  );

  useEffect(() => {
    if (page === 1) {
      fetchTrendingMovies(page);
      setFirstLoad(true);
    }
    console.log(page);
  }, [page]);

  useEffect(() => {
    if (page > 1 && page <= finalPage) {
      updateTrendingMovies(page);
    }
  }, [page, finalPage]);

  // poster sizes
  return (
    <>
      <S.HomeContainer>
        <Header />
        <HomeFeatured />
        <S.HomeMain>
          {movies.map(movie => {
            return (
              <Link
                key={movie.id}
                ref={lastMovieElementRef}
                to={`/movie/${movie.id}`}
              >
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  release_date={
                    movie.release_date ? movie.release_date.slice(0, 4) : ''
                  }
                  poster={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
              </Link>
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
