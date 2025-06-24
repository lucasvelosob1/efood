import styled from 'styled-components';
import fundoImg from '../../assets/fundo.png';

export const HeroContainer = styled.div`

  background-image: url(${fundoImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 384px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  max-width: 540px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 58px;
`;