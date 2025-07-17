import { iconItemStyle, socialMediaIconListStyle, socialMediaStyle } from '../styles/socialMedia';
import EmailIcon from '../assets/icons/email.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';
import LinkedInIcon from '../assets/icons/linkedIn.svg?react';
import { CONTACT } from '../consts';

export const SocialMedia = () => {
  return (
    <nav css={socialMediaStyle}>
      <ul css={socialMediaIconListStyle}>
        <li>
          <a href={CONTACT.GITHUB} target={'_blank'} rel="noreferrer">
            <GithubIcon css={iconItemStyle()} viewBox='0 0 24 24' />
          </a>
        </li>
        <li>
          <a href={CONTACT.LINKED_IN} target={'_blank'} rel="noreferrer">
            <LinkedInIcon css={iconItemStyle(2)} />
          </a>
        </li>
        <li>
          <a href={`mailto:${CONTACT.EMAIL}`}>
            <EmailIcon css={iconItemStyle(3)} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
