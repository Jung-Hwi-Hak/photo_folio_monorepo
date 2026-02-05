import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  //button, input, textarea, select {
  //  font: inherit;
  //}

  a {
    text-decoration: none;
    color: inherit;
  }
  // * 반응형

  /* 기본 reset */
  :root {
    --small-font-size: 1.4rem;
    --flex-card-repeat: repeat(4, 1fr);
  }
  
  @media (max-width: 1200px) {
    :root {
      --small-font-size: 1rem;
      --flex-card-repeat: repeat(2, 1fr);
    }
  }

  @media (max-width: 959px) {
    :root {
      --small-font-size: 0.8rem;
      --flex-card-repeat: repeat(1, 1fr);
    }
  }
`;
