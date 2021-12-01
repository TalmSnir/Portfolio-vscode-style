import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Context } from './context/DataContext';

const sublimeMonkai = {
  clrText01: 'rgba(255, 255, 255, 1)',
  clrText02: 'rgba(204, 204, 204, 1)',
  clrWhite: 'rgb(255,255,255)',
  clrAccentBlue: 'rgba(0, 122, 204, 1)',
  clrAccentGreen: 'rgba(115, 201, 145, 1)',
  clrAccentYellow: 'rgba(255, 255, 0, 1)',
  clrAccentOrange: 'rgba(238, 157, 40, 1)',

  clrBgFooter: 'rgb(65, 67, 57)',

  clrBgMain: 'rgb(22 ,23 ,19)',

  clrBgSidebar: 'rgb(39, 40, 34)',
  clrBgSidebarSubMenu: 'rgba(0, 0, 0, 1)',

  clrBgHeader: 'rgb(30 ,31, 28)',
  clrBgProjectTab: 'rgb(52 53 47)',

  clrBgPanel: 'rgb(30 ,31, 28)',
  clrBgPanelTop: 'rgb(39, 40, 34)',
  clrBgPanelHover: 'rgb(65 ,67 ,57)',
};
const vscodeLight = {
  clrText01: 'rgba(0, 0, 0, 1)',
  clrText02: 'rgba(30, 30, 30, 1)',
  clrWhite: 'rgb(255,255,255)',
  clrAccentBlue: 'rgba(64, 166, 255, 1)',
  clrAccentGreen: 'rgba(115, 201, 145, 1)',
  clrAccentYellow: 'rgba(204, 167, 0, 1)',
  clrAccentOrange: 'rgba(204, 102, 51, 1)',

  clrBgFooter: 'rgba(0, 122, 204, 1)',

  clrBgMain: 'rgb(255 ,255 ,255)',

  clrBgSidebar: 'rgb(44, 44 ,44)',
  clrBgSidebarSubMenu: 'rgb(255, 255, 255)',

  clrBgHeader: 'rgb(220, 220 ,220)',
  clrBgProjectTab: 'rgb(236 236 236)',

  clrBgPanel: 'rgb(243, 243 ,243)',
  clrBgPanelTop: 'rgb(243, 243 ,243)',
  clrBgPanelHover: 'rgb(228, 230 ,241)',
};

const tomorrowNightBlue = {
  clrText01: 'rgba(255, 255, 255, 1)',
  clrText02: 'rgba(204, 204, 204, 1)',
  clrWhite: 'rgb(255,255,255)',
  clrAccentBlue: 'rgba(64, 166, 255, 1)',
  clrAccentGreen: 'rgba(115, 201, 145, 1)',
  clrAccentYellow: 'rgba(255, 255, 0, 1)',
  clrAccentOrange: 'rgba(238, 157, 40, 1)',

  clrBgFooter: 'rgba(0, 0, 0, 1)',

  clrBgMain: 'rgb(0 ,36, 81)',

  clrBgSidebar: 'rgb(0, 23, 51)',
  clrBgSidebarSubMenu: 'rgb(0, 23, 51)',

  clrBgHeader: 'rgb(1 ,18, 39)',
  clrBgProjectTab: 'rgb(1 ,33, 72)',

  clrBgPanel: 'rgb(0, 28, 64)',
  clrBgPanelTop: 'rgb(26 ,48, 77)',
  clrBgPanelHover: 'rgb(64, 85, 112)',
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Segoe UI";
  font-weight: 400;
  src:local('Segoe UI'), url("./assets/SEGOEUI.TTF") format('ttf');
}
@font-face {
  font-family: "Segoe UI";
  font-weight: bold;
  src:local('Segoe UI'), url("./assets/SEGOEUI.TTF") format('ttf');
}
html{
  scroll-behavior:smooth;
  overscroll-behavior: none;
  height:100%;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => ` ${theme.clrBgSidebar} transparent `};
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-left: ${({ theme }) => `0.5px solid ${theme.clrBgSidebar}`};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.clrBgSidebar};
  }
}
body {
 height:100%;
 overflow-x:hidden;
 overflow-y:auto;
 font-family: "Segoe UI", Arial, sans-serif;
}
#root{
  height:100%;
}

blockquote{
  & > p{
    padding-inline-start:1rem;
    position:relative;
    &::before{
      content:'';
      position:absolute;
      left:0;
      top:0;
      height:100%;
      width:0.1rem;
      background-color:${({ theme }) => theme.clrWhite};
    }
  }
  
}
}
`;
export default function SiteTheme({ children }) {
  const { colorTheme } = useContext(Context);

  let colors = {
    sublimeMonkai,
    vscodeLight,
    tomorrowNightBlue,
  };

  const theme = {
    ...colors[colorTheme],
    fsBodyB1: '1.1rem',
    fsBodyB2: '0.8rem',

    fsHeadingH1: '2rem',
    fsHeadingH2: '1.6rem',
    fsHeadingH5: '0.7rem',

    fwXl: '800',
    fwLg: '700',
    fwMd: '500',
    fwSm: '400',
    fwXs: '300',

    brPill: '3rem',
    brRound: '1rem',
    brCircle: '50%',

    shadow: '0 0 10px 0 rgba(0,0,0,0.2)',

    spacingXl: '8rem',
    spacingLg: '6rem',
    spacingMd: '4rem',
    spacingSm: '2rem',
    spacingXs: '1rem',
    spacingXxs: '0.5rem',

    zIndexTooltip: '1200',
    zIndexPanel: '1100',
    zIndexModal: '1000',
    zIndexTop: '800',
    zIndexTab: '700',

    bpSm: '375px',
    bpMd: '700px',
    bpLg: '1000px',
    bpXl: '1200px',
    bpXxl: '1440px',

    xsFc: '1.1',
    smFc: '1.2',
    mdFc: '1.5',
    lgFc: '1.7',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
