import { createGlobalStyle } from 'styled-components';

import theme from './theme/light';

const GlobalStyles = createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      box-sizing: border-box;
    }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${theme.colors.background};
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
