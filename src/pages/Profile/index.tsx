import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import RestaurantBanner from '../../components/RestaurantBanner'
import Modal from '../../components/Modal'
import { Restaurant, Product } from '../../services/mock'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
      })
      .catch((error) => {
        console.error('Falha ao buscar o restaurante:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <h2 style={{ textAlign: 'center', margin: '80px 0' }}>Carregando...</h2>
      ) : (
        <>
          {restaurant ? (
            <>
              <RestaurantBanner
                coverImage={restaurant.capa}
                cuisine={restaurant.tipo}
                name={restaurant.titulo}
              />
              <ProductList
                products={restaurant.cardapio}
                onOpenModal={handleOpenModal}
              />
            </>
          ) : (
            <h3 style={{ textAlign: 'center', margin: '80px 0' }}>
              Restaurante não encontrado!
            </h3>
          )}
        </>
      )}
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default Profile