import { NON_TECH_EXPERIENCE, TECH_EXPERIENCE } from '../consts';
import {
  experienceSectionStyle,
  experienceSectionContentStyle,
  experienceSectionTechListStyle,
  experienceSectionNonTechContentStyle,
  experienceSectionNonTechListStyle,
} from '../styles/experienceSection';
import { sectionSubtitleStyle, sectionTitleStyle } from '../styles/shared';
import { NonTechExperienceCard } from './experience/NonTechExperienceCard';
import { TechExperienceCard } from './experience/TechExperienceCard';

export const ExperienceSection = () => {
  return (
    <section id="experience" css={experienceSectionStyle}>
      <h2 css={sectionTitleStyle}>Experience</h2>
      <div css={experienceSectionContentStyle}>
        <ul css={experienceSectionTechListStyle}>
          {Object.entries(TECH_EXPERIENCE).map(([key, value], index) => (
            <TechExperienceCard key={key} index={index} {...value} />
          ))}
        </ul>
        <div css={experienceSectionNonTechContentStyle}>
          <h3 css={sectionSubtitleStyle}>Non-tech experience</h3>
          <ul css={experienceSectionNonTechListStyle}>
            {Object.entries(NON_TECH_EXPERIENCE).map(([key, value], index) => (
              <NonTechExperienceCard key={key} index={index} {...value} />
            ))}
          </ul>
        </div>
      </div>
      {/* @todo consider adding testimonial quotes */}
    </section>
  );
};
