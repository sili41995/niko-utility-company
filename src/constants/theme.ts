declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    black: string;
    otherFont: string;
    blue: string;
    darkBlue: string;
    body: string;
    border: string;
    subscriberAccountsSection: string;
    accountingSection: string;
    documentsSection: string;
    darkGrey: string;
    grey: string;
    lightGrey: string;
    primary: string;
    accent: string;
    white: string;
    tableHeader: string;
    red: string;
    green: string;
    greenAccent: string;
  };
  fontFamily: {
    primary: string;
  };
  fontWeight: {
    primary: number;
    secondary: number;
    other: number;
  };
  fontSize: {
    primary: number;
    secondary: number;
    other: number;
    subtitle: number;
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
  trimText: string;
}

const theme: ITheme = {
  colors: {
    black: '#000000',
    red: '#d3232f',
    white: '#FFFFFF',
    body: '#e5e5e5',
    primary: '#3456FF',
    accent: '#4d5ae5',
    blue: '#7fd1ff',
    otherFont: '#555555',
    border: 'rgba(137, 137, 137, 0.43)',
    green: '#00c938',
    greenAccent: '#00FF00',
    darkGrey: '#858796',
    accountingSection: '#3CB371',
    subscriberAccountsSection: '#ee9646',
    documentsSection: '#994499',
    darkBlue: '#001A35',
    tableHeader: '#0051a3',
    grey: '#dddfeb',
    lightGrey: '#eeeeee',
  },
  fontFamily: {
    primary: 'Roboto',
  },
  fontWeight: {
    primary: 400,
    secondary: 700,
    other: 500,
  },
  fontSize: {
    primary: 16,
    secondary: 18,
    other: 20,
    subtitle: 24,
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
  trimText:
    'word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;',
};

export default theme;
