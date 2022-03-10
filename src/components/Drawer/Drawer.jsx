import { Paper, Box, Drawer } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const arrowTransitions = (state) => {
  if (!state) {
    return (
      <ArrowRightIcon
        sx={{
          opacity: '0.8',
          transition: '4s',
        }}
      />
    );
  }
  return (
    <ArrowRightIcon
      sx={{
        opacity: '0',
        transition: '0s',
      }}
    />
  );
};

export const DrawerComponent = (props) => {
  // the useSelector and useEffect bellow is for the starter animation
  const drawer = useSelector(({ drawer }) => drawer);
  useEffect(() => {
    if (drawer) {
      setState(false);
    }
  }, [drawer]);
  // end animation

  const [state, setState] = useState(true);

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
          <Drawer
            sx={{
              '& .MuiBackdrop-root, .MuiBackdrop-root-MuiModal-backdrop': {
                backgroundColor: 'rgba(0, 0, 0, 0) ',
                transition:
                  'background-color 0.2s cubic-bezier(0.67, 0.1, 0.35, 0.83) !important;',
              },
            }}
            anchor={anchor}
            open={state}
            onPointerEnter={toggleDrawer(anchor, true)}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                resize: 'horizontal',
                overflow: 'hidden',
                height: '100%',
                width: '500px',
              }}
              role="presentation"
            >
              {props.children}
            </Box>
          </Drawer>
          <Paper
            onPointerEnter={toggleDrawer(anchor, true)}
            elevation={5}
            style={{
              position: 'absolute',
              top: '0vh',
              bottom: '0vh',
              left: '0vw',
              right: '98vw',
            }}
          >
            <FlexWrapper>{arrowTransitions(state)}</FlexWrapper>
          </Paper>
        </Fragment>
      ))}
    </div>
  );
};
