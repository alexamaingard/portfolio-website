import { css } from '@emotion/react';

import { pageMarginStyle } from './shared';
import { darkBackgroundColor, lightTextColor } from './consts';

export const contactSectionStyle = css(pageMarginStyle, {
});

export const contactSectionContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  paddingBlock: 40,
  fontSize: 18,
  fontWeight: 300,
  '>button': {
    borderRadius: 12,
    color: lightTextColor,
    border: 'none',
    background: darkBackgroundColor,
    width: 'fit-content',
    padding: '8px 20px',
    cursor: 'pointer',
    // background: 'none',
  },
});
