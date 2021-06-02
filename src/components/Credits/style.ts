import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const MovieCrewContainer = styled.div`
  display: flex;
  align-items: center;

  .cast {
    h2 {
      margin-bottom: 1rem;
    }

    .cast-card {
      max-width: 60%;
      display: flex;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 7rem;

        img {
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
  }

  .crew {
    max-width: 30%;
    margin-left: 2rem;
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

  @media (max-width: ${theme.screenSize.laptop}) {
  }

  @media (max-width: ${theme.screenSize.tablet}) {
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    display: flex;
    flex-direction: column;

    .crew {
      max-width: 100%;

      .director {
        grid-area: director;
        font-weight: 600;
      }

      .director-name {
        grid-area: directorName;
      }

      .writers {
        grid-area: writers;
        font-weight: 600;
      }

      .writers-names {
        grid-area: writersNames;
      }
    }
  }
`;
