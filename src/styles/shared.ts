import { css } from '@emotion/react';

import { lightTextColor, title2 } from './consts';

export const pageMarginStyle = css({
  paddingInline: 140,
});

export const sectionSpacingStyle = css({
  paddingBlock: 100,
});

export const sectionTitleStyle = css({
  borderLeft: `1px solid ${lightTextColor}`,
  borderTop: `1px solid ${lightTextColor}`,
  color: lightTextColor,
  padding: 20,
  fontSize: title2,
  fontWeight: 500,
  width: '100%',
});
