import { ThemeProvider } from 'styled-components';
import { themes } from './Themes/Theme';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
function App() {
  return (
    <>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Router></Router>
      </ThemeProvider>
    </>
  );
}

export default App;
