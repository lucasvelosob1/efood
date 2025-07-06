import { Product } from '../../services/mock'
import { useCart } from '../../context/cart'
import * as S from './styles'
import closeIcon from '../../assets/close.svg'

type Props = {
  product: Product
  onClose: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ product, onClose }: Props) => {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product })
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseIcon src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
        <S.ProductImage src={product.foto} alt={product.nome} />
        <S.InfosContainer>
          <S.Title>{product.nome}</S.Title>
          <S.Description>{product.descricaoDetalhada}</S.Description>
          <S.Portion>Serve: {product.porcao}</S.Portion>
          <S.AddToCartButton onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(product.preco)}
          </S.AddToCartButton>
        </S.InfosContainer>
      </S.ModalContent>
    </S.Overlay>
  )
}

export default Modal