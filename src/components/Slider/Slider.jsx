import { Box, Grid, Slider } from '@mui/material';
import { StyledInput, StyledLabel } from './styled';

import useDebouncedEffect from '../../utils/useDebounceEffect';

import { useState } from 'react';

import { updateState } from '../../store/ConfigSlice';
import { useDispatch, useSelector } from 'react-redux';

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
    <Box sx={{ width: 250, padding: '0.5rem 1rem' }}>
      <StyledLabel id="input-slider" gutterBottom>
        {name}
      </StyledLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            size="small"
            value={typeof value === 'number' ? value : 1}
            onChange={handleSliderChange}
            min={minSize}
            max={maxSize}
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
