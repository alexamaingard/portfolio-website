import { css } from '@emotion/react';

export const playfulBackground = css`
  body::before {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(1.5 * max(100vw, 100vh));
    height: calc(1.5 * max(100vw, 100vh));
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"><path d="M0 10 Q10 5 20 10 T40 10" /><path d="M0 30 Q10 35 20 30 T40 30" /><path d="M10 0 Q15 10 10 20 T10 40" /><path d="M30 0 Q25 10 30 20 T30 40" /></svg>');
    background-repeat: repeat;
    background-size: 40px 40px;
    transform: translate(-50%, -50%) rotate(45deg);
    pointer-events: none;
    z-index: -1;
    animation: drift 60s linear infinite;
  }
`;

export const calmBackground = css`
  body::before {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(1.5 * max(100vw, 100vh));
    height: calc(1.5 * max(100vw, 100vh));
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"><circle cx="30" cy="30" r="28" /><circle cx="30" cy="30" r="20" /><circle cx="30" cy="30" r="12" /></svg>');
    background-repeat: repeat;
    background-size: 60px 60px;
    transform: translate(-50%, -50%) rotate(0deg);
    pointer-events: none;
    z-index: -1;
    /* Calm mode: no animation or very subtle slow animation */
    animation: none;
  }
`;
