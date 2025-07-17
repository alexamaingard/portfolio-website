import { introPageDescriptionStyle, introPageInfoStyle, introPageStyle, letterWithCursorStyle } from '../styles/introPage';

export const IntroPage = () => {
  const nameLetters = 'Alexa Maingard'.split('');

  return (
    <section id="profile" css={introPageStyle}>
      <div css={introPageInfoStyle}>
          <h3>Hello, I'm</h3>
          <h1>
            {nameLetters.map((char, i) => (
              <span key={i} css={letterWithCursorStyle(i, nameLetters.length)}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h2>I create things that live on the internet.</h2>
          <div css={introPageDescriptionStyle}>
            Full-Stack Software Developer with a background in social media
            management, art and teaching. Currently searching for new and exciting
            opportunities.
          </div>
      </div>
    </section>
  );
};
