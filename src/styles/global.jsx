import { createGlobalStyle } from 'styled-components';
import { useTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Fredoka', sans-serif;
    /* font-weight: normal; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
`;
