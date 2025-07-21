import { headerLogoStyle, headerMenuListStyle, headerStyle } from '../styles/header';

export const Header = () => {
  return (
    <nav css={headerStyle}>
      <div css={headerLogoStyle}>
        <a href="#profile">Alexa Maingard</a>
      </div>
      <ul css={headerMenuListStyle}>
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
        {/* <li id='resume-button'>
            <a
                href='https://www.canva.com/design/DAE9kmsCHXE/5Dvu7wlsB-aU-YHn00Kf4A/view#1'
                target='_blank'
                rel="noreferrer"
                id='resume-link'
            >
                Resume
            </a>
        </li> */}
      </ul>
    </nav>
  );
};
