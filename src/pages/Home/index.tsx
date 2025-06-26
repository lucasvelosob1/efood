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