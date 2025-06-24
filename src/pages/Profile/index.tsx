// src/pages/Profile/index.tsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Modal from '../../components/Modal';
import RestaurantBanner from '../../components/RestaurantBanner';

import { Product } from '../../services/mock';
import restaurantesMock from '../../services/mock';

const Profile = () => {
  const { id } = useParams();
  const restaurante = restaurantesMock.find(
    (r) => r.id === parseInt(id as string)
  );

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!restaurante) {
    return <h3>Restaurante não encontrado!</h3>;
  }

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <RestaurantBanner
        coverImage={restaurante.capa}
        cuisine={restaurante.tipo}
        name={restaurante.titulo}
      />
      <ProductList
        products={restaurante.cardapio}
        onOpenModal={handleOpenModal}
      />
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Profile;