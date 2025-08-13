import { iconItemStyle, socialMediaIconListStyle, socialMediaStyle } from '../styles/socialMedia';
import EmailIcon from '../assets/icons/email.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';
import LinkedInIcon from '../assets/icons/linkedIn.svg?react';
import { CONTACT } from '../consts';
import { useTheme } from '@emotion/react';

export const SocialMedia = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <nav css={socialMediaStyle}>
      <ul css={socialMediaIconListStyle}>
        <li>
          <a href={CONTACT.GITHUB} target={'_blank'} rel="noreferrer">
            <GithubIcon css={iconItemStyle(theme)} viewBox='0 0 24 24' />
          </a>
        </li>
        <li>
          <a href={CONTACT.LINKED_IN} target={'_blank'} rel="noreferrer">
            <LinkedInIcon css={iconItemStyle(theme)} />
          </a>
        </li>
        <li>
          <a href={`mailto:${CONTACT.EMAIL}`}>
            <EmailIcon css={iconItemStyle(theme)} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
