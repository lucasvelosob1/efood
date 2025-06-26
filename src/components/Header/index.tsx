import * as S from './styles';
import { useCart } from '../../context/cart';

import logo from '../../assets/logo.png';
import fundoImg from '../../assets/fundo.png';

const Header = () => {
  const { state, dispatch } = useCart();

  return (
    <S.HeaderBar backgroundImage={fundoImg}>
      <div className="container">
        <S.NavLink to="/">Restaurantes</S.NavLink>
        <S.Logo src={logo} alt="efood" />
        <S.CartButton onClick={() => dispatch({ type: 'OPEN_CART' })}>
          {state.items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  );
};

export default Header;