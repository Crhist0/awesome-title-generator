import { FlexWrapper } from '../../components/FlexWrapper/FlexWrapper';
import { Preview } from '../../components/Preview/Preview';
import { InputSlider } from '../../components/Slider/Slider';
import { TextInput } from '../../components/TextInput/TextInput';
import { CheckBox } from '../../components/Checkbox/Checkbox';
import { DrawerComponent } from '../../components/Drawer/Drawer';
import { makeShadow } from '../../components/Preview/Preview';
import { CssPrint } from '../../components/CssPrint/CssPrint';
import { List } from '../../components/List/List';
import { SplitButton } from '../../components/SplitButton/SplitButton';

import CircleType from 'circletype';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { updateState } from '../../store/ExportSlice';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
};

export const Landing = () => {
  const configRedux = useSelector(({ config }) => config);
  const modalExportRedux = useSelector(({ modalExport }) => modalExport);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById('title').innerHTML = configRedux.text; // reset, it gets bigger without this for some reason
    if (configRedux.circle) {
      new CircleType(document.getElementById('title')).radius(
        configRedux.radius
      );
    }
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

  function showCss(selected) {
    switch (selected) {
      case 'csspure':
        return (
          <FlexWrapper id="cssPrint" direction="column">
            <CssPrint
              value={`
font-size: ${configRedux.size}px; 
text-align: ${configRedux.align};
font-family: '${configRedux.fontFamily}';
text-transform: ${configRedux.textTransform};
font-weight: ${configRedux.bold ? 'bold' : 'normal'};
text-shadow: ${makeShadow(
                configRedux.offsetX,
                configRedux.offsetY,
                configRedux.offsetZ,
                configRedux.blurRadius,
                configRedux.shadowColor
              )};
`}
            />
          </FlexWrapper>
        );
      case 'cssclass':
        return (
          <FlexWrapper id="cssPrint" direction="column">
            <CssPrint
              value={`
.AwesomeTitle {
  font-size: ${configRedux.size}px; 
  text-align: ${configRedux.align};
  font-family: '${configRedux.fontFamily}';
  text-transform: ${configRedux.textTransform};
  font-weight: ${configRedux.bold ? 'bold' : 'normal'};
  text-shadow: ${makeShadow(
    configRedux.offsetX,
    configRedux.offsetY,
    configRedux.offsetZ,
    configRedux.blurRadius,
    configRedux.shadowColor
  )};
}`}
            />
          </FlexWrapper>
        );
      case 'react':
        return 'not implemented';
      case 'curve':
        return 'not implemented';
      default:
        break;
    }
  }

  useEffect(() => {
    modalExportRedux.active ? setModalOpen(true) : setModalOpen(false);
  }, [modalExportRedux.active]);

  function getExportMode(selected, changes) {
    switch (selected) {
      case 'csspure':
        return dispatch(updateState({ selected: 'csspure', changes }));
      case 'cssclass':
        return dispatch(updateState({ selected: 'cssclass', changes }));
      case 'react':
        return dispatch(updateState({ selected: 'react', changes }));
      case 'curve':
        return dispatch(updateState({ selected: 'curve', changes }));

      default:
        break;
    }
  }

  const handleModalClose = () => {
    getExportMode(modalExportRedux.selected, false);
  };

  return (
    <>
      <FlexWrapper id="container" direction="column">
        <DrawerComponent id="configurations">
          <FlexWrapper
            id="sliders"
            p="1.5rem 0rem 0rem"
            direction="column"
            justify="center"
          >
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
                  options={
                    configRedux.circle
                      ? ['uppercase', 'lowercase', 'full-width', 'unset']
                      : [
                          'uppercase',
                          'capitalize',
                          'lowercase',
                          'full-width',
                          'unset',
                        ]
                  }
                />
              </FlexWrapper>
              <FlexWrapper id="fontFamily">
                <List
                  id="fontFamily"
                  options={[
                    'Arial',
                    'Big Shoulders Stencil Display',
                    'Caveat',
                    'Comfortaa',
                    'Fredoka',
                    'Gluten',
                    'Grandstander',
                    'JetBrains Mono',
                    'Josefin Slab',
                    'MuseoModerno',
                    'Nunito',
                    'Open Sans',
                    'Orbitron',
                    'Playfair Display',
                    'Podkova',
                    'Roboto Slab',
                    'Signika',
                    'Stick No Bills',
                    'Texturina',
                    'Times-new-roman',
                    'Tourney',
                  ]}
                  w="100%"
                />
              </FlexWrapper>
            </FlexWrapper>
            <SplitButton
              name="EXPORT"
              options={[
                'CSS pure',
                'CSS Class',
                'ReactJs Component',
                'Curved Text',
              ]}
            />
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalOpen}
          onClose={handleModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={modalOpen}>
            <Box sx={modalStyle}>{showCss(modalExportRedux.selected)}</Box>
          </Fade>
        </Modal>
      </FlexWrapper>
    </>
  );
};

// * adicionar botão para 'reset'
// * completar export css com imports de fonte html
// * adicionar mudança de temas light/dark
// * alterar cores da fonte e sombra
// * adicionar export componente react
// * adicionar animação de entrada
// * adicionar erro ao digitar um caracter quando já tem 50 no input
// * concertar bug do capitalize + archRadius
