// src/styles/theme.ts

// Cor primária extraída da sua logo "ycomida"
const ycomidaBlue = '#3777f5'; 

const theme = {
  colors: {
    primary: ycomidaBlue,
    secondary: '#FFEBD9', // Cor de fundo do e-food original, pode ajustar
    background: '#FFF8F2',
    text: ycomidaBlue,
    white: '#FFFFFF',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme;
export default theme;