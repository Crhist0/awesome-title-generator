import MuiInput from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import { styled } from '@mui/material/styles';
import { useTheme } from 'styled-components';

export const StyledInput = styled(MuiInput)`
  width: 50px;
`;
export const StyledLabel = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '0.95rem',
  color: useTheme().primary,
}));

export const StyledSlider = styled(Slider)(() => ({
  color: useTheme().primary,
}));
