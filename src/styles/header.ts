import { css } from '@emotion/react';

import { darkBackgroundColor, lightContrastTextColor, lightTextColor } from './consts';

// @todo make responsive

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px 30px 15px 25px',
  top: 0,
  zIndex: 100,
  position: 'fixed',
  height: 'fit-content',
  width: '100vw',
  backgroundColor: darkBackgroundColor,
  fontWeight: 300,
  a: {
    textDecoration: 'none',
    color: lightTextColor,
  },
});

export const headerLogoStyle = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: 24,
});

export const headerMenuListStyle = css({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  fontSize: 16,
  fontWeight: 350,
  '>li': {
    display: 'flex',
    alignItems: 'flex-end',
    '>a:hover': {
      color: lightContrastTextColor, // @todo fix color ?
    },
  },
});
