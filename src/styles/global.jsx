import { createGlobalStyle } from 'styled-components';
import { useTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    /* font-weight: normal; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p, label, div, input {
  font: normal;
  font-family: 'Fredoka', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

`;
