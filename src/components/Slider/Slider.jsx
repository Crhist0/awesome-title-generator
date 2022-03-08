import { Box, Grid, Slider } from '@mui/material';
import { StyledInput, StyledLabel } from './styled';

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

  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    dispatch(updateState({ name: id, changes: newValue }));
  };

  const handleInputChange = (event) => {
    if (Number(event.target.value) < minSize) {
      dispatch(updateState({ name: id, changes: Number(minSize) }));
    } else if (Number(event.target.value) > maxSize) {
      dispatch(updateState({ name: id, changes: Number(maxSize) }));
    } else {
      dispatch(updateState({ name: id, changes: Number(event.target.value) }));
    }
  };

  const handleBlur = () => {
    if (tempConfig < minSize) {
      dispatch(updateState({ name: id, changes: Number(minSize) }));
    } else if (tempConfig > maxSize) {
      dispatch(updateState({ name: id, changes: Number(maxSize) }));
    }
  };

  return (
    <Box sx={{ width: 250, padding: '0.5rem 1rem' }}>
      <StyledLabel id="input-slider" gutterBottom>
        {name}
      </StyledLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            size="small"
            value={typeof tempConfig === 'number' ? tempConfig : 1}
            onChange={handleSliderChange}
            min={minSize}
            max={maxSize}
          />
        </Grid>
        <Grid item>
          <StyledInput
            value={tempConfig}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            sx={{
              '& .MuiInput-input': {
                textAlign: 'center',
              },
              ':before': {
                display: 'none',
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
