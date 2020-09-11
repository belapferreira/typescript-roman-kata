import styled from "styled-components";

export const LandingContainer = styled.div``;
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
`;
