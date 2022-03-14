import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MaterialUISwitch } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ThemeSlice';

export default function CustomizedSwitches() {
  const currentTheme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    !e.target.checked
      ? dispatch(updateState({ mode: 'light' }))
      : dispatch(updateState({ mode: 'dark' }));
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={currentTheme === 'light' ? false : true}
            onClick={handleChange}
          />
        }
        label=""
        labelPlacement="start"
      />
    </FormGroup>
  );
}
