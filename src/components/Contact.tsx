import { useTheme } from '@emotion/react';

import { contactSectionContentStyle, contactSectionStyle } from '../styles/contact';
import { sectionTitleStyle } from '../styles/shared';

export const ContactSection = () => {
  const onContactClick = () => window.location.href = 'mailto:maingard.alexa@gmail.com';
  const theme = useTheme();

  return (
    <section id='contact' css={contactSectionStyle}>
      <h2 css={sectionTitleStyle(theme)}>Contact</h2>
      <div css={contactSectionContentStyle(theme)}>
        I'm currently open to new opportunities and excited about the next challenge — whether it's building something meaningful or joining a great team.
        My inbox is always open, even if you just want to say hi!
        <button onClick={onContactClick}>
          Say hi
        </button>
      </div>
    </section>
  );
}