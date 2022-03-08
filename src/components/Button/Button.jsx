import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { clearState } from '../../store/ConfigSlice';

const ResetButton = (props) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearState());
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export default ResetButton;
