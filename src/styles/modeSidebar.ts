import { css } from '@emotion/react';

import { darkContrastTextColor, lightTextColor } from './consts';

export const sidebarContainerStyle = (isOpen: boolean) => css({
  position: 'fixed',
  top: 66,
  marginTop: 20,
  right: isOpen ? 0 : -240,
  width: 240,
  height: 'fit-content',
  background: darkContrastTextColor,
  backdropFilter: 'blur(6px)',
  color: lightTextColor,
  padding: 10,
  transition: 'right 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
  borderRadius: '0 0 0 6px',
  // fontWeight: 300,
});

export const toggleButton = (color: string) => css({
  position: 'absolute',
  left: -30,
  top: 0,
  background: color,
  opacity: 0.8,
  border: 'none',
  borderRadius: '6px 0 0 6px',
  padding: 8,
  cursor: 'pointer',
});

export const textBlock = css({
  fontWeight: 300,
  padding: '5px 10px 20px 10px',
  '>span': {
    display: 'inline-block',
  },
  '>span:not(:first-of-type)': {
    marginTop: 8,
  },
});

export const themeModeButtonsContainerStyle = css({
  margin: '0 0 10px 10px',
});

export const themeModeButtonStyle = (active: boolean, borderColor: string, bgColor: string) => css({
  marginRight: '0.5rem',
  padding: '0.5rem 1rem',
  background: active ? bgColor : 'transparent',
  color: lightTextColor,
  border: 'none',
  borderRadius: 12,
  cursor: 'pointer',
});
