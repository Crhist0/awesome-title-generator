import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip(props) {
  return (
    <Tooltip
      followCursor={props.followCursor}
      placement={props.placement}
      title={props.title}
    >
      {props.children}
    </Tooltip>
  );
}
