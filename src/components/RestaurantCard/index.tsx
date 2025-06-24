// src/components/RestaurantCard/index.tsx
import { Restaurant } from '../../services/mock';
import Tag from '../Tag'; // Importando nosso novo componente Tag
import starIcon from '../../assets/star.svg'; // Importando o ícone de estrela

import * as S from './styles';

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <S.Card>
      <S.Imagem src={restaurant.capa} alt={restaurant.titulo} />

      <S.InfosContainer>
        {restaurant.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.tipo}</Tag>
      </S.InfosContainer>

      <S.Conteudo>
        <S.TituloContainer>
          <S.Titulo>{restaurant.titulo}</S.Titulo>
          <S.Nota>
            <span>{restaurant.avaliacao}</span>
            <img src={starIcon} alt="Estrela" />
          </S.Nota>
        </S.TituloContainer>

        <S.Descricao>{restaurant.descricao}</S.Descricao>

        <S.BotaoSaibaMais to={`/perfil/${restaurant.id}`}>
          Saiba mais
        </S.BotaoSaibaMais>
      </S.Conteudo>
    </S.Card>
  );
};

export default RestaurantCard;