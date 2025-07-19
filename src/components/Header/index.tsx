import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import logo from '../../assets/logo.png'
import { open } from '../../store/reducers/cart'
import { RootState } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <S.NavLink to="/">Restaurantes</S.NavLink>
        <S.LogoLink to="/">
          <img src={logo} alt="efood" />
        </S.LogoLink>
        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header