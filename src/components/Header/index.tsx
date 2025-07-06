import * as S from './styles'
import { useCart } from '../../context/cart'
import logo from '../../assets/logo.png'

const Header = () => {
  const { state, dispatch } = useCart()
  const itemCount = state.items.length

  return (
    <S.HeaderBar>
      <div className="container">
        <S.NavLink to="/">Restaurantes</S.NavLink>
        <S.LogoLink to="/">
          <img src={logo} alt="efood" />
        </S.LogoLink>
        <S.CartButton onClick={() => dispatch({ type: 'OPEN_CART' })}>
          {itemCount} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header