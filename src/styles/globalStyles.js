import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Open Sans';
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  body {
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    overflow-x: hidden;
    min-height: 100vh;
  }
`;

export default globalStyle;
