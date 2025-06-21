import { Restaurant } from '../../services/mock'; 
import * as S from './styles';

type Props = Restaurant;

const RestaurantCard = (restaurant: Props) => (
  <S.Card>
    <S.CardImage src={restaurant.capa} alt={restaurant.titulo} />
    {/* Renderiza as tags condicionalmente */}
    {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
    <S.Tag>{restaurant.tipo}</S.Tag>

    <S.CardContent>
      <S.TitleContainer>
        <h3>{restaurant.titulo}</h3>
        <span>
          {restaurant.avaliacao} ★
        </span>
      </S.TitleContainer>
      <S.Description>{restaurant.descricao}</S.Description>
      <S.SeeMoreLink to={`/perfil/${restaurant.id}`}>
        Saiba mais
      </S.SeeMoreLink>
    </S.CardContent>
  </S.Card>
)

export default RestaurantCard;