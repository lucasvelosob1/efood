import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { remove } from '../../store/reducers/cart'
import * as S from './styles'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const CartPage = () => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const proceedToCheckout = () => {
    alert('Continuando para a entrega...')
  }

  if (items.length === 0) {
    return (
      <S.Container>
        <S.EmptyCart>
          <h2>O carrinho está vazio</h2>
          <p>Adicione produtos clicando no botão "Adicionar ao carrinho" na página de um restaurante.</p>
          <S.ActionButton as={Link} to="/">
            Ver restaurantes
          </S.ActionButton>
        </S.EmptyCart>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.List>
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
      </S.List>
      <S.TotalPrice>
        <span>Valor total</span>
        <span>{formataPreco(calculateTotal())}</span>
      </S.TotalPrice>
      <S.ActionButton onClick={proceedToCheckout}>Continuar com a entrega</S.ActionButton>
    </S.Container>
  )
}

export default CartPage