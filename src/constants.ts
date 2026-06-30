import defaultComputer01 from '../public/defaultComputer01.jpg';
import defaultComputer02 from '../public/defaultComputer02.jpg';
import defaultComputer03 from '../public/defaultComputer03.jpg';
import defaultComputer04 from '../public/defaultComputer04.jpg';
import defaultComputer05 from '../public/defaultComputer05.jpg';
import defaultComputer06 from '../public/defaultComputer06.jpg';
import defaultComputer07 from '../public/defaultComputer07.jpg';
import type { StaticImageData } from 'next/image';
// add more here as needed

export const socials = [
  {
    name: 'Github',
    src: '/github.svg',
    url: 'https://github.com/benjitang',
  },
  {
    name: 'LinkedIn',
    src: '/linkedIn.svg',
    url: 'https://www.linkedin.com/in/bentangnyc/',
  },
  {
    name: 'Twitter',
    src: '/twitter.svg',
    url: 'https://x.com/BenjaminTae4lo',
  },
  {
    name: 'Instagram',
    src: '/instagram.svg',
    url: 'https://www.instagram.com/benjamintang22/',
  },
];

export const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const contactDetails = {
  phone: '+1 (347) 520-7272',
  email: 'benjamin.work.tang@gmail.com',
};

export const randomColors = [
  '5EA8E7',
  'FF8796',
  'D2D7DA',
  'A1E0DD',
  'FA85B9',
  'FFDABB',
  'ADB4BC',
  '88AFD1',
  'F7DFF7',
  '5CC2C6',
  'D5F1D8',
  'C387C2',
  'FFABA8',
  'A4E9FE',
];

export const randomImageMap: Record<string, StaticImageData> = {
  defaultComputer01,
  defaultComputer02,
  defaultComputer03,
  defaultComputer04,
  defaultComputer05,
  defaultComputer06,
  defaultComputer07,
};

export const randomImages = [
  'defaultComputer01',
  'defaultComputer02',
  'defaultComputer03',
  'defaultComputer04',
  'defaultComputer05',
  'defaultComputer06',
  'defaultComputer07',
];

export const aboutMe = [
  'I am a full stack developer currently trying to find work. I am a recent grad of Stony Brook University with a Computer Science Degree. I am looking for any work to improve and grow myself.',
  'I am a full stack developer currently trying to find work. I am a recent grad of Stony Brook University with a Computer Science Degree. I am looking for any work to improve and grow myself.',
];

export const services = [
  {
    title: 'Full-Stack Architecture',
    description:
      'I am a full stack developer currently trying to find work. I am a recent grad of Stony Brook University with a Computer Science Degree. I am looking for any work to improve and grow myself.',
  },
  {
    title: 'AI & Advanced Integration',
    description:
      'I am a full stack developer currently trying to find work. I am a recent grad of Stony Brook University with a Computer Science Degree. I am looking for any work to improve and grow myself.',
  },
  {
    title: '3D & Interactive Experience',
    description:
      'I am a full stack developer currently trying to find work. I am a recent grad of Stony Brook University with a Computer Science Degree. I am looking for any work to improve and grow myself.',
  },
];

export const jobs = [
  { title: 'Software Engineer Intern', company: 'Opportunity Knocks', startYear: "2025", endYear: "2026" },
  { title: 'Software Engineer Intern', company: 'SCIP Global Leaders', startYear: "2024", endYear: "2024" },
  { title: 'Unavailable', company: 'Unavailable', startYear: "20XX", endYear: "20XX" },
  { title: 'Unavailable', company: 'Unavailable', startYear: "20XX", endYear: "20XX" },
  { title: 'Unavailable', company: 'Unavailable', startYear: "20XX", endYear: "20XX" },
];

export const education = [
  {
    certificate: 'Data Analyst Certificate',
    company: 'IBM',
    startYear: 2026,
    endYear: 2026,
  },
];

export const skills = [
  { title: 'Languages + Frameworks', tools: [] },
  { title: 'AI + Machine Learning', tools: [] },
  { title: 'Databases + State', tools: [] },
  { title: 'Devops + Cloud', tools: [] },
  { title: '3D + Graphics', tools: [] },
  { title: 'UI + Styling', tools: [] },
];
