import { useTheme } from '@emotion/react';

import {
  aboutInfoContentStyle,
  aboutInfoPersonalIntroHobbiesContainerStyle,
  aboutInfoPersonalIntroStyle,
  aboutInfoStyle,
  aboutSectionPictureContainerStyle,
  aboutSectionStyle,
  aboutSectionTechItemTooltipStyle,
  aboutSectionTechListContainerStyle,
  aboutSectionTechListItemStyle,
  aboutSectionTechListStyle,
} from '../styles/aboutSection';
import { sectionSubtitleStyle, sectionTitleStyle } from '../styles/shared';
import { TECHNOLOGIES } from '../consts';
import BookIcon from '../assets/icons/book.svg?react';
import CoffeeIcon from '../assets/icons/coffeeMug.svg?react';
import DogIcon from '../assets/icons/dog.svg?react';
import GamingIcon from '../assets/icons/gaming.svg?react';
import PlantIcon from '../assets/icons/plant.svg?react';

export const AboutSection = () => {
  const theme = useTheme();

  return (
    <section id="about-me" css={aboutSectionStyle}>
      <h2 css={sectionTitleStyle(theme)}>About me</h2>
      <div css={aboutInfoStyle(theme)}>
        <div css={aboutInfoContentStyle}>
          <div css={aboutInfoPersonalIntroStyle}>
            <div>
              Hi! I'm Alexa — bookworm, coffee enthusiast, and proud plant parent to over 60 thriving green beauties.
            </div>
            <div>
              When I'm not writing code, you'll find me lost in a good novel, gaming, tending to my urban jungle,
              or singing. I also spend as much time as I can with my dog — the true MVP of my downtime!
            </div>
            <div css={aboutInfoPersonalIntroHobbiesContainerStyle(theme)}>
              <CoffeeIcon />
              <PlantIcon />
              <BookIcon />
              <GamingIcon />
              <DogIcon />
            </div>
            <div>
              I speak English and Spanish on a native level and German on a professional level.
            </div>
            <div>
              I am located in Graubünden, Switzerland and I'm currently looking for a new challenge in a team that values openness,
              collaboration and high-quality code.
            </div>
          </div>
        </div>
        <div css={aboutSectionPictureContainerStyle}>
          <img src='/images/alexa.jpg' alt="profile pic" />
        </div>
      </div>
      <div css={aboutSectionTechListContainerStyle}>
        <h3 css={sectionSubtitleStyle}>Technologies</h3>
        <ul css={aboutSectionTechListStyle}>
          {Object.entries(TECHNOLOGIES).map(([key, value]) => (
            <li key={key} css={aboutSectionTechListItemStyle}>
              {value.icon && value.icon}
              <span css={aboutSectionTechItemTooltipStyle(theme)}>{value.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
