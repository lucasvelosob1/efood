// src/components/Cart/index.tsx
import { useCart } from '../../context/cart';
import * as S from './styles';

const Cart = () => {
  const { state, dispatch } = useCart();

  const calculateTotal = () => {
    return state.items.reduce((acc, item) => acc + item.preco, 0);
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    // Adicionamos a classe 'is-open' condicionalmente
    <S.CartContainer className={state.isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch({ type: 'CLOSE_CART' })} />
      <S.Sidebar>
        {state.items.length > 0 ? (
          <>
            {state.items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>
                <S.RemoveButton onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
            <S.TotalPrice>
              <span>Valor total</span>
              <span>R$ {calculateTotal().toFixed(2)}</span>
            </S.TotalPrice>
            <S.CheckoutButton>Continuar com a entrega</S.CheckoutButton>
          </>
        ) : (
          <p className="empty-text" style={{ color: 'white', textAlign: 'center' }}>
            O carrinho está vazio.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;