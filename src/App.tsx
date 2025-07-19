import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import theme from './styles/theme'
import AppRoutes from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
          <Footer />
          <Cart />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App