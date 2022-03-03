import {
  Button,
  ButtonGroup,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@mui/material';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { updateState } from '../../store/ExportSlice';

import { useTheme } from 'styled-components';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const SplitButton = (props) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const dispatch = useDispatch();

  const handleMenuItemClick = (event) => {
    getExportMode(event.target.id, true);
    setOpen(false);
  };

  function getExportMode(selected, changes) {
    switch (selected) {
      case 'CSS pure':
        return dispatch(updateState({ selected: 'csspure', changes }));
      case 'CSS Class':
        return dispatch(updateState({ selected: 'cssclass', changes }));
      case 'ReactJs Component':
        return dispatch(updateState({ selected: 'react', changes }));
      case 'Curved Text':
        return dispatch(updateState({ selected: 'curve', changes }));

      default:
        break;
    }
  }
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleToggle}
          sx={{
            backgroundColor: open
              ? useTheme().primary.replace('1)', '0.8)')
              : useTheme().primary.replace('1)', '0.9)'),
            ':hover': {
              backgroundColor: useTheme().primary,
            },
          }}
        >
          {props.name}
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {props.options.map((option, index) => (
                    <MenuItem
                      sx={{
                        ':hover': {
                          backgroundColor: useTheme().primary.replace(
                            '1)',
                            '0.2)'
                          ),
                        },
                      }}
                      key={option}
                      value={index}
                      id={option}
                      disabled={index >= 2 ? true : false}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
