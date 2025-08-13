// theme.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    background: string,
    text: string,
    darkText: string,
    lightText: string,
    accent: string,
    highlight: string,
    meshStroke: string,
    meshAnimation: string,
    backgroundLayer: string,
    iconBackground: string,
    introColor: string,
    descriptionColor: string,
    darkBackgroundColor: string,
    greetingColor: string,
  }
}
