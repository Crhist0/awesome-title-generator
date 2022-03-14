/* eslint-disable quotes */
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
import ResetButton from '../../components/Button/Button';
import BasicTooltip from '../../components/Tooltip/Tooltip';
import CustomizedSwitches from '../../components/ThemeSwitch/ThemeSwitch';
import { KofiButton } from '../../components/KofiButton/KofiButton';
import {
  Modal,
  Box,
  Fade,
  Backdrop,
  Paper,
  Typography,
  Divider,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ExportSlice';
import { updateState as drawerUpdateState } from '../../store/DrawerSlice';
import { animateState, clearState } from '../../store/ConfigSlice';

import { useEffect, useState } from 'react';

import ColorPicker from '../../components/ColorPicker/ColorPicker';
import CircleType from 'circletype';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
};

function getFontImport(font) {
  switch (font) {
    case 'Fredoka':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Caveat':
      return "@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');";
    case 'JetBrains Mono':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Comfortaa':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Grandstander':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Big Shoulders Stencil Display':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Gluten':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'MuseoModerno':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Tourney':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Nunito':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Open Sans':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Orbitron':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Signika':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Stick No Bills':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Josefin Slab':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Playfair Display':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Podkova':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Roboto Slab':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Texturina':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    case 'Dancing Script':
      return "@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap');";
    default:
      return '';
  }
}

export const Landing = () => {
  const configRedux = useSelector(({ config }) => config);
  const modalExportRedux = useSelector(({ modalExport }) => modalExport);
  const [modalOpen, setModalOpen] = useState(false);
  const [circleExport, setCircleExport] = useState('unset');
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById('awesomeTitle').innerHTML = configRedux.text; // reset, it gets bigger without this for some reason
    if (configRedux.circle) {
      new CircleType(document.getElementById('awesomeTitle')).radius(
        configRedux.radius
      );
      // eslint-disable-next-line prettier/prettier
      setCircleExport(document.getElementById('preview').innerHTML.replace('id="awesomeTitle" font-family="Fredoka" size="82" class="','class="AwesomeTitle '));
    }
  }, [configRedux.circle, configRedux.radius, configRedux.text]);

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
              mode={selected}
              value={`
/*    My Awesome Title Generator CSS    */

${getFontImport(configRedux.fontFamily)}       

font-size: ${configRedux.size}px; 
text-align: ${configRedux.align};
font-family: '${configRedux.fontFamily}';
text-transform: ${configRedux.textTransform};
font-weight: ${configRedux.bold ? 'bold' : 'normal'};
color: rgba(${configRedux.textColor.r}, ${configRedux.textColor.g}, ${
                configRedux.textColor.b
              }, ${configRedux.textColor.a});
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
              mode={selected}
              value={`
/*    My Awesome Title Generator CSS    */

${getFontImport(configRedux.fontFamily)}       
              
.AwesomeTitle {
  font-size: ${configRedux.size}px; 
  text-align: ${configRedux.align};
  font-family: '${configRedux.fontFamily}';
  text-transform: ${configRedux.textTransform};
  font-weight: ${configRedux.bold ? 'bold' : 'normal'};
  color: rgba(${configRedux.textColor.r}, ${configRedux.textColor.g}, ${
                configRedux.textColor.b
              }, ${configRedux.textColor.a});
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
        return (
          <FlexWrapper>
            <FlexWrapper id="cssPrint" direction="column">
              <CssPrint
                mode={selected}
                value={`
//    AwesomeTitle.jsx 

import { StyledH1 } from './styled';

const makeShadow = () => {
  let shadow = '';
  for (let index = 1; index < ${configRedux.offsetZ} + 1; index++) {
    shadow = shadow + \` 
    \${((${configRedux.offsetX} / ${configRedux.offsetZ}) * index).toFixed(0)}px 
    \${((${configRedux.offsetY} / ${configRedux.offsetZ}) * index).toFixed(0)}px 
    ${configRedux.blurRadius}px rgba(${configRedux.shadowColor.r}, ${configRedux.shadowColor.g}, ${configRedux.shadowColor.b}, ${configRedux.shadowColor.a}) \${index !== ${configRedux.offsetZ} ? ',' : ' '} \`;
  }
  return shadow;
}

export const AwesomeTitle = () => {
  return (
    <>
      <StyledH1
        id='awesomeTitle'
        shadow={makeShadow()}
        textColor='rgba(${configRedux.textColor.r}, ${configRedux.textColor.g}, ${configRedux.textColor.b}, ${configRedux.textColor.a})'
        textTransform='${configRedux.textTransform}'
        align='${configRedux.align}'
        fontFamily='${configRedux.fontFamily}'
        size='${configRedux.size}'
        bold={${configRedux.bold}}
      >
        ${configRedux.text}
      </StyledH1>
    </>
  );
};   
              `}
              />
            </FlexWrapper>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '13%  1rem' }}
            />
            <FlexWrapper id="cssPrint" direction="column">
              <Typography
                sx={{
                  marginBottom: '1rem',
                }}
              >
                Create both files in the same folder, inside your components
                folder, for better organization.
              </Typography>
              <Typography sx={{ margin: '0rem 1rem' }}>
                You need &quot;styled-components&quot; lib in your project. A
                &quot;npm i styled-components&quot; should do the trick.
                <Typography sx={{ marginTop: '1rem' }}>
                  Also import the font below in your CSS or HTML file:
                </Typography>
                <Typography>{getFontImport(configRedux.fontFamily)}</Typography>
              </Typography>
            </FlexWrapper>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '13%  -1px 13% 1rem' }}
            />
            <FlexWrapper id="cssPrint" direction="column">
              <CssPrint
                mode={selected}
                value={`
//    styled.jsx
  
  import styled from 'styled-components';

  export const StyledH1 = styled.h1\`
    color: \${(props) => props.textColor};
    font-size: \${(props) => props.size}px;
    text-align: \${(props) => props.align};
    text-shadow: \${(props) => props.shadow};
    font-family: \${(props) => props.fontFamily};
    text-transform: \${(props) => props.textTransform};
    font-weight: \${(props) => (props.bold ? 'bold' : 'normal')};
  \`;
  `}
              />
            </FlexWrapper>
          </FlexWrapper>
        );
      case 'curve':
        return (
          <FlexWrapper>
            <FlexWrapper id="cssPrint" direction="column">
              <CssPrint
                value={`
<!--    My Awesome Title Generator HTML    -->

${circleExport}       
              `}
              />
            </FlexWrapper>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: '13%  1rem' }}
            />
            <FlexWrapper id="cssPrint" direction="column">
              <CssPrint
                value={`
/*   My Awesome Title Generator CSS   */
  
${getFontImport(configRedux.fontFamily)}       

.AwesomeTitle {
  font-size: ${configRedux.size}px; 
  text-align: ${configRedux.align};
  font-family: '${configRedux.fontFamily}';
  text-transform: ${configRedux.textTransform};
  font-weight: ${configRedux.bold ? 'bold' : 'normal'};
  color: rgba(${configRedux.textColor.r}, ${configRedux.textColor.g}, ${
                  configRedux.textColor.b
                }, ${configRedux.textColor.a})
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
          </FlexWrapper>
        );
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

  // start animation effect
  useEffect(() => {
    dispatch(
      animateState({
        offsetX: 94,
        offsetY: 150,
        offsetZ: 150,
        blurRadius: 0,
        textColor: { r: 232, g: 232, b: 232, a: 1 },
        shadowColor: { r: 38, g: 118, b: 191, a: 1 },
        textTransform: 'unset',
        fontFamily: 'Roboto Slab',
        align: 'center',
        size: 100,
        radius: 500,
        circle: false,
        bold: true,
        text: 'Make',
      })
    );
    setTimeout(() => {
      dispatch(
        animateState({
          offsetX: -10,
          offsetY: 15,
          offsetZ: 125,
          blurRadius: 8,
          textColor: { r: 182, g: 230, b: 107, a: 1 },
          shadowColor: { r: 80, g: 117, b: 85, a: 0.03 },
          textTransform: 'unset',
          fontFamily: 'Grandstander',
          align: 'center',
          size: 90,
          radius: 500,
          circle: false,
          bold: false,
          text: 'Your',
        })
      );
    }, 1000);
    setTimeout(() => {
      dispatch(clearState());
    }, 2000);
    setTimeout(() => {
      dispatch(drawerUpdateState(true));
    }, 3500);
  }, []);

  return (
    <>
      <FlexWrapper id="container" direction="column">
        <DrawerComponent open id="configurations">
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
              ySize="35rem"
              p="0rem 0rem 2rem 0rem"
            >
              <FlexWrapper id="text-field">
                <TextInput />
              </FlexWrapper>
              <FlexWrapper id="X-and-Y">
                <InputSlider
                  name="X axis distance"
                  id="offsetX"
                  max={300}
                  min={-300}
                />
                <InputSlider
                  name="Y axis distance"
                  id="offsetY"
                  max={300}
                  min={-300}
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
                <InputSlider name="Size" id="size" min={1} max={150} />
                <CheckBox label="Curve Text" id="circle" />
                <CheckBox label="Bold" id="bold" />
              </FlexWrapper>
              <FlexWrapper id="colorPicker" p="1rem 0rem 1.5rem">
                <FlexWrapper direction="column" id="shadowColor">
                  <Typography sx={{ fontSize: '0.9rem', marginBottom: '15px' }}>
                    Shadow Color
                  </Typography>
                  <BasicTooltip title={<ColorPicker id="shadowColor" />}>
                    <Paper
                      sx={{
                        height: '30px',
                        width: '30px',
                        backgroundColor: `rgba(${configRedux.shadowColor.r}, ${configRedux.shadowColor.g}, ${configRedux.shadowColor.b}, ${configRedux.shadowColor.a})`,
                      }}
                    />
                  </BasicTooltip>
                </FlexWrapper>
                <FlexWrapper direction="column" id="textColor">
                  <Typography sx={{ fontSize: '0.9rem', marginBottom: '15px' }}>
                    Text Color
                  </Typography>
                  <BasicTooltip title={<ColorPicker id="textColor" />}>
                    <Paper
                      sx={{
                        height: '30px',
                        width: '30px',
                        backgroundColor: `rgba(${configRedux.textColor.r}, ${configRedux.textColor.g}, ${configRedux.textColor.b}, ${configRedux.textColor.a})`,
                      }}
                    />
                  </BasicTooltip>
                </FlexWrapper>
              </FlexWrapper>
              <FlexWrapper id="Arch/Align-and-textTransform">
                {inputSlider}
                {alignBox}
                <List
                  id="textTransform"
                  options={
                    configRedux.circle
                      ? [
                          'uppercase',
                          'lowercase',
                          //  'full-width', // BUG: propriedade experimental do css, não funciona com todas as fontes
                          'unset',
                        ]
                      : [
                          'uppercase',
                          'capitalize',
                          'lowercase',
                          'unset',
                          // 'full-width', // BUG: propriedade experimental do css, não funciona com todas as fontes
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
                    'Dancing Script',
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
            <FlexWrapper
              id="reset / export"
              ySize="2rem"
              justify="space-evenly"
            >
              <ResetButton>Reset</ResetButton>
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
          </FlexWrapper>
        </DrawerComponent>
        <FlexWrapper id="preview" p="2rem 3rem" xSize="45%" ySize="50%">
          <Preview
            id="awesomeTitle"
            offsetX={configRedux.offsetX}
            offsetY={configRedux.offsetY}
            offsetZ={configRedux.offsetZ}
            blurRadius={configRedux.blurRadius}
            textColor={configRedux.textColor}
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
          <Fade id="cssPrintDiv" in={modalOpen}>
            <Box sx={modalStyle}>
              <Box sx={{ cursor: 'pointer' }} onClick={handleModalClose}>
                <CloseOutlinedIcon
                  sx={{
                    position: 'fixed',
                    top: '16px',
                    right: '16px',
                  }}
                />
              </Box>
              {showCss(modalExportRedux.selected)}
            </Box>
          </Fade>
        </Modal>
      </FlexWrapper>
      <BasicTooltip placement="bottom" title="Theme" followCursor>
        <Box
          sx={{
            zIndex: '99',
            position: 'fixed',
            right: '100px',
            top: '16px',
          }}
        >
          <CustomizedSwitches />
        </Box>
      </BasicTooltip>
      <BasicTooltip placement="bottom" title="Buy me a coffee" followCursor>
        <Box
          sx={{
            position: 'fixed',
            right: '32px',
            top: '22px',
          }}
        >
          <KofiButton />
        </Box>
      </BasicTooltip>
    </>
  );
};

// * adicionar cssBaseline ✅
// * refatorar tema ✅
// * completar export css com imports de fonte html ✅
// * adicionar botão para 'reset' ✅
// * alterar cores da fonte e sombra ✅
// * adicionar export texto curvo 🟥  os spans não estão com os parametros
// * adicionar export componente react ✅
// * adicionar animação de entrada ✅
// * Reset do texto ✅
// * adicionar erro ao digitar um caracter quando já tem 50 no input ✅
// * alterar minoria de layout - favicon, page- title ✅
// * refatorar responsividade 🟨
// * adicionar mudança de temas light/dark ✅
// * BUG: full-width + font-family
// * BUG: capitalize + archRadius
// * BUG: reset + list = após o reset não é possível voltar ao item da lista que estava previamente selecionado
