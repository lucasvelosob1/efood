import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter aqui
import AppRoutes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    // O BrowserRouter deve envolver tudo que usa rotas
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;