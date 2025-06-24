// src/components/RestaurantBanner/styles.ts
import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  font-weight: bold;

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
    padding-top: 24px;
    padding-bottom: 32px;
    position: relative;
    z-index: 1;
  }
`;

export const CuisineType = styled.span`
  font-size: 18px;
  font-weight: 100;
`;

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;