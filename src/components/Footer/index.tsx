// src/components/Footer/index.tsx
import * as S from './styles';

// Importando a logo do efood e os ícones
import logo from '../../assets/logo.png';
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import xIcon from '../../assets/x.svg';

const Footer = () => (
  <S.FooterContainer>
    <S.Logo src={logo} alt="efood" />
    <S.SocialLinks>
      <S.LinkItem
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="Ícone do Instagram" />
      </S.LinkItem>
      <S.LinkItem
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookIcon} alt="Ícone do Facebook" />
      </S.LinkItem>
      <S.LinkItem
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={xIcon} alt="Ícone do X" />
      </S.LinkItem>
    </S.SocialLinks>
    <S.CopyrightText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.CopyrightText>
  </S.FooterContainer>
);

export default Footer;