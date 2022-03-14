import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { Router } from './Router';
import darkTheme from './Themes/DarkTheme';
import lightTheme from './Themes/LightTheme';
let theme = {
  light: lightTheme,
  dark: darkTheme,
};
function App() {
  const currentTheme = useSelector((state) => state.theme.mode);
  return (
    <>
      <ThemeProvider
        theme={currentTheme === 'light' ? theme.light : theme.dark}
      >
        <CssBaseline />
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;
