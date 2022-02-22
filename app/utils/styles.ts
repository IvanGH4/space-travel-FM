import { createGlobalStyle } from 'styled-components';

export const colors = {
  dark: 'hsl(230, 35%, 7%)',
  light: 'hsl(0, 0%, 100%)',
  secondary: 'hsl(231, 77%, 90%)',
};

export const fonts = {
  h1: {
    size: '150px',
    lineHeight: '172px',
  },
  h2: {
    size: '100px',
    lineHeight: '115px',
  },
  h3: {
    size: '56px',
    lineHeight: '64.2px',
  },
  h4: {
    size: '32px',
    lineHeight: '37px',
  },
  h5: {
    size: '28px',
    lineHeight: '34px',
    letterSpacing: '4.75px',
  },
  subH1: {
    size: '28px',
    lineHeight: '32px',
  },
  subH2: {
    size: '14px',
    lineHeight: '17px',
    letterSpacing: '2.35px',
  },
  navText: {
    size: '16px',
    lineHeight: '19px',
    letterSpacing: '2.7px',
  },
  bodyText: {
    size: '18px',
    lineHeight: '32px',
  },
};

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Bellefair', serif;
  }

  h5,
  h6 {
    font-family: 'Barlow Condensed', sans-serif;
  }

  ul {
    list-style: none;
  }
`;
