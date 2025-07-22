import { ExperienceItem } from '../../interfaces';
import { experienceSectionNonTechItemStyle } from '../../styles/experienceSection';

export const NonTechExperienceCard = ({
  position,
  description,
}: ExperienceItem & { index: number }) => {
  return (
    <li css={experienceSectionNonTechItemStyle}>
      <h5>{position}</h5>
      {description}
    </li>
  );
};
