import { aboutInfoContentStyle, aboutInfoPersonalIntroStyle, aboutInfoStyle, aboutSectionPictureContainerStyle, aboutSectionStyle, aboutSectionTechItemTooltipStyle, aboutSectionTechListItemStyle, aboutSectionTechListStyle, aboutSectionTechnologiesStyle } from '../styles/aboutSection';
import { sectionTitleStyle } from '../styles/shared';
import { TECHNOLOGIES } from '../consts';
import BookIcon from '../assets/icons/book.svg?react';
import CoffeeIcon from '../assets/icons/coffeeMug.svg?react';
import DogIcon from '../assets/icons/dog.svg?react';
import GamingIcon from '../assets/icons/gaming.svg?react';
import PlantIcon from '../assets/icons/plant.svg?react';

export const AboutSection = () => (
  <section id="about-me" css={aboutSectionStyle}>
    <h2 css={sectionTitleStyle}>About me</h2>
    <div css={aboutInfoStyle}>
      <div css={aboutInfoContentStyle}>
        <div css={aboutInfoPersonalIntroStyle}>
          <div>
            Hi! I'm Alexa — bookworm, coffee enthusiast
            <CoffeeIcon />
            , and proud plant
            <PlantIcon />
            parent to over 60 thriving green beauties.
          </div>
          <div>
            When I'm not writing code, you'll find me lost in a good novel
            <BookIcon />
            , gaming
            <GamingIcon />
            , tending to my urban jungle, or singing. I also spend as much time as I can with my dog — the true MVP of my downtime
            <DogIcon />
            !
          </div>
          <div>
            I speak English and Spanish on a native level and German on a professional level.
          </div>
          <div>
            I am located in Graubünden, Switzerland and I'm currently looking for a new challenge in a team that values openness, collaboration and high-quality code.
          </div>
        </div>
      </div>
      <div css={aboutSectionPictureContainerStyle}>
        <img src='/images/lexy.jpg' alt="profile pic" />
      </div>
    </div>
    <div css={aboutSectionTechnologiesStyle}>
      <h3>Technologies</h3>
      <div>
        <ul css={aboutSectionTechListStyle}>
          {Object.entries(TECHNOLOGIES).map(([key, value]) => (
            <li key={key} css={aboutSectionTechListItemStyle}>
              {value.icon && value.icon}
              <span css={aboutSectionTechItemTooltipStyle}>{value.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
