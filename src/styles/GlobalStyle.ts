import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fontes.principal};
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${theme.cores.begeClaro};
    color: ${theme.cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`