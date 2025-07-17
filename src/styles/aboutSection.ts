import { css } from '@emotion/react';

import { pageMarginStyle, sectionSpacingStyle } from './shared';
import { darkBackgroundColor, mainText, title3, whiteTextColor } from './consts';

// @todo make responsive

export const aboutSectionStyle = css(pageMarginStyle, sectionSpacingStyle, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const aboutInfoStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  gap: 100, // @todo check
  svg: {
    width: 30,
    height: 30,
    marginInline: 4,
    verticalAlign: 'text-bottom',
  },
});

export const aboutInfoContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  fontSize: mainText,
  fontWeight: 300,
  maxWidth: 700, // @todo revise
  paddingBlock: 40,
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
  },
});

export const aboutSectionTechnologiesStyle = css({
  h3: {
    color: whiteTextColor,
    fontSize: title3,
    fontWeight: 300,
  },
});

export const aboutSectionTechListStyle = css({
  display: 'flex',
  gap: 20,
  paddingBlock: 30,
});

export const aboutSectionTechListItemStyle = css({
  position: 'relative',
  '>svg': {
    width: 80,
    height: 80,
    borderRadius: 16,
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  '&:hover': {
    '>span': {
      visibility: 'visible',
      opacity: 1,
    },
  },
});

export const aboutSectionTechItemTooltipStyle = css({
  visibility: 'hidden',
  backgroundColor: darkBackgroundColor,
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

// @media screen and (max-width: 1037px) {
//   .about-me-info {
//     flex-direction: column-reverse;
//   }
//   .about-info-left {
//     width: var(--page-content-width);
//   }
//   #display,
//   #display-pic {
//     display: none;
//   }
//   #no-display,
//   #no-display-pic {
//     display: flex;
//   }
// }

// @media screen and (max-width: 537px) {
//   #no-display,
//   #no-display-pic {
//     width: calc(var(--circle-size) * 0.9);
//     height: calc(var(--circle-size) * 0.9);
//   }
//   .tech-lists {
//     flex-direction: column;
//     gap: 0;
//   }
//   .about-info-left ul {
//     padding-top: 0;
//   }
// }

// @media screen and (max-width: 486px) {
//   #no-display,
//   #no-display-pic {
//     width: calc(var(--circle-size) * 0.8);
//     height: calc(var(--circle-size) * 0.8);
//   }
// }

// @media screen and (max-width: 440px) {
//   #no-display,
//   #no-display-pic {
//     width: calc(var(--circle-size) * 0.7);
//     height: calc(var(--circle-size) * 0.7);
//   }
// }

// @media screen and (max-width: 375px) {
//   #no-display,
//   #no-display-pic {
//     width: calc(var(--circle-size) * 0.6);
//     height: calc(var(--circle-size) * 0.6);
//   }
// }
