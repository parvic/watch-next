/* eslint-disable camelcase */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';

import { url } from 'inspector';
import { MovieContext } from '../../context/MovieContext';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';

import * as S from './style';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export default function Home() {
  const {
    movies,
    fetchFeaturedMovie,
    featuredMovie,
    fetchTrendingMovies,
    updateTrendingMovies,
  } = useContext(MovieContext);
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
      fetchFeaturedMovie();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.HomeContainer>
        {featuredMovie && (
          <img
            src={`https://image.tmdb.org/t/p/w1280${featuredMovie.backdrop_path}`}
            alt="Featured Movie"
          />
        )}
        <Header />
        {featuredMovie && (
          <FeaturedMovie
            id={featuredMovie.id}
            title={featuredMovie.title}
            backdrop_path={featuredMovie.backdrop_path}
          />
        )}
        <S.HomeMain>
          {movies.slice(firstLoad ? 1 : 0).map(movie => {
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
                    movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'
                  }
                  poster={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                      : 'https://simpleicon.com/wp-content/uploads/film.png'
                  }
                />
              </Link>
            );
          })}
        </S.HomeMain>
      </S.HomeContainer>
    </>
  );
}

interface FeaturedMovieProps {
  id: number;
  title: string;
  backdrop_path: string;
}
function FeaturedMovie({ id, title, backdrop_path }: FeaturedMovieProps) {
  return (
    <S.FeaturedMovie>
      <h1>{title}</h1>
      <Link to={`/movie/${id}`}>
        <span>+ INFO</span>
      </Link>
    </S.FeaturedMovie>
  );
}
