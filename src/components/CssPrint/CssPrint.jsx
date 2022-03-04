import { TextField } from '@mui/material';

export const CssPrint = (props) => {
  return (
    <div
      style={{
        overflow: 'auto',
        scrollbarWidth: 'thin',
        maxHeight: '600px',
        width: '430px',
        margin: '15px 0px 25px 25px',
      }}
    >
      <TextField
        variant="standard"
        multiline
        spellCheck={false}
        value={props.value}
        sx={{
          width: '400px',
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
