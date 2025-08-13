import { css, Theme } from '@emotion/react';

import { subtitle, title2, whiteTextColor } from './consts';
import { mediaQueries as mq } from './mediaQueries';

export const pageMarginStyle = css({
  paddingInline: 280,
  width: '100%',
  [mq.lt.l]: {
    paddingInline: 200,
  },
  [mq.lt.l]: {
    paddingInline: 180,
  },
  [mq.lt.m]: {
    paddingInline: 120,
  },
  [mq.lt.s]: {
    paddingInline: 60,
  },
});

export const sectionSpacingStyle = css({
  paddingBlock: 100,
  maxWidth: 1168,
  [mq.lt.l]: {
  },
  [mq.lt.m]: {
    paddingBlock: 60,
  },
  [mq.lt.s]: {
  },
});

export const title2Style = css({
  fontSize: title2,
  [mq.m]: {
    fontSize: 35,
  },
  [mq.s]: {
    fontSize: 30,
  },
  [mq.lt.s]: {
    fontSize: 28,
  },
});

export const sectionTitleStyle = (theme: Theme) => css(title2Style, {
  borderLeft: `1px solid ${theme.highlight}`,
  borderTop: `1px solid ${theme.highlight}`,
  color: theme.highlight,
  padding: 20,
  fontWeight: 500,
  width: '100%',
});

export const sectionSubtitleStyle = css({
  color: whiteTextColor,
  fontSize: subtitle,
  fontWeight: 300,
});

export const descriptionStyle = css({
  fontSize: 18,
  fontWeight: 300,
  [mq.lt.m]: {
    fontSize: 16,
  },
});