import styled from 'styled-components';
import { Link } from 'react-router-dom';

type HeaderProps = {
  backgroundImage: string;
};

export const HeaderBar = styled.header<HeaderProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 58px;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-size: 18px;
`;

export const CartButton = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
`;