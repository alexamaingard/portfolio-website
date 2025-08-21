import CSSIcon from './assets/icons/css.svg?react';
import DjangoIcon from './assets/icons/django.svg?react';
import ExpressIcon from './assets/icons/expressjs.svg?react';
import HTMLIcon from './assets/icons/html.svg?react';
import JavascriptIcon from './assets/icons/javascript.svg?react';
import NodeJsIcon from './assets/icons/nodejs.svg?react';
import PostgreSQLIcon from './assets/icons/postgresql.svg?react';
import PrismaIcon from './assets/icons/prisma.svg?react';
import PythonIcon from './assets/icons/python.svg?react';
import ReactIcon from './assets/icons/react.svg?react';
import StorybookIcon from './assets/icons/storybook.svg?react';
import TypescriptIcon from './assets/icons/typescript.svg?react';
import SwissFlag from './assets/icons/switzerland.svg?react';
import AustrianFlag from './assets/icons/austria.svg?react';
import ArgentinianFlag from './assets/icons/argentina.svg?react';
import { _ } from './utils';
import { ExperienceItem, PortfolioItem, TechExperienceItem } from './interfaces';

export const CONTACT = {
  LINKED_IN: 'https://www.linkedin.com/in/alexa-marie-eliane-maingard',
  EMAIL: 'maingard.alexa@gmail.com',
  GITHUB: 'https://github.com/alexamaingard',
}

export const COUNTRIES = {
  CH: {
    name: _('Switzerland'),
    flag: <SwissFlag />,
  },
  AUT: {
    name: _('Austria'),
    flag: <AustrianFlag />,
  },
  AR: {
    name: _('Argentina'),
    flag: <ArgentinianFlag />,
  },
}

export const TECHNOLOGIES = {
  TYPESCRIPT: {
    label: 'Typescript',
    icon: <TypescriptIcon />,
  },
  REACT: {
    label: 'React.js',
    icon: <ReactIcon />,
  },
  NODE_JS: {
    label: 'Node.js',
    icon: <NodeJsIcon />, // @todo consider adding a BG
  },
  JAVASCRIPT: {
    label: 'Javascript (ES6)',
    icon: <JavascriptIcon />,
  },
  STORYBOOK: {
    label: 'Storybook',
    icon: <StorybookIcon />,
  },
  HTML: {
    label: 'HTML',
    icon: <HTMLIcon />,
  },
  CSS: {
    label: 'CSS',
    icon: <CSSIcon />,
  },
  EXPRESS: {
    label: 'Express.js',
    icon: <ExpressIcon />,
  },
  PRISMA: {
    label: 'Prisma ORM',
    icon: <PrismaIcon />,
  },
  PYTHON: {
    label: 'Python',
    icon: <PythonIcon />,
  },
  DJANGO: {
    label: 'Django',
    icon: <DjangoIcon />,
  },
  POSTGRES_SQL: {
    label: 'PostgreSQL',
    icon: <PostgreSQLIcon />,
  },
};

export const TECH_EXPERIENCE: Record<string, TechExperienceItem> = {
  ESAVE: {
    position: 'Full-Stack Software Developer',
    company: 'esave ag',
    location: 'Chur, Graubünden',
    countryCode: 'CH',
    startDate: '2024-12-01',
    endDate: '2025-02-28',
    periodComment: '3-months-long fixed contract',
    responsibilities: [
      'Backend-API development and technical documentation',
      'API Integration',
    ],
    technologies: 'TypeScript, NestJS, SQL, NodeJS, MariaDB, proto3, Swagger, Angular',
  },
  TRUSTWISE: {
    position: 'Software Developer',
    company: 'trustwise.io ag',
    location: 'Basel, CH (Remote)',
    countryCode: 'CH',
    startDate: '2022-06-01',
    endDate: '2024-11-30',
    periodComment: 'Startup Shutdown',
    responsibilities: [
      'Frontend development with Typescript, React & Storybook',
      'Backend Development with Python & Django',
      'Front & Backend integration (API, Design System, Smart Contracts)',
      'System architecture participation',
      'Technical documentation and coaching of new team member',
      'Responsible for the development of the Frontend Design System',
      'Responsible for the development of the company\'s website',
    ],
    technologies: 'TypeScript, React, Storybook, Python, Django, CSS, HTML, EmotionCSS, Yaml, Cypress testing, Gatsby',
  },
};

export const NON_TECH_EXPERIENCE: Record<string, ExperienceItem> = {
  TEACHER: {
    position: 'Self-employed Teacher',
    description: `
      Tutored students in Math, English, and Spanish — from exam prep to language fluency.
      Focused on clarity, confidence, and adapting to each learner's style.
    `,
  },
  SOCIAL_MEDIA: {
    position: 'Social Media Marketing Manager',
    description: `
      Ran social media and campaigns for two bars, while working in service.
      Blended content, events, and real-life experience to build stronger customer connections.
    `,
  },
  FASHION: {
    position: 'Founder & Entrepreneur',
    description: `
      Founded and ran a women's accessories brand — from product design to marketing and sales.
      Wore all the hats: launching campaigns, spotting trends, building customer trust, and managing production.
    `,
  },
};

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    name: 'Silly Startup Idea Generator',
    description: `
      A whimsical web app that generates absurd startup ideas like “Next-gen Delivery App for Time-traveling Hamsters”.
      The generator mashes together buzzwords, audiences, and formats.
    `,
    objective: 'Learning Tailwind.',
    imageSrc: '/images/startupIdeaGenerator.png',
    imageAlt: 'Silly Startup Idea Generator',
    url: 'https://github.com/alexamaingard/silly-startup-idea-generator',
    liveDemoUrl: 'https://alexamaingard.com/startup-generator',
  },
  {
    name: 'This Website!',
    description: `
      Personal portfolio and professional website to introduce myself as a full-stack software developer,
      while also reflecting my multidisciplinary background in social media, art, and teaching.
    `,
    objective: 'Showcase my full-stack skills and multidisciplinary creative journey.',
    imageSrc: '/images/portfolioWebsite.png',
    imageAlt: 'Personal Portfolio Website Landing Page',
    url: 'https://github.com/alexamaingard/portfolio-website',
  },
  {
    name: 'Migraine Witch',
    description: `
      Web app for logging migraine attacks and their symptoms, triggers, etc.
      It's main purpose is to help migraine patients understand their condition and pain better.
    `,
    objective: 'Final graduation project for Boolean UK Bootcamp.',
    imageSrc: '/images/migraineWitchHomepage.png',
    imageAlt: 'Migraine Witch Project Homepage',
    url: 'https://github.com/alexamaingard/migraine-witch',
  },
];
