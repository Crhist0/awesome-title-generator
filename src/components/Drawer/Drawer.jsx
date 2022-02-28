import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Fragment, useState } from 'react';
import { StyledDrawer } from './styled';

export const DrawerComponent = (props) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              position: 'absolute',
              top: '0px',
            }}
          >
            Configurations
          </Button>
          <Drawer
            sx={{
              '& .MuiBackdrop-root, .MuiBackdrop-root-MuiModal-backdrop': {
                backgroundColor: 'rgba(0, 0, 0, 0) ',
                transition:
                  'background-color 0.2s cubic-bezier(0.67, 0.1, 0.35, 0.83) !important;',
                ':hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
              },
            }}
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                resize: 'horizontal',
                overflow: 'hidden',
                height: '100%',
                width:
                  anchor === 'top' || anchor === 'bottom' ? 'auto' : '500px',
              }}
              role="presentation"
              //   onClick={toggleDrawer(anchor, false)}
              //   onKeyDown={toggleDrawer(anchor, false)}
            >
              {props.children}
            </Box>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
