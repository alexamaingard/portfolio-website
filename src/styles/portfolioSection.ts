import { css } from '@emotion/react';

import { lightTextColor, mainText } from './consts';

export const portfolioSectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const portfolioSectionProjectsListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: '40px 100px',
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
});

export const portfolioSectionProjectItemInfoStyle = css({
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
  fontSize: 16,
});

export const portfolioSectionProjectItemInfoUrlStyle = css({
  textDecoration: 'none',
  color: lightTextColor,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  '>svg': {
    fill: lightTextColor,
  },
});

const portfolioImageSize = css({
  width: 450,
  height: 250,
  borderRadius: 4,
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
  }
});

export const portfolioSectionProjectItemImageStyle = css(portfolioImageSize, {
  position: 'relative',
  display: 'block',
  zIndex: 1,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
});
