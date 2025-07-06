import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import restaurantesMock from '../../services/mock' // Ou sua fonte de dados

const Home = () => {
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantesMock} />
    </>
  )
}

export default Home