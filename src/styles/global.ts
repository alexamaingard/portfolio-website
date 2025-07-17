import { css } from '@emotion/react';

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


// @todo use constants here too
export const globalStyle = css(`
  :root {
    --background: #8892b0;
    --scrollbar-thumb: #646f8f;
    --custom-cyan: rgb(136, 255, 255);
    --custom-cyan-low-op: rgb(136, 255, 255, 0.1);
    --page-gap: 150px;
    --inner-page-gap: 20px;
    --page-content-width: 55vw;
    --h2-font-size: 2.4rem;
    --h2-font-weigth: 500;
    --p-font-size: 1.2rem;
    --image-offset: -0.75rem;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: var(--background);
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