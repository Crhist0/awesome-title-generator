import { StyledH1 } from './styled';

export const Preview = (props) => {
  let shadow = '';
  for (let index = 1; index < props.offsetZ + 1; index++) {
    shadow =
      shadow +
      ` ${((props.offsetX / props.offsetZ) * index).toFixed(0)}px ${(
        (props.offsetY / props.offsetZ) *
        index
      ).toFixed(0)}px ${props.blurRadius}px ${props.shadowColor}${
        index !== props.offsetZ ? ',' : ' '
      } `;
  }
  return (
    <>
      <StyledH1
        id={props.id}
        shadow={shadow}
        textTransform={props.textTransform}
        align={props.align}
        fontFamily={props.fontFamily}
        size={props.size}
        bold={props.bold}
      >
        {props.children}
      </StyledH1>
    </>
  );
};
