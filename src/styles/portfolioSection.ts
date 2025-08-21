import { css, Theme } from '@emotion/react';

import { lightTextColor, mainText } from './consts';
import { sectionSpacingStyle } from './shared';
import { mediaQueries as mq } from './mediaQueries';

export const portfolioSectionStyle = css(sectionSpacingStyle, {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const portfolioSectionProjectsListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: '40px 100px',
  [mq.lt.m]: {
    paddingBlock: '40px 0',
  },
});

export const portfolioSectionProjectItemStyle = (alignRight: boolean) => css({
  display: 'flex',
  flex: '2 1 0',
  flexDirection: alignRight ? 'row' : 'row-reverse',
  // width: '100%',
  // justifyContent: alignRight ? 'flex-end' : 'flex-start',
  justifyContent: 'space-between',
  gap: 40,
  margin: alignRight ? '0 20px 0 0' : '0 0 0 20px',
  paddingBlock: 40,
  [mq.lt.l]: {
    flexDirection: 'column-reverse',
    marginLeft: 0,
  },
});

export const portfolioSectionProjectItemInfoStyle = (theme: Theme) => css({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: 10,
  maxWidth: 600, // @todo modify
  h4: {
    fontSize: mainText,
    fontWeight: 400,
    color: lightTextColor,
  },
  color: theme.descriptionColor,
  fontSize: 16,
  fontWeight: 300,
  [mq.l]: {
    maxWidth: 500,
  },
  [mq.lt.l]: {
    maxWidth: 'unset',
  },
});

export const portfolioSectionProjectItemInfoLinksContainerStyle = css({
  display: 'flex',
  gap: 20,
});

export const portfolioSectionProjectItemInfoUrlStyle = css({
  textDecoration: 'none',
  color: lightTextColor,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
});

export const portfolioSectionProjectItemGithubIconStyle = css({
  fill: lightTextColor,
});

const portfolioImageSize = css({
  width: 450,
  minWidth: 450,
  height: 250,
  borderRadius: 4,
  [mq.l]: {
    width: 350,
    minWidth: 350,
    height: 210,
  },
  [mq.lt.l]: {
    width: 270,
    minWidth: 270,
    height: 175,
  },
  [mq.lt.m]: {
    width: 270,
    minWidth: 270,
    height: 175,
  },
  [mq.lt.xs]: {
    width: 240,
    minWidth: 240,
    height: 160,
  },
});

const imageFrameOffset = -20;

export const portfolioSectionProjectItemImageWrapperStyle = css({
  position: 'relative',
  display: 'inline-block',
  '&::before, &::after': css(portfolioImageSize, {
    content: '""',
    position: 'absolute',
    border: `1px solid ${lightTextColor}`,
    zIndex: 0,
  }),
  '&::before': {
    top: imageFrameOffset,
    left: imageFrameOffset,
  },
  '&::after': {
    bottom: imageFrameOffset,
    right: imageFrameOffset,
    [mq.lt.l]: {
      right: 'unset',
      left: -imageFrameOffset,
    },
  },
  [mq.lt.l]: {
    marginLeft: 24,
  },
});

export const portfolioSectionProjectItemImageStyle = css(portfolioImageSize, {
  position: 'relative',
  display: 'block',
  zIndex: 1,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
});
