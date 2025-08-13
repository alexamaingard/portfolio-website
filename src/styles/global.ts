import { css, Theme } from '@emotion/react';

export const globalResetStyle = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul,
  ol {
    list-style: none;
    padding-left: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;


// @todo use constants here too and remove unused
export const globalStyle = css(`
  :root {
    --background: #8892b0;
    --scrollbar-thumb: #646f8f;
    --custom-cyan: rgb(136, 255, 255);
    --custom-cyan-low-op: rgb(136, 255, 255, 0.1);
    --page-gap: 150px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: var(--background);
    min-height: 100vh;
    position: relative;
  }



  html {
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar { // check
    width: 0.6rem;
    background-color: #55607b;
    display: none;
  }

  body::-webkit-scrollbar-thumb { // check
    display: none;
    background-color: #e6f4f1;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`);

export const globalStyleBase = (theme: Theme, loaded: boolean) => css`
  :root {
    --page-gap: 150px;
  }

  /* Calm waves animation */
  @keyframes waveMove {
    0% { background-position-x: 0; }
    100% { background-position-x: 1000px; }
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: ${theme.background};
    color: ${theme.text};
    min-height: 100vh;
    position: relative;
    transition: ${loaded ? 'background-color 0.5s ease, color 0.5s ease' : 'none'};
  }

  /* Mode-specific background layers */
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;

  ${theme.backgroundLayer === 'calm-waves' &&
    css`
      background:
        linear-gradient(to bottom, rgba(255,255,255,0.05) 20%, transparent 80%),
        url('data:image/svg+xml;utf8,<svg width="1440" height="363" xmlns="http://www.w3.org/2000/svg"><path fill="%23a7d8d8" fill-opacity="0.15" d="M0,160L48,181.3C96,203,192,245,288,266.7C384,288,480,288,576,256C672,224,768,160,864,144C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"></path></svg>');
      background-position: left bottom;
      background-repeat: repeat-x;
      background-size: 100% auto;
    `}
  }

  html {
    scroll-behavior: smooth;
  }
`;
