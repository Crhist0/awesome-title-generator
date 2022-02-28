import { FlexWrapper } from '../../components/FlexWrapper/FlexWrapper';
import { Preview } from '../../components/Preview/Preview';
import { InputSlider } from '../../components/Slider/Slider';
import { useSelector } from 'react-redux';

import CircleType from 'circletype';
import { useEffect } from 'react';
import { TextInput } from '../../components/TextInput/TextInput';
import { CheckBox } from '../../components/Checkbox/Checkbox';
import { List } from '../../components/List/List';
import { DrawerComponent } from '../../components/Drawer/Drawer';

export const Landing = () => {
  const configRedux = useSelector(({ config }) => config);

  useEffect(() => {
    document.getElementById('title').innerHTML = configRedux.text; // reset, it gets bigger without this for some reason
    if (configRedux.circle)
      new CircleType(document.getElementById('title')).radius(
        configRedux.radius
      );
  }, [configRedux]);

  // if it's not using circleType feature it won't show the 'arch radius' slider
  let inputSlider = (
    <InputSlider name="Arch Radius" id="radius" min={1} max={999} />
  );
  let alignBox = (
    <List id="align" options={['left', 'right', 'center', 'justify']} />
  );
  if (!configRedux.circle) {
    inputSlider = '';
  }
  if (configRedux.circle) {
    alignBox = '';
  }

  return (
    <>
      <FlexWrapper
        id="container"
        direction="column"
        ySize="100%"
        justify="center"
      >
        <DrawerComponent id="configurations">
          <FlexWrapper id="sliders" p="1.5rem 0rem 0rem">
            <FlexWrapper
              id="sliders"
              direction="column"
              xSize="80%"
              ySize="50%"
              p="0rem 0rem 2rem 0rem"
            >
              <FlexWrapper id="text-field">
                <TextInput />
              </FlexWrapper>
              <FlexWrapper id="X-and-Y">
                <InputSlider
                  name="X axis distance"
                  id="offsetX"
                  max={150}
                  min={-150}
                />
                <InputSlider
                  name="Y axis distance"
                  id="offsetY"
                  max={150}
                  min={-150}
                />
              </FlexWrapper>
              <FlexWrapper id="Z-and-Blur">
                <InputSlider
                  name="Z axis density"
                  id="offsetZ"
                  min={1}
                  max={150}
                />
                <InputSlider name="Blur radius" id="blurRadius" min={0} />
              </FlexWrapper>
              <FlexWrapper id="Size-and-Curve_and_Bold">
                <InputSlider name="Size" id="size" min={1} max={100} />
                <CheckBox label="Curve Text" id="circle" />
                <CheckBox label="Bold" id="bold" />
              </FlexWrapper>
              <FlexWrapper id="Arch/Align-and-textTransform">
                {inputSlider}
                {alignBox}
                <List
                  id="textTransform"
                  options={[
                    'uppercase',
                    'capitalize',
                    'lowercase',
                    'full-width',
                    'unset',
                  ]}
                />
              </FlexWrapper>
              <FlexWrapper id="fontFamily">
                <List
                  id="fontFamily"
                  options={['Fredoka', 'arial', 'times-new-roman']}
                />
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
        </DrawerComponent>
        <FlexWrapper id="preview" p="2rem 3rem" xSize="45%" ySize="50%">
          <Preview
            id="title"
            offsetX={configRedux.offsetX}
            offsetY={configRedux.offsetY}
            offsetZ={configRedux.offsetZ}
            blurRadius={configRedux.blurRadius}
            shadowColor={configRedux.shadowColor}
            align={configRedux.align}
            fontFamily={configRedux.fontFamily}
            size={configRedux.size}
            textTransform={configRedux.textTransform}
            bold={configRedux.bold}
          />
        </FlexWrapper>
        <br />* alterar botão configurações por um botão flutuante
        <br />* adicionar mais fontes
        <br />* alterar cores da fonte e sombra
        <br />* adicionar export
      </FlexWrapper>
    </>
  );
};
