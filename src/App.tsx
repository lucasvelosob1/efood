// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/cart'; // Importe o Provedor

import AppRoutes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import theme from './styles/theme';
import Footer from './components/Footer';
import Cart from './components/Cart'; // Importe o Carrinho

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
          <Footer />
          <Cart />
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;