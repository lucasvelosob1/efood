import styled from 'styled-components';
import fundoImg from '../../assets/fundo.png';

export const FooterContainer = styled.footer`
  background-image: url(${fundoImg});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  text-align: center;
`;

export const Logo = styled.img`
  margin-bottom: 32px;
`;

export const SocialLinks = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const LinkItem = styled.a`
  img {
    height: 24px;
  }
`;

export const CopyrightText = styled.p`
  color: ${(props) => props.theme.cores.rosa};
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
`;