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

  h3,
  h4 {
    font-size: 2.8rem;
    line-height: 4rem;
    margin: 0 0 4rem;
  }

  h4 {
    font-size: 2.4rem;
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
`;
