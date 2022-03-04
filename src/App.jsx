import { ThemeProvider, CssBaseline } from '@mui/material';
import { Router } from './Router';
import darkTheme from './Themes/DarkTheme';
import lightTheme from './Themes/LightTheme';
let theme = {
  light: lightTheme,
  dark: darkTheme,
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme.light}>
        <CssBaseline />
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;
