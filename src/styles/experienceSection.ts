import { css } from '@emotion/react';

import { contentText, darkContrastTextColor, lightTextColor, mainText } from './consts';
import { sectionSpacingStyle } from './shared';
import { mediaQueries as mq } from './mediaQueries';

const experienceCardStyle = css({
  backgroundColor: lightTextColor,
  padding: 20,
  borderRadius: 12,
  'h4, h5': {
    fontSize: mainText,
    fontWeight: 400,
  },
  fontSize: contentText,
});

export const experienceSectionStyle = css(sectionSpacingStyle, {
  display: 'flex',
  flexDirection: 'column',
  fontSize: mainText,
  fontWeight: 300,
});

export const experienceSectionContentStyle = css({
  paddingTop: 40,
  fontSize: mainText,
});

export const experienceSectionTechListStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: 80,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 6,
    backgroundColor: lightTextColor,
    transform: 'translateX(-50%)',
    zIndex: 0,
    borderRadius: 12,
    [mq.lt.l]: {
      left: 12,
    },
  },
  [mq.lt.l]: {
    gap: 40,
  },
  [mq.lt.s]: {
    gap: 30,
  },
});

export const experienceSectionTechItemStyle = (alignRight: boolean) => css({
  display: 'flex',
  justifyContent: alignRight ? 'flex-end' : 'flex-start',
  position: 'relative',
  width: '100%',
  color: 'black',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 25,
    height: 25,
    backgroundColor: lightTextColor,
    borderRadius: '50%',
    zIndex: 2,
    [mq.lt.l]: {
      left: -32.5,
      justifyContent: 'flex-start',
    },
  },
  [mq.lt.l]: {
    marginLeft: 46,
    width: 'auto',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 28,
    zIndex: 2,
    borderStyle: 'solid',
    transition: 'border-color 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    [mq.lt.l]: {
      left: 12,
    },
    ...(alignRight
      ? {
          left: 'calc(50% + 30px)',
          borderWidth: '10px 10px 10px 0',
          borderColor: `transparent ${lightTextColor} transparent transparent`,
        }
      : {
          right: 'calc(50% + 30px)',
          borderWidth: '10px 0 10px 10px',
          borderColor: `transparent transparent transparent ${lightTextColor}`,
        }),
    [mq.lt.l]: {
      left: -9.5,
      right: 'unset',
      borderWidth: '10px 10px 10px 0',
      borderColor: `transparent ${lightTextColor} transparent transparent`,
    },
  },
  '&[data-flipped="true"]::after': {
    ...(alignRight
      ? {
          borderColor: `transparent ${darkContrastTextColor} transparent transparent`,
        }
      : {
          borderColor: `transparent transparent transparent ${darkContrastTextColor}`,
        }),
    [mq.lt.l]: {
      borderColor: `transparent ${darkContrastTextColor} transparent transparent`,
    },
  },
});

export const experienceSectionTechItemCardWrapperStyle = css({
  width: '50%',
  [mq.lt.l]: {
    width: '100%',
  },
});

export const experienceSectionTechItemCardStyle = css(experienceCardStyle, {
  position: 'relative',
});

export const experienceSectionTechItemCardLocationStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  svg: {
    marginRight: 4,
    verticalAlign: 'text-bottom',
    width: 24,
    height: 24,
  },
});

export const experienceSectionTechItemCardResponsibilitiesListStyle = css({
  padding: '12px 0 0 20px',
  '>li': {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: -16,
      top: 12,
      width: 6,
      height: 6,
      backgroundColor: darkContrastTextColor,
      borderRadius: '50%',
      transform: 'translateY(-50%)',
    },
  },
});

// Flip styles
export const experienceSectionFlipCardContainerStyle = (alignRight: boolean) => css({
  perspective: 1000,
  // cursor: 'pointer',
  [mq.gt.m]: {
    padding: alignRight ? '0 0 0 40px' : '0 40px 0 0',
  },
});

export const experienceSectionFlipCardInnerStyle = (flipped: boolean) => css({
  position: 'relative',
  width: '100%',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
});

export const experienceSectionFlipCardFrontStyle = css({
  position: 'relative',
  width: '100%',
  backfaceVisibility: 'hidden',
  top: 0,
  left: 0,
});

export const experienceSectionFlipCardBackStyle = css({
  position: 'absolute',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  top: 0,
  left: 0,
  backgroundColor: darkContrastTextColor,
  color: lightTextColor,
  height: '-webkit-fill-available',
  width: 'inherit',
});

export const experienceSectionNonTechContentStyle = css({
  paddingBlock: 40,
  fontSize: mainText,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const experienceSectionNonTechListStyle = css({
  display: 'flex',
  gap: 20,
  flex: 1,
  width: '100%',
  [mq.lt.m]: {
    flexDirection: 'column',
  },
});

export const experienceSectionNonTechItemStyle = css(experienceCardStyle, {
  width: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  opacity: 0.9,
  color: 'black',
});
