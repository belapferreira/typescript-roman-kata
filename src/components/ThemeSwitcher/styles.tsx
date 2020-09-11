import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  margin: 0 50px;
  background: ${(props) => props.theme.colors.background};
  h1 {
    color: ${(props) => props.theme.colors.title};
    align-content: space-between;
    justify-content: space-between;
    flex-direction: row;
  }
`;
