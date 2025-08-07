import { css, keyframes } from '@emotion/react';

import { darkContrastTextColor, subtitle, title1, title2, title3, whiteTextColor } from './consts';

export const introPageStyle = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const introPageInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',
  color: whiteTextColor,
  h1: {
    fontSize: title1,
    fontWeight: 600,
  },
  h2: {
    fontSize: title2,
    fontWeight: 600,
    color: darkContrastTextColor,
    // textDecoration: `4px ${darkContrastTextColor} underline`,
    // textUnderlineOffset: 10,
  },
  h3: {
    fontSize: title3,
    fontWeight: 300,
  },
});

export const introPageDescriptionStyle = css({
  fontSize: subtitle,
  fontWeight: 300,
  color: 'black',
});

// Letter fade-in (typing)
const typeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Cursor blink
const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const letterWithCursorStyle = (i: number, total: number) => css`
  display: inline-block;
  opacity: 0;
  position: relative;
  animation: ${typeIn} 0.3s ease forwards;
  animation-delay: ${i * 0.15}s;

  &::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 0;
    width: 2px;
    height: 1.1em;
    background: white;
    opacity: 0;
    animation: ${blink} ${i === total - 1 ? '1s' : '0.3s'} step-end;
    animation-delay: ${i * 0.15}s;
    animation-fill-mode: forwards;
    animation-iteration-count: ${i === total - 1 ? 3 : 1};
  }
`;

// export const letterWithCursorStyle = (i: number, total: number) => css({
//   display: 'inline-block',
//   opacity: 0,
//   position: 'relative',
//   animation: `${typeIn} 0.3s ease forwards`,
//   animationDelay: `${i * 0.15}s`,
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     right: -2,
//     top: 0,
//     width: 2,
//     height: '1.1em',
//     background: whiteTextColor,
//     opacity: 0,
//     animation: `${blink} ${i === total - 1 ? '1s' : '0.3s'} step-end`,
//     animationDelaY: `${i * 0.15}s`,
//     animationFillMode: 'forwards',
//     animationIterationCount: i === total - 1 ? 3 : 1,
//   },
// });

// @media screen and (max-width: 520px) {
//   .profile-info {
//     width: 36ch;
//   }
// }
