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

    tablet: {
      lineHeight: '150px',
    },

    mobile: {
      size: '80px',
      lineHeight: '100px',
    },
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

    tablet: {
      letterSpacing: '2px',
    },

    mobile: {
      size: '20px',
      lineHeight: '22.92px',
      letterSpacing: '1.25px',
    },
  },
  h5: {
    size: '28px',
    lineHeight: '34px',
    letterSpacing: '4.75px',

    tablet: {
      size: '20px',
      lineHeight: '24px',
      letterSpacing: '3.38px',
    },

    mobile: {
      size: '16px',
      lineHeight: '19.2px',
      letterSpacing: '2.7px',
    },
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

    tablet: {
      size: '16px',
      lineHeight: '28px',
    },

    mobile: {
      size: '15px',
      lineHeight: '25px',
    },
  },
};

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:not(canvas) {
    position: relative;
    z-index: 100;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
  }

  h5,
  h6 {
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }
`;
