import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { updateState } from '../../store/ConfigSlice';
import useDebouncedEffect from '../../utils/useDebounceEffect';
import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

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
                  color: useTheme().primary,
                },
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          sx={{
            '& .MuiCheckbox-root': {
              color: useTheme().primary,
              ':hover': {
                backgroundColor: useTheme().primary.replace('1)', '0.2)'),
              },
              '& .MuiTouchRipple-root': {
                color: useTheme().primary,
              },
              // ':active': {
              //   backgroundColor: useTheme().primary.replace('1)', '0.2)'),
              // },
            },
            '& .MuiFormControlLabel-label': {
              fontWeight: 'bold',
              fontSize: '0.9rem',
              color: useTheme().primary,
            },
          }}
          label={props.label}
        />
      </FlexWrapper>
    </FormGroup>
  );
};
