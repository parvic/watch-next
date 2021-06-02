import React, { useCallback, useContext, useState } from 'react';
import dbnc from 'lodash';
import { MovieContext } from '../../context/MovieContext';

import * as S from './style';

export function Search() {
  const [query, setQuery] = useState('');
  const { queryMovies, handleQueryMovies, handleSearchMovies } =
    useContext(MovieContext);

  const delayQuery = useCallback(
    dbnc.debounce((searchQuery: string) => {
      // eslint-disable-next-line no-unused-expressions
      searchQuery.length > 2 ? handleSearchMovies(searchQuery) : cleanQuery();
    }, 1000),
    [],
  );

  function cleanQuery() {
    handleQueryMovies([]);
    setQuery('');
  }

  return (
    <S.SearchContainer>
      <form action="">
        <input
          type="search"
          placeholder="Pesquisa"
          onChange={e => {
            // setQuery(e.target.value);
            delayQuery(e.target.value);
          }}
        />
      </form>

      <S.SearchList>
        {queryMovies &&
          queryMovies.map(queryMovie => {
            return (
              <a key={queryMovie.id} href={`/movie/${queryMovie.id}`}>
                <img
                  src={
                    queryMovie.poster_path
                      ? `https://image.tmdb.org/t/p/w45${queryMovie.poster_path}`
                      : 'https://simpleicon.com/wp-content/uploads/film.png'
                  }
                  alt={queryMovie.title}
                />
                <span>{queryMovie.title}</span>
              </a>
            );
          })}
      </S.SearchList>
    </S.SearchContainer>
  );
}
