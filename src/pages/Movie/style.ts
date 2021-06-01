import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const MovieDetailsContainer = styled.div`
  width: 100%;
  padding: 4rem 4rem;
`;

export const MovieInfoContainer = styled.div`
  max-width: 100%;
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
      font-size: 1.25rem;
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
    img {
      width: 20rem;
      border-radius: 0.25rem;
      border: 12px solid rgba(0, 0, 0, 0);
    }
  }
`;

export const MovieCrewContainer = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  .cast {
    max-width: 60%;

    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 5rem;
        margin-bottom: 0.5rem;
        border-radius: 50%;
      }

      & + div {
        margin-left: 1.5rem;
      }
    }
  }

  .crew {
    max-width: 30%;
    margin-right: 8rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr 1fr;
    grid-template-areas:
      'director directorName'
      'writers writersNames';
    gap: 1rem;

    .director {
      grid-area: director;
    }

    .director-name {
      grid-area: directorName;
    }

    .writers {
      grid-area: writers;
    }

    .writers-names {
      grid-area: writersNames;
    }
  }
`;
