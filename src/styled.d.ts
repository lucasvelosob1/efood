// src/styled.d.ts
import 'styled-components';
import { Theme } from './styles/theme'; // Importe o TIPO do seu tema

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // Estenda o DefaultTheme com o seu tipo
}