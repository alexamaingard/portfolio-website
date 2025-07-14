import { css } from '@emotion/react';

import { backgroundColor } from './consts';

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 30px 0 25px',
  top: 0,
  zIndex: 100,
  position: 'fixed',
  height: 'fit-content',
  width: '100vw',
  backgroundColor: backgroundColor,
  fontWeight: 300,
  a: {
    textDecoration: 'none',
    color: 'white',
  },
});

export const headerLogoStyle = css({
  display: 'flex',
  justifyContent: 'center',
  fontSize: 24,
  // width: 'fit-content',
});

export const headerMenuListStyle = css({
//   width: fit-content;
//   padding-left: 0;
//   padding-right: 0;
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   color: white;
//   font-weight: 300;
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
  color: 'white',
  fontSize: 16,
  '>li': {
    display: 'flex',
    alignItems: 'flex-end',
    '>a:hover': {
      fontWeight: 450,
      color: 'black',
      // color: var(--custom-cyan);
      // textDecoration: '1px solid underline',
      // textUnderlineOffset: 12,
    },
  },
});

// #header-left a {
//   border: 1px solid white;
//   height: fit-content;
//   padding: 5px 10px;
//   border-radius: 5px;
// }

// .header ul a:hover {
//   color: var(--custom-cyan);
//   text-decoration: 1px solid underline;
//   text-underline-offset: 12px;
// }

// #resume-button {
//   border: 1px solid var(--custom-cyan);
//   border-radius: 5px;
//   height: fit-content;
//   color: var(--custom-cyan);
// }

// #resume-button:hover {
//   background-color: var(--custom-cyan-low-op);
//   color: var(--custom-cyan);
// }

// #resume-link:hover {
//   text-decoration: none;
// }
