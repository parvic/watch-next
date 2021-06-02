import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const MovieDetailsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const MovieInfoContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'text poster';

  .movie-general {
    /* max-width: 60%; */
    margin: 1.5rem 0;
    grid-area: text;

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      margin-bottom: 0.25rem;
    }

    .original-title {
      font-size: 0.75rem;
      line-height: 1rem;
      color: ${theme.colors.lightText};
      margin-bottom: 1.5rem;
    }

    span {
      color: ${theme.colors.lightText};
      & + span {
        margin-left: 2.5rem;
      }
    }

    .pg {
      padding: 0.25rem;
      border: 1px solid ${theme.colors.lightText};
      border-radius: 0.25rem;
    }

    .sinopse {
      margin-top: 1.5rem;
      font-size: 1rem;
      line-height: 1.75rem;
    }

    .trailer {
      margin-top: 2rem;
      margin-bottom: 2rem;
      a {
        img {
          width: 3rem;
        }

        & + a {
          margin-left: 3rem;
        }
      }
    }
  }

  .poster {
    grid-area: poster;
    margin: 0 auto;
    img {
      width: 20rem;
      border-radius: 0.25rem;
      border: 12px solid rgba(0, 0, 0, 0);
    }
  }
`;
