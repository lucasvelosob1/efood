// src/components/ProductList/index.tsx
import { Product } from '../../services/mock';
import ProductCard from '../ProductCard';
import * as S from './styles';

type Props = {
  products: Product[];
  onOpenModal: (product: Product) => void;
};

const ProductList = ({ products, onOpenModal }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenModal={onOpenModal}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
);

export default ProductList;