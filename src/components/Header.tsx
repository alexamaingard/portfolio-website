import { useTheme } from '@emotion/react';

import { headerLogoStyle, headerMenuListStyle, headerStyle } from '../styles/header';

export const Header = () => {
  const theme = useTheme();

  return (
    <nav css={headerStyle}>
      <div css={headerLogoStyle}>
        <a href="#profile">Alexa Maingard</a>
      </div>
      <ul css={headerMenuListStyle(theme)}>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
