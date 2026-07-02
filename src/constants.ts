import defaultComputer01 from '../public/defaultComputer01.jpg';
import defaultComputer02 from '../public/defaultComputer02.jpg';
import defaultComputer03 from '../public/defaultComputer03.jpg';
import defaultComputer04 from '../public/defaultComputer04.jpg';
import defaultComputer05 from '../public/defaultComputer05.jpg';
import defaultComputer06 from '../public/defaultComputer06.jpg';
import defaultComputer07 from '../public/defaultComputer07.jpg';
import type { StaticImageData } from 'next/image';
// add more here as needed

export const github_user = 'benjitang';

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
  'I’m a Software Engineer who enjoys building products that combine thoughtful design with practical technology. Through internships, projects, and hands-on experience, I’ve developed applications across the stack—from responsive frontends to scalable backend systems and AI-powered features.',
  'I work primarily with TypeScript, React, Next.js, and modern web technologies to turn ideas into intuitive digital experiences. I’m focused on growing as a builder, solving meaningful problems, and creating software that makes an impact.',
];

export const services = [
  {
    title: 'Full-Stack Architecture',
    description:
      'Building modern web applications across the full stack with a focus on thoughtful design, scalable systems, and seamless user experiences.',
  },
  {
    title: 'AI & Advanced Integration',
    description:
      'Exploring AI-powered experiences through practical applications, API integrations, and building products that combine intelligence with usability.',
  },
  {
    title: '3D & Interactive Experience',
    description:
      'Creating interactive and visually engaging experiences while learning how design and technology work together to build memorable products.',
  },
];

export const jobs = [
  {
    title: 'Software Engineer Intern',
    company: 'Opportunity Knocks',
    startYear: '2025',
    endYear: '2026',
  },
  {
    title: 'Software Engineer Intern',
    company: 'SCIP Global Leaders',
    startYear: '2024',
    endYear: '2024',
  },
  {
    title: 'Unavailable',
    company: 'Unavailable',
    startYear: '20XX',
    endYear: '20XX',
  },
  {
    title: 'Unavailable',
    company: 'Unavailable',
    startYear: '20XX',
    endYear: '20XX',
  },
  {
    title: 'Unavailable',
    company: 'Unavailable',
    startYear: '20XX',
    endYear: '20XX',
  },
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
  {
    title: 'Languages + Frameworks',
    tools: [
      'TypeScript',
      'JavaScript',
      'React',
      'Python',
      'Java',
      'SQL',
      'Next.js',
      'Node.js',
      'Express.js',
      'Fastify',
    ],
  },
  {
    title: 'AI + Machine Learning',
    tools: ['Open AI', 'Google Generative AI'],
  },
  { title: 'Databases + State', tools: ['Three.js', 'GSAP'] },
  {
    title: 'Devops + Cloud',
    tools: ['PostgreSQL', 'MongoDB', 'Supabase', 'Prisma'],
  },
  { title: '3D + Graphics', tools: ['Docker', 'Vercel'] },
  { title: 'UI + Styling', tools: ['Tailwind CSS', 'ShadCN UI', 'Radix UI'] },
];
