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

export const CONTACT = {
  LINKED_IN: 'https://www.linkedin.com/in/alexa-marie-eliane-maingard-1a641b190',
  EMAIL: 'maingard.alexa@gmail.com',
  GITHUB: 'https://github.com/alexamaingard',
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
