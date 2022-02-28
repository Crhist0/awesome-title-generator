import TextField from '@mui/material/TextField';
import { useTheme } from 'styled-components';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';

import useDebouncedEffect from '../../utils/useDebounceEffect';

export const TextInput = (props) => {
  const dispatch = useDispatch();
  const textRedux = useSelector(({ config }) => config.text);

  const [value, setValue] = useState(textRedux);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useDebouncedEffect(
    () => {
      dispatch(updateState({ name: 'text', changes: value }));
    },
    [value],
    0 // if performanse issues come up, raise this value
  );

  return (
    <TextField
      onChange={handleInputChange}
      variant="standard"
      value={value}
      sx={{
        paddingBottom: '1rem',
        width: '532px',
        '& .MuiInputBase-input': {
          textAlign: 'center',
        },
        '& .MuiInput-root': {
          ':before': {
            transition: 'border-bottom-color  1s',
            borderBottom: '1px solid #B0B0B1',
            ':hover': {},
          },
          ':after': {
            borderBottom: '2px solid ' + useTheme().primary,
          },
        },
      }}
    ></TextField>
  );
};
