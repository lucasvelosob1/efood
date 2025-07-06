import ProductCard from '../ProductCard'
import { Product } from '../../services/mock'
import * as S from './styles'

type Props = {
  products: Product[]
  onOpenModal: (product: Product) => void
}

const ProductList = ({ products, onOpenModal }: Props) => (
  <S.ListContainer>
    <div className="container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  </S.ListContainer>
)

export default ProductList