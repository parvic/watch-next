import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const HomeMain = styled.main`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */

  margin: 0 auto;
`;

export const FeaturedMovie = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    max-width: 30rem;
    font-size: 4rem;
    margin-left: 7rem;
    margin-bottom: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 6rem;
    padding: 0.5rem;
    margin-left: 7rem;

    background-color: ${theme.colors.titleHover};
    border-radius: 1rem;

    span {
      font-weight: 600;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
