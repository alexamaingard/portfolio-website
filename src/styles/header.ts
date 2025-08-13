import { css, Theme } from '@emotion/react';

import { lightTextColor } from './consts';
import { mediaQueries as mq } from './mediaQueries';

// @todo make responsive

export const headerStyle = (theme: Theme) => css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px 30px 15px 25px',
  top: 0,
  zIndex: 100,
  position: 'fixed',
  height: 'fit-content',
  width: '100%',
  backgroundColor: theme.darkBackgroundColor,
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

export const headerMenuListStyle = (theme: Theme) => css({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  fontSize: 16,
  fontWeight: 350,
  '>li': {
    display: 'flex',
    alignItems: 'flex-end',
    '>a:hover': {
      color: theme.accent,
    },
  },
  [mq.lt.s]: {
    display: 'none', // @todo remove and introduce mobile menu
  },
});
