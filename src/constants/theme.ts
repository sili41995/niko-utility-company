declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryFont: string;
    otherFont: string;
    headerBG: string;
    // secondaryFont: string;
    // primary: string;
    // other: string;
    // accent: string;
    // green: string;
    white: string;
    // grey: string;
    // lightgrey: string;
    // blueBtn: string;
    // redBtn: string;
    // redIcon: string;
    // greenBtn: string;
    // greenIcon: string;
    // authFormBG: string;
  };
  fontFamily: {
    primary: string;
  };
  fontWeight: {
    // primary: number;
    // secondary: number;
    other: number;
  };
  fontSize: {
    primary: number;
    // subtitle: number;
    title: number;
    // secondary: number;
  };
  padding: {
    container: number;
    // authForm: number;
  };
  borderRadius: {
    primary: number;
    // secondary: number
  };
  containerWidth: {
    desktop: number;
  };
  shadows: {
    // primary: string;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryFont: '#000000',
    otherFont: '#555555',
    headerBG: '#001A35',
    // secondaryFont: '#7c7c7c',
    // primary: '#3470ff',
    // other: '#38b6ff',
    // primaryFont: '#141414',
    // accent: '#0b44cd',
    // green: '#00FF00',
    white: '#FFFFFF',
    // grey: '#555759',
    // lightgrey: '#d3d3d3',
    // blueBtn: '#7fd1ff',
    // redBtn: '#ff9192',
    // redIcon: '#d3232f',
    // greenBtn: '#89f2a6',
    // greenIcon: '#00c938',
    // authFormBG: '#fcfcfc',
  },
  fontFamily: {
    primary: 'Manrope',
  },
  fontWeight: {
    other: 400,
  },
  fontSize: {
    primary: 16,
    // subtitle: 25,
    title: 36,
    // secondary: 20,
  },
  padding: {
    container: 16,
    // authForm: 32,
  },
  borderRadius: {
    primary: 4,
    // secondary: 8,
  },
  containerWidth: {
    desktop: 1200,
  },
  shadows: {
    // primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
