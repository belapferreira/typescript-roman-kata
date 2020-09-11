import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 40%;
  }

  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Libre Baskerville';
    color: ${(props) => props.theme.colors.text};
    outline-color: ${(props) => props.theme.colors.inputColor};
    -webkit-font-smoothing: antialiased;
  }

  /* #root {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  } */

  h1, h2, h3, h4, h5, h6 {
    font: 700 3.2rem 'Playfair Display';
    color: ${(props) => props.theme.colors.title};
  }

  @media (min-width: 900px) {
    :root {
      font-size: 62.5%;
    }

    #root {
      flex-direction: row;
    }
  }
`;
