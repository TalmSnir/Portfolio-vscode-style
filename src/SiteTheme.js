import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Context } from './context/DataContext';

// --dark--- -base  -base 01: rgba(255, 255, 255, 1);
// --dark--- -base  -base 02: rgba(240, 240, 240, 1);
// --dark--- -base  -base 03: rgba(231, 231, 231, 1);
// --dark--- -base  -base 04: rgba(229, 229, 229, 1);
// --dark--- -base  -base 05: rgba(212, 212, 212, 1);
// --dark--- -base  -base 06: rgba(204, 204, 204, 1);
// --dark--- -base  -base 07: rgba(198, 198, 198, 1);
// --dark--- -base  -base 08: rgba(187, 187, 187, 1);
// --dark--- -base  -base 09: rgba(160, 160, 160, 1);
// --dark--- -base  -base 10: rgba(128, 128, 128, 1);
// --dark--- -base  -base 11: rgba(127, 127, 127, 1);
// --dark--- -base  -base 12: rgba(96, 96, 96, 1);
// --dark--- -base  -base 13: rgba(69, 69, 69, 1);
// --dark--- -base  -base 14: rgba(60, 60, 60, 1);
// --dark--- -base  -base 15: rgba(66, 71, 80, 1);
// --dark--- -base  -base 16: rgba(58, 61, 65, 1);
// --dark--- -base  -base 17: rgba(51, 51, 51, 1);
// --dark--- -base  -base 18: rgba(48, 48, 49, 1);
// --dark--- -base  -base 19: rgba(41, 41, 41, 1);
// --dark--- -base  -base 20: rgba(37, 37, 38, 1);
// --dark--- -base  -base 21: rgba(30, 30, 30, 1);
// --dark--- -base  -base 22: rgba(0, 0, 0, 1);
// --dark--- -accent  -blue 01: rgba(117, 190, 255, 1);
// --dark--- -accent  -blue 02: rgba(64, 166, 255, 1);
// --dark--- -accent  -blue 03: rgba(51, 153, 204, 1);
// --dark--- -accent  -blue 04: rgba(55, 148, 255, 1);
// --dark--- -accent  -blue 05: rgba(0, 151, 251, 1);
// --dark--- -accent  -blue 06: rgba(0, 122, 204, 1);
// --dark--- -accent  -blue 07: rgba(14, 99, 156, 1);
// --dark--- -accent  -blue 08: rgba(38, 79, 120, 1);
// --dark--- -accent  -blue 09: rgba(9, 71, 113, 1);
// --dark--- -accent  -blue 10: rgba(6, 47, 74, 1);
// --dark--- -accent  -blue 11: rgba(0, 31, 51, 1);
// --dark--- -accent  -red 01: rgba(241, 76, 76, 1);
// --dark--- -accent  -red 02: rgba(199, 78, 57, 1);
// --dark--- -accent  -red 03: rgba(255, 0, 0, 1);
// --dark--- -accent  -red 04: rgba(163, 21, 21, 1);
// --dark--- -accent  -green 01: rgba(115, 201, 145, 1);
// --dark--- -accent  -green 02: rgba(64, 200, 174, 1);
// --dark--- -accent  -green 03: rgba(22, 130, 93, 1);
// --dark--- -accent  -green 04: rgba(50, 126, 54, 1);
// --dark--- -accent  -green 05: rgba(40, 99, 43, 1);
// --dark--- -accent  -purple 01: rgba(108, 108, 196, 1);
// --dark--- -accent  -purple 02: rgba(177, 128, 215, 1);
// --dark--- -accent  -purple 03: rgba(188, 63, 188, 1);
// --dark--- -accent  -purple 04: rgba(104, 33, 122, 1);
// --dark--- -accent  -yellow 01: rgba(215, 186, 125, 1);
// --dark--- -accent  -yellow 02: rgba(204, 167, 0, 1);
// --dark--- -accent  -yellow 03: rgba(184, 149, 0, 1);
// --dark--- -accent  -yellow 04: rgba(255, 255, 0, 1);
// --dark--- -accent  -orange 01: rgba(204, 102, 51, 1);
// --dark--- -accent  -orange 02: rgba(238, 157, 40, 1);
// --dark--- -accent  -orange 03: rgba(234, 92, 0, 1);
// --dark--- -seti  -blue: rgba(81, 154, 186, 1);
// --dark--- -seti  -green: rgba(141, 193, 73, 1);
// --dark--- -seti  -red: rgba(204, 62, 68, 1);
// --dark--- -seti  -orange: rgba(227, 121, 51, 1);
// --dark--- -seti  -pink: rgba(245, 83, 133, 1);
// --dark--- -seti  -steel: rgba(116, 148, 163, 1);
// --dark--- -seti  -yellow: rgba(203, 203, 65, 1);
// --dark--- -seti  -purple: rgba(160, 116, 196, 1);
// --dark--- -seti  -ignore: rgba(65, 83, 91, 1);
// --dark--- -seti  -gray: rgba(109, 128, 134, 1);
// --dark--- -seti  -white: rgba(212, 215, 214, 1);

/* Text-size styles */
// --heading--- -h1: 26px;
// --heading--- -h2: 14px;
// --heading--- -h3: 13px;
// --heading--- -h4: 11px;
// --heading--- -h5: 11px;
// --heading--- -h6: 11px;
// --body--- -b1: 13px;
// --body--- -b2: 12px;
// --label--- -l1: 14px;
// --label--- -l2: 12px;
// --label--- -l3: 11px;
// --label--- -l4: 9px;
// --code--- -regular: 12px;
// --code--- -bold: 12px;
// --code--- -deprecated: 12px;
// --code--- -minimap: 2px;
// --icons--- -codicon: 16px;
// --icons--- -codicon -small: 14px;
// --icons--- -seti: 20px;
// --markdown--- -h1: 26px;
// --markdown--- -h2: 20px;
// --markdown--- -h3: 15px;
// --markdown--- -h4: 13px;
// --markdown--- -h5: 11px;
// --markdown--- -h6: 9px;
// --markdown--- -paragraph: 13px;
const sublimeMonkai = {
  clrBase01: 'rgba(255, 255, 255, 1)',
  clrBase06: 'rgba(204, 204, 204, 1)',
  clrBase12: 'rgba(96, 96, 96, 1)',
  clrBase17: 'rgba(51, 51, 51, 1)',
  clrBase18: 'rgba(48, 48, 49, 1)',
  clrBase19: 'rgba(41, 41, 41, 1)',
  clrBase20: 'rgba(37, 37, 38, 1)',
  clrBase21: 'rgba(0, 0, 0, 1)',

  clrAccentBlue06: 'rgba(0, 122, 204, 1)',
  clrAccentGreen01: 'rgba(115, 201, 145, 1)',
  clrAccentYellow03: 'rgba(184, 149, 0, 1)',
  clrAccentOrange02: 'rgba(238, 157, 40, 1)',

  clrSecondary: '#334756',
  clrAccent: '#082032',
  clrBlack: '#000000',
  clrWhite: '#FFFFFF',
};
const vscodeLight = {
  clrBase01: 'rgba(0, 0, 0, 1)',
  clrBase06: 'rgba(0, 0, 0, 1)',
  clrBase17: 'rgba(204, 204, 204, 1)',
  clrBase20: 'rgba(160, 160, 160, 1)',
  clrBase21: ' rgba(255, 255, 255, 1)',

  clrAccentBlue06: 'rgba(64, 166, 255, 1)',
  clrAccentGreen01: 'rgba(115, 201, 145, 1)',
  clrAccentYellow03: 'rgba(215, 186, 125, 1)',
  clrAccentOrange02: 'rgba(204, 102, 51, 1)',

  clrSecondary: '#334756',
  clrAccent: '#082032',
  clrBlack: '#000000',
  clrWhite: '#FFFFFF',
};

const tomorrowNightBlue = {
  clrBase01: 'rgba(0, 0, 0, 1)',
  clrBase06: 'rgba(0, 0, 0, 1)',
  clrBase17: 'rgba(204, 204, 204, 1)',
  clrBase20: 'rgba(160, 160, 160, 1)',
  clrBase21: ' rgba(255, 255, 255, 1)',

  clrAccentBlue06: 'rgba(64, 166, 255, 1)',
  clrAccentGreen01: 'rgba(115, 201, 145, 1)',
  clrAccentYellow03: 'rgba(215, 186, 125, 1)',
  clrAccentOrange02: 'rgba(204, 102, 51, 1)',

  clrSecondary: '#334756',
  clrAccent: '#082032',
  clrBlack: '#000000',
  clrWhite: '#FFFFFF',
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Segoe UI";
  font-weight: 400;
  src:local('Segoe UI'), url("./assets/SEGOEUI.TTF") format('ttf');
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
 height:100vh;
 font-family: "Segoe UI", Arial, sans-serif;
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
    fsBodyB1: '18px',
    fsBodyB2: '12px',

    fsHeadingH1: '26px',
    fsHeadingH5: '11px',

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
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
