import { css, Theme } from '@emotion/react';

import { lightTextColor } from './consts';
import { mediaQueries as mq } from './mediaQueries';

export const contactSectionContentStyle = (theme: Theme) => css({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  paddingBlock: 40,
  fontSize: 18,
  color: theme.descriptionColor,
  fontWeight: 300,
  '>button': {
    borderRadius: 12,
    color: lightTextColor,
    border: 'none',
    background: theme.darkBackgroundColor,
    width: 'fit-content',
    padding: '8px 20px',
    cursor: 'pointer',
  },
  [mq.lt.s]: {
    fontSize: 16,
  },
});
