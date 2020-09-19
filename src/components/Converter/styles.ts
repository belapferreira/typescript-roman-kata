import styled from "styled-components";

export const ConvertContainer = styled.div`
  text-align: center;

  height: 80vh;
  max-width: 450px;
  max-height: 500px;
  padding: 0 2.4rem;
  box-sizing: content-box;
  background: ${(props) => props.theme.colors.backgroundBox};
  box-shadow: 2px 4px 12px rgba(238, 218, 168, 0.25);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;

  h3,
  h4 {
    font-size: 2.8rem;
    line-height: 4rem;
    margin: 0 0 4rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  @media (max-width: 700px) {
    position: absolute;
    bottom: 24px;
    height: 70vh;
  }

  @media (min-width: 1500px) {
    width: 40vw;
    max-width: 600px;
    max-height: 900px;

    h3,
    h4 {
      font-size: 3.6rem;
      line-height: 6rem;
    }

    h4 {
      font-size: 3.2rem;
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 0.8rem 1.6rem;
    height: 8rem;
    background: ${(props) => props.theme.colors.backgroundButton};
    border-radius: 0px 8px 8px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    line-height: 32px;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.buttonText};
    cursor: pointer;
  }

  @media (min-width: 1500px) {
    button {
      height: 10rem;
      font-size: 2rem;
    }
  }
`;

export const ResultBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 2rem;
  }

  .result-content {
    font-size: 2rem;
    background: ${(props) => props.theme.colors.inputBackground};
    width: 24rem;
    height: 8rem;
    border: 2px solid ${(props) => props.theme.colors.inputBorder};
    border-radius: 8px;
    font-size: 2.5rem;
    transition: 0.2s;
    color: ${(props) => props.theme.colors.buttonText};

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1500px) {
    h4 {
      margin: 0;
      font-size: 3rem;
    }

    .result-content {
      margin-top: 2rem;
      font-size: 3.2rem;
      width: 30rem;
      height: 10rem;
    }
  }
`;
