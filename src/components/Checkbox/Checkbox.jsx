import { Checkbox, FormGroup, FormControlLabel, useTheme } from '@mui/material';

import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

import useDebouncedEffect from '../../utils/useDebounceEffect';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';

import { useState } from 'react';

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
  const [checked, setChecked] = useState(optionRedux);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useDebouncedEffect(
    () => {
      dispatch(updateState({ name: props.id, changes: checked }));
    },
    [checked],
    0 // if performanse issues come up, raise this value
  );

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
              checked={checked}
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
        />
      </FlexWrapper>
    </FormGroup>
  );
};
