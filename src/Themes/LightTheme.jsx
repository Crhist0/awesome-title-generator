import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    background: {
      default: '#f8f9fb',
    },
    primary: {
      main: 'rgba(51, 51, 53, 1)',
    },
  },
  typography: {
    fontFamily: 'Fredoka',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default lightTheme;
