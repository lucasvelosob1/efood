import * as S from './styles';

import logoImg from '../../assets/logo.png';

const Hero = () => (
  <S.HeroContainer>
    <S.Logo src={logoImg} alt="logo" />
    <S.Title>As melhores comidas, no conforto da sua casa.</S.Title>
  </S.HeroContainer>
);

export default Hero;