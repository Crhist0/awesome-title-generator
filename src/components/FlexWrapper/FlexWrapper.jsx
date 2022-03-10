import { StyledWrapper } from './styled';

export const FlexWrapper = (props) => {
  return (
    <>
      <StyledWrapper
        id={props.id}
        direction={props.direction}
        justify={props.justify}
        align={props.align}
        xSize={props.xSize}
        ySize={props.ySize}
        p={props.p}
        m={props.m}
      >
        {props.children}
      </StyledWrapper>
    </>
  );
};
