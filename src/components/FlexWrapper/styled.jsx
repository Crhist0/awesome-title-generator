import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  height: ${(props) => (props.ySize ? props.ySize : '100%')};
  width: ${(props) => (props.xSize ? props.xSize : '100%')};
  margin: ${(props) => (props.m ? props.m : '0rem')};
  padding: ${(props) => (props.p ? props.p : '0rem')};
`;
