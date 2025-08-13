import { css, Theme } from '@emotion/react';

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

export const iconItemStyle = (theme: Theme) => css({
  width: 32,
  height: 32,
  minWidth: 24,
  fill: theme.iconBackground,
  transition: 'transform 0.3s ease',
  '&:hover': {
    fill: theme.highlight,
  },
});
