import styled from "styled-components";

export const LandingContainer = styled.div`
  @media (max-width: 700px) {
    overflow: hidden;

    img {
      width: 90vw;
      height: 80vh;
    }
  }

  @media (min-width: 1500px) {
    width: 40vw;
    max-width: 600px;
    img {
      width: 100%;
    }
  }
`;

export const TitleDiv = styled.div`
  text-align: center;
  h1,
  h2 {
    letter-spacing: 1px;
    word-spacing: 4px;
  }

  h2 {
    margin-bottom: 4rem;
  }

  @media (min-width: 700px) {
    h1,
    h2 {
      font-size: 4rem;
      line-height: 5.6rem;
    }

    h2 {
      font-size: 3.2rem;
    }
  }

  @media (min-width: 1500px) {
    h1,
    h2 {
      font-size: 4.4rem;
      line-height: 6.4rem;
    }

    h2 {
      font-size: 4rem;
    }
  }
`;
