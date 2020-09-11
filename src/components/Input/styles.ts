import styled from 'styled-components';


export const Container = styled.input`
  text-align: center;
  width: 24rem;
  height: 8rem;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.inputBackground};
  border: 2px solid ${(props) => props.theme.colors.inputBorder};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 8px 0 0 8px;
  font-size: 2rem;
  text-indent: 8px;
  transition: 0.2s;
`;
