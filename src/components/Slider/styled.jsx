import { Typography } from '@mui/material';
import MuiInput from '@mui/material/Input';

import { styled } from '@mui/material/styles';

export const StyledInput = styled(MuiInput)`
  width: 50px;
`;
export const StyledLabel = styled(Typography)(() => ({
  textAlign: 'center',
  margin: '0rem 0rem -1rem -0.5rem',
  fontSize: '0.95rem',
}));
