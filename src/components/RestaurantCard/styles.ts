// src/components/RestaurantCard/styles.ts
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.primary};
  position: relative; // Para posicionar as tags
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-left: 8px; // Espaço entre as tags
`

export const SeeMoreLink = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`