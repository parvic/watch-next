import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Search } from '../Search';
import theme from '../../styles/theme/light';

import * as S from './style';
import logoLarge from '../../assets/images/tmdb-logo-large.svg';
import logoSmall from '../../assets/images/tmdb-logo-small.svg';

export function Header() {
  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  const bigScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.tablet})`,
  });

  return (
    <S.HeaderContainer>
      <div className="logo">
        {smallScreen ? (
          <img src={logoLarge} alt="TMBD Logo" />
        ) : (
          <img src={logoSmall} alt="TMBD Logo" />
        )}
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
