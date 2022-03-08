import { StyledH1 } from './styled';
export function makeShadow(offsetX, offsetY, offsetZ, blurRadius, shadowColor) {
  let shadow = '';
  for (let index = 1; index < offsetZ + 1; index++) {
    shadow =
      shadow +
      ` ${((offsetX / offsetZ) * index).toFixed(0)}px ${(
        (offsetY / offsetZ) *
        index
      ).toFixed(0)}px ${blurRadius}px rgba(${shadowColor.r}, ${
        shadowColor.g
      }, ${shadowColor.b}, ${shadowColor.a}) ${index !== offsetZ ? ',' : ' '} `;
  }
  return shadow;
}

export const Preview = (props) => {
  return (
    <>
      <StyledH1
        id={props.id}
        shadow={makeShadow(
          props.offsetX,
          props.offsetY,
          props.offsetZ,
          props.blurRadius,
          props.shadowColor
        )}
        textColor={`rgba(${props.textColor.r}, ${props.textColor.g}, ${props.textColor.b}, ${props.textColor.a})`}
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
