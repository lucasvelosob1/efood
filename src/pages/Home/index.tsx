// src/pages/Home/index.tsx
import Header from '../../components/Header';
// Importe outros componentes que você criará, como RestaurantList

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Lista de Restaurantes</h2>
        {/* Aqui você renderizará o componente <RestaurantList /> */}
      </div>
    </>
  );
};

export default Home;