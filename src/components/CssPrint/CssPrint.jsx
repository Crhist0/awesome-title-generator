import { TextField } from '@mui/material';

export const CssPrint = (props) => {
  // this component needs refactor to be responsive

  let size = {
    x: 0,
    y: 0,
  };
  switch (props.mode) {
    case 'csspure':
      size = {
        x: 30,
        y: 35,
      };
      break;
    case 'cssclass':
      size = {
        x: 30,
        y: 35,
      };
      break;
    case 'react':
      size = {
        x: 20,
        y: 35,
      };
      break;
    default:
      size = {
        x: 24,
        y: 35,
      };
      break;
  }
  return (
    <div
      style={{
        overflow: 'auto',
        scrollbarWidth: 'thin',
        height: size.y + 'rem',
        width: size.x + 'rem',
        margin: '15px 0px 25px 25px',
      }}
    >
      <TextField
        variant="standard"
        multiline
        spellCheck={false}
        value={props.value}
        sx={{
          width: size.x - 2 + 'rem',
          '& .MuiInput-root': {
            borderColor: 'transparent',
            ':before': {
              transition: 'border-bottom-color  86400s ', // sorry for that, it was late
              borderColor: 'transparent',
              ':hover': {
                borderColor: 'transparent',
              },
            },
            ':after': {
              borderColor: 'transparent',
            },
          },
        }}
      >
        {props.children}
      </TextField>
    </div>
  );
};
