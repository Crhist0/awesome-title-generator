// import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebouncedEffect from '../../utils/useDebounceEffect';
import { updateState } from '../../store/ConfigSlice';
import { useTheme } from 'styled-components';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const List = (props) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    sx: {
      '& .Mui-selected': {
        backgroundColor: useTheme().primary.replace('1)', '0.4) !important'),
        ':hover': {
          backgroundColor: useTheme().primary.replace('1)', '0.5) !important'),
        },
      },
    },
  };
  //   const theme = useTheme();
  const dispatch = useDispatch();
  const optionRedux = useSelector(({ config }) => {
    switch (props.id) {
      case 'align':
        return config.align;
      case 'textTransform':
        return config.textTransform;
      case 'fontFamily':
        return config.fontFamily;
      default:
        break;
    }
  });

  const [option, setOption] = useState(optionRedux);
  const handleChange = (event) => {
    const { value } = event.target;
    setOption(value);
  };

  useDebouncedEffect(
    () => {
      dispatch(updateState({ name: props.id, changes: option }));
    },
    [option],
    0 // if performanse issues come up, raise this value
  );

  return (
    <FormControl
      sx={{
        m: 1,
        width: 266,
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: useTheme().primary,
          },
        },
      }}
    >
      <InputLabel
        id="demo-multiple-name-label"
        sx={{
          backgroundColor: 'white',
          maxWidth: '100%',
          padding: '0rem 0.5rem 0rem 0rem',
          color: useTheme().primary + ' !important',
        }}
      >
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
      </InputLabel>
      <Select
        sx={{}}
        value={optionRedux}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {props.options.map((option) => {
          return (
            <MenuItem
              sx={{
                //
                '.MuiMenuItem-root, .Mui-selected': {
                  backgroundColor: 'red',
                },
                ':hover': {
                  backgroundColor: useTheme().primary.replace('1)', '0.2)'),
                },
              }}
              key={option}
              value={option}
            >
              {option.charAt(0).toUpperCase()}
              {option.slice(1)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
