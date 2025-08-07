import { PortfolioItem } from '../../interfaces';
import {
  portfolioSectionProjectItemImageStyle,
  portfolioSectionProjectItemImageWrapperStyle,
  portfolioSectionProjectItemInfoStyle,
  portfolioSectionProjectItemInfoUrlStyle,
  portfolioSectionProjectItemStyle,
} from '../../styles/portfolioSection';
import GithubIcon from '../../assets/icons/github.svg?react';

export const PortfolioListItem = ({
  name,
  description,
  imageSrc,
  imageAlt,
  url,
  index,
}: PortfolioItem & { index: number }) => {
  const alignRight = !(index % 2);

  return (
    <li css={portfolioSectionProjectItemStyle(alignRight)}>
      <div css={portfolioSectionProjectItemInfoStyle}>
        <h4>{name}</h4>
        <div>{description}</div>
        <a href={url} target="_blank" rel="noreferrer" css={portfolioSectionProjectItemInfoUrlStyle}>
          <GithubIcon width={16} height={16} />
          View code
        </a>
      </div>
      <div css={portfolioSectionProjectItemImageWrapperStyle}>
        <img css={portfolioSectionProjectItemImageStyle} src={imageSrc} alt={imageAlt} />
      </div>
    </li>
  );
};
