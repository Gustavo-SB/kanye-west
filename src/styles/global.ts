import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: #000000;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  }
`
