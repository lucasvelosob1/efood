import styled from 'styled-components'
import fundoHero from '../../assets/fundo.png'

export const HeroContainer = styled.div`
  background-image: url(${fundoHero});
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`

export const Logo = styled.img`
  width: 125px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: ${(props) => props.theme.pesosDeFonte.black};
  max-width: 540px;
  text-align: center;
`