import { useEffect } from 'react';
import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';
import useDebouncedEffect from '../../utils/useDebounceEffect';
// { r: 150, g: 150, b: 150, a: 1 }
const ColorPicker = (props) => {
  const configRedux = useSelector(({ config }) => {
    switch (props.id) {
      case 'textColor':
        return config.textColor;
      case 'shadowColor':
        return config.shadowColor;
      default:
        break;
    }
  });
  const dispatch = useDispatch();

  const [value, setValue] = useState(configRedux);
  useDebouncedEffect(
    () => {
      dispatch(updateState({ name: props.id, changes: value }));
    },
    [value],
    40 // slightly better performance
  );
  function handleClick(e) {
    setValue(e);
  }

  return <RgbaColorPicker color={configRedux} onChange={handleClick} />;
};

export default ColorPicker;
