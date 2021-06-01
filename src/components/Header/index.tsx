import React from 'react';

import { Search } from '../Search';

import * as S from './style';

export function Header() {
  return (
    <S.HeaderContainer>
      <div className="logo">
        <img src="images/tmdb-logo.png" alt="TMBD Logo" />
      </div>

      <div className="menu">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/">
          <p>Movies</p>
        </a>
        <a href="/">
          <p>Series</p>
        </a>
        <a href="/">
          <p>Kids</p>
        </a>
      </div>

      <div className="search">
        <Search />
      </div>
    </S.HeaderContainer>
  );
}
