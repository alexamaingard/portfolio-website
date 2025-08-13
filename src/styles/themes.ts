import { darkBackgroundColor, darkContrastTextColor, lightTextColor } from './consts';

export const calmTheme = {
  background: '#94a0bf',
  text: '#f3f4f6',
  darkText: darkContrastTextColor,
  lightText: '#f3f4f6',
  accent: '#a7d8d8',
  highlight: lightTextColor,
  meshStroke: 'rgba(255,255,255,0.05)',
  meshAnimation: 'none',
  backgroundLayer: 'calm-waves', // NEW
  iconBackground: darkContrastTextColor,
  introColor: darkContrastTextColor,
  descriptionColor: 'black',
  darkBackgroundColor: darkBackgroundColor,
  greetingColor: darkContrastTextColor,
};

export const playfulTheme = {
  background: '#1b1f3a',
  text: '#ffffff',
  accent: '#88ffff',
  highlight: '#ff4f9d',
  meshStroke: 'rgba(255,255,255,0.15)',
  meshAnimation: 'drift 20s linear infinite',
  backgroundLayer: 'playful-bubbles', // NEW
  iconBackground: lightTextColor,
  introColor: lightTextColor,
  descriptionColor: lightTextColor,
  darkBackgroundColor: '#3c4a72',
  greetingColor: lightTextColor,
};
