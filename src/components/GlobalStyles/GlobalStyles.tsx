import { FC } from 'react';
import { Global, css } from '@emotion/react';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '@/constants';
import { robotoRegular, robotoBold, robotoMedium } from '@/fonts';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${theme.fontFamily.primary};
        src: local(${theme.fontFamily.primary}),
          url(${robotoBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: ${theme.fontFamily.primary};
        src: local(${theme.fontFamily.primary}),
          url(${robotoMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: ${theme.fontFamily.primary};
        src: local(${theme.fontFamily.primary}),
          url(${robotoRegular}) format('truetype');
        font-weight: 400;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
