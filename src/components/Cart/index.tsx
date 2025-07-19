import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { RootState } from '../../store'
import { remove, close } from '../../store/reducers/cart'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/cart')
    closeCart()
  }

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <S.RemoveButton onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <span>Valor total</span>
              <span>{formataPreco(calculateTotal())}</span>
            </S.TotalPrice>
            <S.ActionButton onClick={goToCheckout}>
              Continuar com a entrega
            </S.ActionButton>
          </>
        ) : (
          <p className="empty-text" style={{ color: 'white', textAlign: 'center' }}>
            O carrinho está vazio. Adicione pelo menos um produto para continuar.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart