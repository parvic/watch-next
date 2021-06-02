import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const SimilarMoviesContainer = styled.div`
  max-width: 100%;

  margin: 3rem 0;

  h2 {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    a {
      margin: 1rem;
    }
  }

  @media (max-width: ${theme.screenSize.laptop}) {
  }

  @media (max-width: ${theme.screenSize.tablet}) {
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;
