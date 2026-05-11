import { useTheme } from '@emotion/react';

import { contactSectionContentStyle } from '../styles/contact';
import { sectionSpacingStyle, sectionTitleStyle } from '../styles/shared';

export const ContactSection = () => {
  const onContactClick = () => window.location.href = 'mailto:maingard.alexa@gmail.com';
  const theme = useTheme();

  return (
    <section id='contact' css={sectionSpacingStyle}>
      <h2 css={sectionTitleStyle(theme)}>Contact</h2>
      <div css={contactSectionContentStyle(theme)}>
        My inbox is always open, even if you just want to say hi!
        <button onClick={onContactClick}>
          Say hi
        </button>
      </div>
    </section>
  );
}
