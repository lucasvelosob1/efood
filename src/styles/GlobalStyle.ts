import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.background}; // CORRETO: Fundo geral da página
    color: ${(props) => props.theme.colors.primary};             // CORRETO: Cor principal do texto
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
