import styled from 'styled-components';
export const StyledH1 = styled.h1`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.size}px;
  text-align: ${(props) => props.align};
  text-shadow: ${(props) => props.shadow};
  font-family: ${(props) => props.fontFamily};
  text-transform: ${(props) => props.textTransform};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
