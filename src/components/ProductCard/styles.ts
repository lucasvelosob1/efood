import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.cores.rosa};
  color: ${(props) => props.theme.cores.begeMedio};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex-grow: 1;
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.cores.begeMedio};
  color: ${(props) => props.theme.cores.rosa};
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`