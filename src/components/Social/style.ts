import styled from 'styled-components';

import theme from '../../styles/theme/light';

export const SocialContainer = styled.div`
  div {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    a {
      text-decoration: none;
      color: #fff;

      transition: color 0.2s ease;

      &:hover {
        color: ${theme.colors.titleHover};
      }

      & + a {
        margin-left: 20px;
      }
    }
  }
`;
