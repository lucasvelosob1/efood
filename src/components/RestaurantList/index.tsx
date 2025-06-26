import { Restaurant } from '../../services/mock';
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
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.ListGrid>
    </S.ListContainer>
  );
};

export default RestaurantList;