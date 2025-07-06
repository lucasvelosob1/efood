import * as S from './styles'

type Props = {
  coverImage: string
  cuisine: string
  name: string
}

const RestaurantBanner = ({ coverImage, cuisine, name }: Props) => {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="container">
        <S.CuisineType>{cuisine}</S.CuisineType>
        <S.RestaurantName>{name}</S.RestaurantName>
      </div>
    </S.BannerContainer>
  )
}

export default RestaurantBanner