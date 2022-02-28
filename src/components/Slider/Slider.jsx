import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StyledInput, StyledLabel, StyledSlider } from './styled';
import { useTheme } from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';
import useDebouncedEffect from '../../utils/useDebounceEffect';

export const InputSlider = ({ name, id, min, max }) => {
  let minSize = min || min === 0 ? min : -50;
  let maxSize = max ? max : 50;
  const tempConfig = useSelector(({ config }) => {
    switch (id) {
      case 'offsetX':
        return config.offsetX;
      case 'offsetY':
        return config.offsetY;
      case 'offsetZ':
        return config.offsetZ;
      case 'blurRadius':
        return config.blurRadius;
      case 'shadowColor':
        return config.shadowColor;
      case 'textTransform':
        return config.textTransform;
      case 'size':
        return config.size;
      case 'radius':
        return config.radius;
      default:
        break;
    }
  });

  const [value, setValue] = useState(tempConfig);
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < minSize) {
      setValue(minSize);
    } else if (value > maxSize) {
      setValue(maxSize);
    }
  };

  useDebouncedEffect(
    () => {
      dispatch(
        updateState({
          name: id,
          changes: value,
        })
      );
    },
    [value],
    0 // if performanse issues come up, raise this value
  );

  return (
    <Box sx={{ width: 250, padding: '0rem 1rem' }}>
      <StyledLabel id="input-slider" gutterBottom>
        {name}
      </StyledLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <StyledSlider
            size="small"
            value={typeof value === 'number' ? value : 1}
            onChange={handleSliderChange}
            min={minSize}
            max={maxSize}
            sx={{
              '& .MuiSlider-thumbColorPrimary:hover': {
                boxShadow:
                  '0px 0px 0px 4.9px ' +
                  useTheme().primary.replace('1)', '0.2)'),
              },
              '& .MuiSlider-thumb.Mui-focusVisible': {
                boxShadow:
                  '0px 0px 0px 7px ' + useTheme().primary.replace('1)', '0.4)'),
              },
            }}
          />
        </Grid>
        <Grid item>
          <StyledInput
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            sx={{
              '& .MuiInput-input': {
                textAlign: 'center',
                color: useTheme().primary,
              },
              ':before': {
                display: 'none',
              },
              ':after': {
                borderBottomColor: useTheme().primary,
              },
            }}
            inputProps={{
              step: 1,
              min: minSize,
              max: maxSize,
              type: 'number',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
