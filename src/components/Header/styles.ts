import styled from 'styled-components'
import { Link } from 'react-router-dom'
import fundoImg from '../../assets/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundoImg});
  background-size: cover;
  background-position: center;
  height: 186px;
  font-weight: bold;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`

export const LogoLink = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 125px;
  }
`

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.cores.rosa};
  font-size: 18px;
  font-weight: 900;
`

export const CartButton = styled.a`
  color: ${(props) => props.theme.cores.rosa};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`