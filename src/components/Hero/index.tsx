import * as S from './styles'

import logo from '../../assets/logo.png' // Garanta que o logo está aqui

const Hero = () => (
  <S.HeroContainer>
    <S.Logo src={logo} alt="efood" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa.</S.Title>
  </S.HeroContainer>
)

export default Hero