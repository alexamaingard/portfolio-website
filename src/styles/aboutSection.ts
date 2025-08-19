import { css, Theme } from '@emotion/react';

import { descriptionStyle, sectionSpacingStyle } from './shared';
import { darkBackgroundColor, whiteTextColor } from './consts';
import { mediaQueries as mq } from './mediaQueries';

// @todo make responsive

export const aboutSectionStyle = css(sectionSpacingStyle, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const aboutInfoStyle = (theme: Theme) => css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  color: theme.descriptionColor,
  gap: 100, // @todo check
  svg: {
    width: 30,
    height: 30,
    marginInline: 4,
    verticalAlign: 'text-bottom',
  },
  [mq.lt.l]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: 0,
  },
});

export const aboutInfoContentStyle = css(descriptionStyle, {
  display: 'flex',
  flexDirection: 'column',
  // fontSize: 18,
  // fontWeight: 300,
  paddingBlock: 40,
  [mq.gt.l]: {
    maxWidth: 700,
  },
  [mq.lt.l]: {
    paddingBlock: 30,
  },
});

export const aboutInfoPersonalIntroStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const aboutSectionPictureContainerStyle = css({
  borderRadius: '50%',
  width: 300,
  height: 300,
  border: `2px solid ${whiteTextColor}`,
  flexShrink: 0,
  '>img': {
    borderRadius: '50%',
    margin: '-20px 0 0 -20px',
    width: 300,
    height: 300,
    objectFit: 'cover',
    [mq.l]: {
      width: 250,
      height: 250,
      margin: '-15px 0 0 -15px',
    },
    [mq.lt.l]: {
      width: 200,
      height: 200,
      margin: '-15px 0 0 -15px',
    },
  },
  [mq.l]: {
    width: 250,
    height: 250,
  },
  [mq.lt.l]: {
    width: 200,
    height: 200,
  },
});

export const aboutInfoPersonalIntroHobbiesContainerStyle = (theme: Theme) => css({
  display: 'flex',
  width: '100%',
  [mq.lt.l]: {
    justifyContent: 'center',
  },
  '>svg:not(:last-of-type)': {
    path: {
      fill: theme.descriptionColor,
    }
  },
  '>svg:last-of-type, >svg:first-of-type': {
    path: {
      stroke: theme.descriptionColor,
    }
  },
});

export const aboutSectionTechListContainerStyle = css({
  width: '100%',
});

export const aboutSectionTechListStyle = css({
  display: 'flex',
  paddingBlock: 30,
  gap: 18,
  flexWrap: 'wrap',
  [mq.lt.l]: {

  },
});

export const aboutSectionTechListItemStyle = css({
  position: 'relative',
  flex: '0 0 auto',
  '>svg': {
    width: 70,
    height: 70,
    borderRadius: 16,
    '&:hover': {
      transform: 'scale(1.2)',
    },
    [mq.lt.l]: {
      width: 60,
      height: 60,
    },
    [mq.s]: {
      width: 50,
      height: 50,
    },
    [mq.lt.s]: {
      width: 40,
      height: 40,
    },
  },
  '&:hover': {
    '>span': {
      visibility: 'visible',
      opacity: 1,
    },
  },
});

export const aboutSectionTechItemTooltipStyle = (theme: Theme) => css({
  visibility: 'hidden',
  backgroundColor: theme.darkBackgroundColor,
  color: '#fff',
  textAlign: 'center',
  borderRadius: 4,
  padding: '4px 8px',
  fontSize: '0.75rem',
  position: 'absolute',
  zIndex: 1,
  bottom: '-45px',
  left: '50%',
  transform: 'translateX(-50%)',
  whiteSpace: 'nowrap',
  opacity: 0,
  transition: 'opacity 0.2s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: `transparent transparent ${darkBackgroundColor} transparent`,
  }
})
