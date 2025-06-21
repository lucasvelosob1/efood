// src/components/Header/styles.ts
import styled from 'styled-components';

export const HeaderBar = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 58px;
  }
`;

// theme.ts
export const theme = {
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00', // Add your desired secondary color here
  },
};

// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}