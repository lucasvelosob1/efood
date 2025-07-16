import { useState, useEffect } from 'react'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { Restaurant } from '../../models/Restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data)
      })
      .catch((error) => {
        console.error('Falha ao buscar restaurantes:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Hero />
      {isLoading ? (
        <h2 style={{ textAlign: 'center', margin: '80px 0' }}>Carregando...</h2>
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
    </>
  )
}

export default Home