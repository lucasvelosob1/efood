// src/components/ProductCard/index.tsx
import { Product } from '../../services/mock';
import * as S from './styles';

type Props = {
  product: Product;
  onOpenModal: (product: Product) => void; // Nova prop para abrir o modal
};

const ProductCard = ({ product, onOpenModal }: Props) => (
  <S.CardContainer>
    <S.ProductImage src={product.foto} alt={product.nome} />
    <S.Title>{product.nome}</S.Title>
    <S.Description>{product.descricao}</S.Description>
    <S.AddToCartButton onClick={() => onOpenModal(product)}>
      Mais detalhes
    </S.AddToCartButton>
  </S.CardContainer>
);

export default ProductCard;