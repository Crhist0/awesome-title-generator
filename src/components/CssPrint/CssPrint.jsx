import { TextField } from '@mui/material';

export const CssPrint = (props) => {
  return (
    <div
      style={{
        overflow: 'auto',
        scrollbarWidth: 'thin',
        height: '70vh',
        width: '28vw',
        margin: '15px 0px 25px 25px',
      }}
    >
      <TextField
        variant="standard"
        multiline
        spellCheck={false}
        value={props.value}
        sx={{
          width: '27vw',
          '& .MuiInput-root': {
            borderColor: 'transparent',
            ':before': {
              transition: 'border-bottom-color  86400s ',
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
