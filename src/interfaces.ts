type CountryCode = 'CH' | 'AUT' | 'AR';

export interface BaseExperienceItem {
  position: string,
}

export interface TechExperienceItem extends BaseExperienceItem {
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  countryCode: CountryCode,
  periodComment?: string,
  responsibilities: string[],
  technologies: string,
};

export interface ExperienceItem extends BaseExperienceItem {
  description: string,
}
