import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
