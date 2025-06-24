// src/components/RestaurantBanner/index.tsx
import * as S from './styles';

type Props = {
  cuisine: string;
  name: string;
  coverImage: string;
};

const RestaurantBanner = ({ cuisine, name, coverImage }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${coverImage})` }}>
    <div className="container">
      <S.CuisineType>{cuisine}</S.CuisineType>
      <S.RestaurantName>{name}</S.RestaurantName>
    </div>
  </S.BannerContainer>
);

export default RestaurantBanner;