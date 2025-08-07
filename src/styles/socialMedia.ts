import { css } from '@emotion/react';

import { darkContrastTextColor, whiteTextColor } from './consts';

// const socialMediaIconTransition = -49;

export const socialMediaStyle = css({
  position: 'fixed',
  left: 0,
  zIndex: 0,
  bottom: 54,
});

export const socialMediaIconListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  listStyle: 'none',
  padding: 10,
  gap: 10,
});

export const iconItemStyle = (level = 1) => css({
  width: 32,
  height: 32,
  minWidth: 24,
  fill: darkContrastTextColor,
  transition: 'transform 0.3s ease',
  '&:hover': {
    fill: whiteTextColor,
    // transition: `all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)`,
    // transform: `translateY(${socialMediaIconTransition * level}px)`, // check this transition and clickable area
  },
});
