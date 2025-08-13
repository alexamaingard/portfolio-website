import { useTheme } from '@emotion/react';

import { introPageDescriptionStyle, introPageGreetingStyle, introPageInfoStyle, introPageMainTitleStyle, introPageStyle, introPageSubtitleStyle, letterWithCursorStyle } from '../styles/introPage';

export const IntroPage = () => {
  const nameLetters = 'Alexa Maingard'.split('');
  const theme = useTheme();

  return (
    <section id="profile" css={introPageStyle}>
      <div css={introPageInfoStyle}>
          <h3 css={introPageGreetingStyle(theme)}>Hello, I'm</h3>
          {/* <h1 css={introPageMainTitleStyle(theme)}>
            {nameLetters.map((char, i) => (
              <span key={i} css={letterWithCursorStyle(i, nameLetters.length)}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1> */}
          <h1 css={introPageMainTitleStyle(theme)}>
            {"Alexa Maingard".split(" ").map((word, wIndex, arr) => (
              <span key={wIndex} style={{ display: "inline-block" }}>
                {word.split("").map((char, i) => (
                  <span key={i} css={letterWithCursorStyle(i + wIndex * word.length, nameLetters.length)}>
                    {char}
                  </span>
                ))}
                {wIndex < arr.length - 1 && "\u00A0"}
              </span>
            ))}
          </h1>
          <h2 css={introPageSubtitleStyle(theme)}>
            I create things that live on the internet.
          </h2>
          <div css={introPageDescriptionStyle(theme)}>
            Full-Stack Software Developer with a background in social media
            management, art and teaching. Currently searching for new and exciting
            opportunities.
          </div>
      </div>
    </section>
  );
};
