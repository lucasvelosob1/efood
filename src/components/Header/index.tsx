// src/components/Header/index.tsx
import logoImg from '../../assets/logo-ycomida.png';
import * as S from './styles'; // Importa TUDO de styles.ts como 'S'

const Header = () => (
  <S.HeaderBar>
    <img src={logoImg} alt="ycomida" />
  </S.HeaderBar>
);

export default Header;