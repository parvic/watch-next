import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const MovieCardContainer = styled.div`
  /* width: fit-content; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* margin: 0.5rem; */

  img {
    border-radius: 0.5rem;
    width: 185px;
    height: 278px;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.5);
    }
  }

  transition: all 0.3s;

  &:hover {
    transform: translateY(-7px);

    .title {
      left: 1rem;
      bottom: 2rem;
      opacity: 1;
    }

    .release {
      left: 1rem;
      bottom: 1rem;
      opacity: 1;
    }
  }

  .title {
    position: absolute;
    /* left: 0;
      bottom: 0; */
    margin-bottom: 0.25rem;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    opacity: 0;

    color: #fff; //${theme.colors.title};
  }

  .release {
    position: absolute;
    /* left: 0;
      bottom: 0; */

    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #fff; //${theme.colors.title};

    opacity: 0;
  }

  @media (max-width: ${theme.screenSize.mobileL}) {
    img {
      width: 110px;
      height: 163px;
    }
    .title {
      position: absolute;
      /* left: 0;
      bottom: 0; */
      margin-bottom: 0.25rem;

      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5rem;
      opacity: 0;

      color: #fff; //${theme.colors.title};
    }
  }

  @media (max-width: ${theme.screenSize.tablet}) {
  }

  @media (max-width: ${theme.screenSize.laptop}) {
  }
`;
