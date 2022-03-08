import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {
  return (
    <Tooltip sx={{ backgroundColor: 'red' }} title={props.title}>
      {props.children}
    </Tooltip>
  );
}
