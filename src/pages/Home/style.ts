import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  /* padding: 1rem; */

  position: relative;

  & > img {
    position: absolute;
    width: 100%;
    z-index: -1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    max-width: 768px;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    max-width: 1024px;
  }
`;

export const HomeMain = styled.main`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;

  a {
    margin: 0.5rem;
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    min-height: 200px;
    max-height: 300px;
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    min-height: 300px;
    max-height: 400px;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
    min-height: 400px;
    max-height: 500px;
  }
`;

export const FeaturedMovie = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: 600px;

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

  @media (max-width: ${theme.screenSize.laptop}) {
    min-height: 400px;
    max-height: 500px;
  }

  @media (max-width: ${theme.screenSize.tablet}) {
    min-height: 300px;
    max-height: 400px;
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    min-height: 200px;
    max-height: 300px;

    h1 {
      margin-left: 3rem;
      margin-bottom: 1rem;
    }

    a {
      margin-left: 3rem;
    }
  }
`;
