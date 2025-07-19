import { useDispatch } from 'react-redux'
import { Product } from '../../models/Product'
import * as S from './styles'
import closeIcon from '../../assets/close.svg'
import { add, open } from '../../store/reducers/cart'

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
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseIcon src={closeIcon} alt="icone de fechar" onClick={onClose} />
        <S.ProductImage src={product.foto} alt={product.nome} />
        <S.InfosContainer>
          <S.Title>{product.nome}</S.Title>
          <S.Description>{product.descricao}</S.Description>
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