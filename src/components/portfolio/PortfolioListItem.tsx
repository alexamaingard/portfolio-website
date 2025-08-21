import { useTheme } from '@emotion/react';

import { PortfolioItem } from '../../interfaces';
import {
  portfolioSectionProjectItemGithubIconStyle,
  portfolioSectionProjectItemImageStyle,
  portfolioSectionProjectItemImageWrapperStyle,
  portfolioSectionProjectItemInfoLinksContainerStyle,
  portfolioSectionProjectItemInfoStyle,
  portfolioSectionProjectItemInfoUrlStyle,
  portfolioSectionProjectItemStyle,
} from '../../styles/portfolioSection';
import GithubIcon from '../../assets/icons/github.svg?react';
import PlayIcon from '../../assets/icons/play.svg?react';

export const PortfolioListItem = ({
  name,
  description,
  objective,
  imageSrc,
  imageAlt,
  url,
  liveDemoUrl,
  // technologies,
  index,
}: PortfolioItem & { index: number }) => {
  const alignRight = !(index % 2);
  const theme = useTheme();

  return (
    <li css={portfolioSectionProjectItemStyle(alignRight)}>
      <div css={portfolioSectionProjectItemInfoStyle(theme)}>
        <h4>{name}</h4>
        <div>{description}</div>
        {objective && (
          <div>Objective: {objective}</div>
        )}
        <div css={portfolioSectionProjectItemInfoLinksContainerStyle}>
          <a href={url} target="_blank" rel="noreferrer" css={portfolioSectionProjectItemInfoUrlStyle}>
            <GithubIcon width={16} height={16} css={portfolioSectionProjectItemGithubIconStyle} />
            View code
          </a>
          {liveDemoUrl && (
            <a href={liveDemoUrl} target="_self" rel="noreferrer" css={portfolioSectionProjectItemInfoUrlStyle}>
              <PlayIcon width={16} height={16} />
              Live demo
            </a>
          )}
        </div>
      </div>
      <div css={portfolioSectionProjectItemImageWrapperStyle}>
        <img css={portfolioSectionProjectItemImageStyle} src={imageSrc} alt={imageAlt} />
      </div>
    </li>
  );
};
