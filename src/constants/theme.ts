declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
    otherFont: string;
    headerBG: string;
    body: string;
    border: string;
    housesSection: string;
    subscribersSection: string;
    accountingSection: string;
    documentsSection: string;
    tableData: string;
    checkedSettingsBtn: string;
    servicesTitle: string;
    addBntIcon: string;
    addBtnIconAccent: string;
    serviceBG: string;
    primary: string;
    primaryFont: string;
    secondary: string;
    error: string;
    // secondaryFont: string;
    // primary: string;
    // other: string;
    accent: string;
    // green: string;
    white: string;
    navSectionDesc: string;
    tableHeader: string;
    grey: string;
    // lightgrey: string;
    // blueBtn: string;
    // redBtn: string;
    redIcon: string;
    green: string;
    greenAccent: string;
    authFormBG: string;
  };
  fontFamily: {
    primary: string;
  };
  fontWeight: {
    primary: number;
  };
  fontSize: {
    primary: number;
    secondary: number;
    other: number;
    title: number;
  };
  padding: {
    container: number;
    authForm: number;
  };
  borderRadius: {
    primary: number;
    secondary: number;
    other: number;
  };
  containerWidth: {
    desktop: number;
  };
  shadows: {
    primary: string;
    secondary: string;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
    otherFont: '#555555',
    headerBG: '#001A35',
    body: '#e5e5e5',
    housesSection: '#ba5b50',
    subscribersSection: '#ee9646',
    accountingSection: '#3CB371',
    documentsSection: '#994499',
    navSectionDesc: '#343a40',
    tableHeader: '#0051a3',
    tableData: ' #212529',
    checkedSettingsBtn: ' rgb(133, 135, 150)',
    servicesTitle: '#dddfeb',
    addBntIcon: '#007bff',
    addBtnIconAccent: '#0056b3',
    serviceBG: '#eeeeee',
    authFormBG: '#fcfcfc',
    primary: '#3456FF',
    secondary: '#4d5ae5',
    primaryFont: '#000000',
    border: 'rgba(137, 137, 137, 0.43)',
    // secondaryFont: '#7c7c7c',
    // primary: '#3470ff',
    // other: '#38b6ff',
    // primaryFont: '#141414',
    accent: '#0b44cd',
    greenAccent: '#00FF00',
    white: '#FFFFFF',
    grey: '#555759',
    // lightgrey: '#d3d3d3',
    // blueBtn: '#7fd1ff',
    // redBtn: '#ff9192',
    redIcon: '#d3232f',
    error: '#C12F1C',
    // greenBtn: '#89f2a6',
    green: '#00c938',
    // authFormBG: '#fcfcfc',
  },
  fontFamily: {
    primary: 'Manrope',
  },
  fontWeight: {
    primary: 400,
  },
  fontSize: {
    primary: 16,
    secondary: 18,
    other: 20,
    // subtitle: 25,
    title: 36,
  },
  padding: {
    container: 16,
    authForm: 32,
  },
  borderRadius: {
    primary: 4,
    secondary: 8,
    other: 30,
  },
  containerWidth: {
    desktop: 1200,
  },
  shadows: {
    primary: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    secondary: '0px 4px 17px 0px rgba(0, 0, 0, 0.17)',
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
