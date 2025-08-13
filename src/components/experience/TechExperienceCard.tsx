import { useState } from 'react';

import { COUNTRIES } from '../../consts';
import {
  experienceSectionFlipCardBackStyle,
  experienceSectionFlipCardContainerStyle,
  experienceSectionFlipCardFrontStyle,
  experienceSectionFlipCardInnerStyle,
  experienceSectionTechItemCardLocationStyle,
  experienceSectionTechItemCardResponsibilitiesListStyle,
  experienceSectionTechItemCardStyle,
  experienceSectionTechItemCardWrapperStyle,
  experienceSectionTechItemStyle,
} from '../../styles/experienceSection';
import { formatToMonthYear, _ } from '../../utils';
import { TechExperienceItem } from '../../interfaces';

export const TechExperienceCard = ({
  position,
  company,
  location,
  countryCode,
  startDate,
  endDate,
  periodComment,
  responsibilities,
  index,
}: TechExperienceItem & { index: number }) => {
  const [isFlipped] = useState(false);
  const alignRight = !(index % 2);

  return (
    <li css={experienceSectionTechItemStyle(alignRight)} data-flipped={isFlipped}>
      <div css={experienceSectionTechItemCardWrapperStyle}>
        <div
          css={experienceSectionFlipCardContainerStyle(alignRight)}
          // onClick={() => setIsFlipped(!isFlipped)}
          role="button"
          tabIndex={0}
          // onKeyDown={(e) => {
          //   if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped);
          // }}
          aria-pressed={isFlipped}
        >
          <div css={experienceSectionFlipCardInnerStyle(isFlipped)}>
            {/* @todo evaluate if i want to render both sides always or depending on if its flipped */}
            {/* Front side */}
            <div css={[experienceSectionTechItemCardStyle, experienceSectionFlipCardFrontStyle]}>
              <h4>{position} - {company}</h4>
              <div css={experienceSectionTechItemCardLocationStyle}>
                <span>
                  {COUNTRIES[countryCode].flag}
                  {location}
                </span>
                <span>
                  {formatToMonthYear(startDate as string)} - {formatToMonthYear(endDate as string) || _('Ongoing')}
                  {periodComment && ` (${periodComment})`}
                </span>
              </div>
              {/* @todo add description if needed */}
              <ul css={experienceSectionTechItemCardResponsibilitiesListStyle}>
                {responsibilities.map((item: string, idx: number) => (
                  <li key={`${company}-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Back side */}
            <div css={[experienceSectionTechItemCardStyle, experienceSectionFlipCardBackStyle]}>
              <h4>More about {company}</h4>
              {/* <div>Additional company details, or recommendations can go here.</div> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
