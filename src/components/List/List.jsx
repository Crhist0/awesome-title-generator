import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';

import useDebouncedEffect from '../../utils/useDebounceEffect';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const List = (props) => {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        scrollbarWidth: 'thin',
      },
    },
  };
  const dispatch = useDispatch();
  const configRedux = useSelector(({ config }) => config);
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

  function makeExeption() {
    // TODO: this still has a bug
    dispatch(updateState({ name: 'textTransform', changes: 'unset' }));
  }

  return (
    <FormControl
      sx={{
        m: 1,
        marginTop: '1rem',
        width: props.w ? props.w : 274,
      }}
    >
      <InputLabel
        id="demo-multiple-name-label"
        sx={{
          maxWidth: '100%',
          padding: '0rem 0.5rem 0rem 0rem',
        }}
      >
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
      </InputLabel>
      <Select
        value={
          configRedux.circle &&
          configRedux.textTransform === 'capitalize' &&
          props.id === 'textTransform'
            ? makeExeption()
            : // TODO: this still has a bug
              optionRedux
        }
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {props.options.map((option) => {
          return (
            <MenuItem
              sx={{
                fontFamily: props.id === 'fontFamily' ? option : 'Fredoka',
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
