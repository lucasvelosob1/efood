// src/components/Modal/index.tsx
import { Product } from '../../services/mock';
import * as S from './styles';
import { useCart } from '../../context/cart';

type Props = {
  product: Product;
  onClose: () => void;
};

const Modal = ({ product, onClose }: Props) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    onClose(); // Fecha o modal de detalhes
    dispatch({ type: 'OPEN_CART' }); // Abre o carrinho
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <S.ModalContainer onClick={onClose}>
      <S.ModalContent className="container" onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose} />
        <img src={product.foto} alt={product.nome} />
        <div>
          <h4>{product.nome}</h4>
          <p>{product.descricao}</p>
          <p>Serve: {product.porcao}</p>
          <S.AddToCartButton onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatPrice(product.preco)}
          </S.AddToCartButton>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;