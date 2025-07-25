import styled from 'styled-components'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${(props) => props.theme.cores.branco};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0 32px 0;
    position: relative;
    z-index: 1;
  }
`

export const CuisineType = styled.span`
  font-weight: 100;
  font-size: 32px;
`

export const RestaurantName = styled.h2`
  font-weight: 900;
  font-size: 32px;
`