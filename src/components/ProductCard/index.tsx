import { Product } from '../../models/Product';
import * as S from './styles';

type Props = {
  product: Product;
  onOpenModal: (product: Product) => void;
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