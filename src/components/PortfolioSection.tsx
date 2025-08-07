import { PORTFOLIO_PROJECTS } from '../consts';
import { portfolioSectionProjectsListStyle, portfolioSectionStyle } from '../styles/portfolioSection';
import { sectionTitleStyle } from '../styles/shared';
import { PortfolioListItem } from './portfolio/PortfolioListItem';

export const PortfolioSection = () => {
  return (
    <section id='portfolio' css={portfolioSectionStyle}>
      <h2 css={sectionTitleStyle}>Some things I've built</h2>
      <ul css={portfolioSectionProjectsListStyle}>
        {PORTFOLIO_PROJECTS.map((item, index) => (
          <PortfolioListItem key={item.name} index={index} {...item} />
        ))}
      </ul>
    </section>
  );
}
