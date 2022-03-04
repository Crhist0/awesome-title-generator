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
    h3: {},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      p: {
        font: 'normal',
        fontFamily: 'Fredoka',
      },
      label: {
        font: 'normal',
        fontFamily: 'Fredoka',
      },
      input: {
        font: 'normal',
        fontFamily: 'Fredoka',
      },
    },
  },
});

export default darkTheme;
