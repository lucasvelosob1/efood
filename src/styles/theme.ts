// src/styles/theme.ts

const efoodTheme = {
  colors: {
    primary: '#E66767',
    secondary: '#FFEBD9',
    background: '#FFF8F2',
    text: '#E66767',
    white: '#FFFFFF', // A propriedade 'white' está definida aqui.
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

// Exporta o TIPO para o TypeScript
export type Theme = typeof efoodTheme;

// Exporta o VALOR para o React
export default efoodTheme;