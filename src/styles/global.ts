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
    overflow: hidden;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Libre Baskerville';
    color: ${(props) => props.theme.colors.text};
    outline-color: ${(props) => props.theme.colors.inputColor};
    -webkit-font-smoothing: antialiased;
  }

  #II, #XV, #L {
    overflow: hidden;
    position: absolute;
  }

  #II {
    top: 40vh;
    right: -5vw;
    animation: infinite 10s linear loop-ii;
  }

  #XV {
    top: -100px;
    right: -6vw;
    width: 80px;
    height: 80px;
    animation: infinite 15s linear loop-xv;
  }

  #L {
    top: 4vh;
    right: 38vw;
    animation: infinite 15s linear loop-l;
  }

  @keyframes loop-ii {
    from {
      top: 40vh;
      right: -5vw;
    } to {
      top: 105vh;
      right: 30vw;
    }
  }

  @keyframes loop-xv {
    from {
      top: -100px;
      right: -6vw;
    } to {
      top: 110vh;
      right: 70vw;
    }
  }

  @keyframes loop-l {
    from {
      top: 4vh;
      right: 38vw;
    } to {
      top: 110vh;
      right: 90vw;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font: 700 3.2rem 'Playfair Display';
    color: ${(props) => props.theme.colors.title};
  }

  @media (min-width: 900px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
