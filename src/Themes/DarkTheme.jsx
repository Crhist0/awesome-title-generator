import { createTheme, darkScrollbar } from '@mui/material';

const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    background: {
      default: 'rgba(51, 51, 53, 1)',
    },
    primary: {
      main: '#f8f9fb',
    },
  },
  typography: {
    fontFamily: 'Fredoka',
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#f8f9fb !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#f8f9fb',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#f8f9fb',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#f8f9fb',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#333335',
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        '#cssPrintDiv': {
          backgroundColor: '#333335',
        },
        body: darkScrollbar(),
      },
    },
  },
});

export default darkTheme;
