import { css, keyframes, Theme } from '@emotion/react';

import { subtitle, title1, title2, title3, whiteTextColor } from './consts';
import { mediaQueries as mq, smallSmartphoneMediaQuery } from './mediaQueries';
import { sectionSpacingStyle, title2Style } from './shared';

export const introPageStyle = css(sectionSpacingStyle, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  minHeight: 600,
  [mq.lt.s]: {
    paddingTop: 100,
  },
});

export const introPageInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',
  color: whiteTextColor,
  [smallSmartphoneMediaQuery]: {
    gap: 8,
  },
});

export const introPageMainTitleStyle = (theme: Theme) => css({
  fontSize: title1,
  fontWeight: 600,
  whiteSpace: 'normal',
  wordBreak: 'keep-all',
  color: theme.highlight,
  'h1 span': {
    whiteSpace: 'nowrap',
  },
  [mq.lt.l]: {
    fontWeight: 500,
  },
  [mq.m]: {
    fontSize: 70,
  },
  [mq.lt.m]: {
    whiteSpace: 'normal',
    wordBreak: 'keep-all',
    span: {
      display: 'inline-block',
    },
  },
  [mq.s]: {
    fontSize: 60,
  },
  [mq.lt.s]: {
    fontSize: 55,
  },
  [smallSmartphoneMediaQuery]: {
    fontSize: 48,
  },
});

export const introPageSubtitleStyle = (theme: Theme) => css(title2Style, {
  fontSize: title2,
  fontWeight: 600,
  color: theme.greetingColor,
  [smallSmartphoneMediaQuery]: {
    fontSize: 20,
  },
});

export const introPageGreetingStyle = (theme: Theme) => css({
  fontSize: title3,
  fontWeight: 300,
  color: theme.greetingColor,
  [mq.lt.l]: {
  },
  [mq.m]: {
    fontSize: 28,
  },
  [mq.s]: {
    fontSize: 22,
  },
  [mq.lt.s]: {
    fontSize: 20,
  },
  [smallSmartphoneMediaQuery]: {
    fontSize: 18,
  },
});

export const introPageDescriptionStyle = (theme: Theme) => css({
  fontSize: subtitle,
  fontWeight: 300,
  color: theme.introColor,
  [mq.m]: {
    fontSize: 20,
  },
  [mq.lt.m]: {
    fontSize: 18,
  },
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
