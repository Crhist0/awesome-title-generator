import { useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';

import useDebouncedEffect from '../../utils/useDebounceEffect';

export const TextInput = () => {
  const dispatch = useDispatch();
  const textRedux = useSelector(({ config }) => config.text);

  const [value, setValue] = useState(textRedux);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value.length > 50) {
      setTimeout(() => {
        setValue(value.slice(0, -1));
      }, 2000);
    }
  }, [value]);

  useDebouncedEffect(
    () => {
      dispatch(updateState({ name: 'text', changes: value }));
    },
    [value],
    0 // if performanse issues come up, raise this value
  );

  return (
    <TextField
      helperText={
        // eslint-disable-next-line quotes
        value.length === 51 ? "It's only a title, not the whole text..." : ''
      }
      error={value.length === 51}
      onChange={handleInputChange}
      variant="standard"
      value={textRedux}
      inputProps={{
        maxLength: 51,
      }}
      sx={{
        paddingBottom: '1rem',
        width: '532px',
        '& .MuiFormHelperText-root': {
          textAlign: 'center',
          position: 'absolute',
          margin: '35px 0rem 0rem 28%',
        },
        '& .MuiInputBase-input': {
          textAlign: 'center',
        },
        '& .MuiInput-root': {
          borderBottom: '1px solid transparent',
          ':hover': {
            borderBottom: '1px solid ' + useTheme().palette.primary.main,
          },
          ':hover:before': {
            borderBottom: '1px solid ' + useTheme().palette.primary.main,
          },
          ':before': {
            borderColor: useTheme().palette.primary.main,
          },
        },
      }}
    ></TextField>
  );
};
