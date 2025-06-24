// src/styled.d.ts
import 'styled-components';
import { Theme } from './styles/theme'; // Importa o TIPO do seu tema

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}