import MuiInput from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import { styled } from '@mui/material/styles';
import { useTheme } from 'styled-components';

export const StyledInput = styled(MuiInput)`
  width: 50px;
  font-family: 'Fredoka';
`;
export const StyledLabel = styled(Typography)(() => ({
  textAlign: 'center',
  margin: '0rem 0rem -1rem -0.5rem',
  fontFamily: 'Fredoka',
  // fontWeight: 'bold',
  fontSize: '0.95rem',
  color: useTheme().primary,
}));

export const StyledSlider = styled(Slider)(() => ({
  color: useTheme().primary,
}));
