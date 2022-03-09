import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {
  return <Tooltip title={props.title}>{props.children}</Tooltip>;
}
