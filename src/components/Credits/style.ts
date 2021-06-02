import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const MovieCrewContainer = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  flex: 1;

  .cast {
    max-width: 60%;

    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 7rem;

      img {
        width: 5rem;
        margin-bottom: 0.5rem;
        border-radius: 50%;
      }

      p {
        text-align: center;
      }

      & + div {
        margin-left: 1.5rem;
      }
    }
  }

  .crew {
    max-width: 30%;
    margin-left: 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr 1fr;
    grid-template-areas:
      'director directorName'
      'writers writersNames';
    gap: 1rem;

    align-items: center;

    .director {
      grid-area: director;
      margin-left: auto;

      font-weight: 600;
    }

    .director-name {
      grid-area: directorName;
    }

    .writers {
      grid-area: writers;
      margin-left: auto;

      font-weight: 600;
    }

    .writers-names {
      grid-area: writersNames;
    }
  }
`;
