import { Restaurant } from '../../models/Restaurant';
import RestaurantCard from '../RestaurantCard';
import * as S from './styles';

type Props = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.ListContainer>
      <S.ListGrid>
        {restaurants.map((restaurant) => (
          <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.titulo}
          category={restaurant.tipo}
          description={restaurant.descricao}
          image={restaurant.capa}
          rating={restaurant.avaliacao}
          infos={restaurant.destacado ? ['Destaque da semana'] : []}
          />
          ))}
      </S.ListGrid>
    </S.ListContainer>
  );
};

export default RestaurantList;