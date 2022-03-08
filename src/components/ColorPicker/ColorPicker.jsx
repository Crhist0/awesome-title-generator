import { useEffect } from 'react';
import { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ConfigSlice';
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

  console.log(props.id);

  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(updateState({ name: props.id, changes: e }));
  }

  return <RgbaColorPicker color={configRedux} onChange={handleClick} />;
};

export default ColorPicker;
