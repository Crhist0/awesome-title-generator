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

import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/ExportSlice';

export const SplitButton = (props) => {
  const configRedux = useSelector(({ config }) => config);
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
        >
          {props.name}
        </Button>
      </ButtonGroup>
      <Popper
        style={{ zIndex: '2' }}
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
                      key={option}
                      value={index}
                      id={option}
                      disabled={
                        (configRedux.circle && option !== 'Curved Text') ||
                        (!configRedux.circle && option === 'Curved Text')
                          ? true
                          : false
                      }
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
