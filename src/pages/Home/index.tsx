// src/pages/Home/index.tsx

// 1. Remova a importação do Header e adicione a do Hero
import Hero from '../../components/Hero';
import RestaurantList from '../../components/RestaurantList';

import restaurantesMock from '../../services/mock';

const Home = () => {
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantesMock} />
    </>
  );
};

export default Home;