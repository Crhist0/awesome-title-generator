import { createTheme, darkScrollbar } from '@mui/material';

const colors = {
  main: '#f8f9fb',
  bg1: 'rgba(51, 51, 53, 1)',
  bg2: '#333335',
};

const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    background: {
      default: colors.bg1,
    },
    primary: {
      main: colors.main,
    },
  },
  typography: {
    fontFamily: 'Fredoka',
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.main + ' !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: colors.main,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: colors.main,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: colors.main,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: colors.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.main,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.main,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.main,
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
          backgroundColor: colors.bg2,
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        '#cssPrintDiv': {
          backgroundColor: colors.bg2,
        },
        body: darkScrollbar(),
      },
    },
  },
});

export default darkTheme;
