import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';

export const CheckBox = (props) => {
  const optionRedux = useSelector(({ config }) => {
    switch (props.id) {
      case 'circle':
        return config.circle;
      case 'bold':
        return config.bold;
      default:
        break;
    }
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateState({ name: props.id, changes: !optionRedux }));
  };

  return (
    <FormGroup
      sx={{
        width: '141px',
      }}
    >
      <FlexWrapper>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              checked={optionRedux}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: '28px',
                },
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          sx={{
            '& .MuiFormControlLabel-label': {
              fontSize: '0.9rem',
            },
          }}
          label={props.label}
          labelPlacement="top"
        />
      </FlexWrapper>
    </FormGroup>
  );
};
