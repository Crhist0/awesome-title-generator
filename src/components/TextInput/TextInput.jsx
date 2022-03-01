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
      // helperText="É só um título, não o texto todo..."
      // error
      onChange={handleInputChange}
      variant="standard"
      value={value}
      inputProps={{
        maxLength: 50,
      }}
      sx={{
        paddingBottom: '1rem',
        width: '532px',
        '& .MuiFormHelperText-root': {
          fontFamily: 'Fredoka',
          textAlign: 'center',
          position: 'absolute',
          margin: '35px 0rem 0rem 28%',
        },
        '& .MuiInputBase-input': {
          textAlign: 'center',
        },
        '& .MuiInput-root': {
          fontFamily: 'Fredoka',
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
