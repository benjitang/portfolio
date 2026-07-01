'use client';
import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import TitlePage from '@/components/TitlePage';
import { randomColors, randomImages } from '@/constants';
import Link from 'next/link';

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-stack web application',
    tags: ['React', 'Node.js'],
    year: 2022,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform',
    tags: ['Next.js', 'Tailwind'],
    year: 2022,
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Real-time data dashboard',
    tags: ['TypeScript', 'D3.js'],
    year: 2022,
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'API integration service',
    tags: ['Python', 'FastAPI'],
    year: 2022,
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'Machine learning pipeline',
    tags: ['Python', 'TensorFlow'],
    year: 2022,
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'Cloud infrastructure tool',
    tags: ['AWS', 'Terraform'],
    year: 2022,
  },
  {
    id: 7,
    title: 'Project Seven',
    description: 'Open source CLI utility',
    tags: ['Go', 'Bash'],
    year: 2022,
  },
  {
    id: 8,
    title: 'Project Eight',
    description: 'Design system library',
    tags: ['React', 'Storybook'],
    year: 2022,
  },
  {
    id: 9,
    title: 'Project Nine',
    description: 'Blockchain smart contracts',
    tags: ['Solidity', 'Ethers.js'],
    year: 2022,
  },
  {
    id: 10,
    title: 'Project Ten',
    description: 'GraphQL API gateway',
    tags: ['GraphQL', 'Apollo'],
    year: 2022,
  },
  {
    id: 11,
    title: 'Project Eleven',
    description: 'WebSocket chat application',
    tags: ['Socket.io', 'Redis'],
    year: 2022,
  },
  {
    id: 12,
    title: 'Project Twelve',
    description: 'Image processing service',
    tags: ['Python', 'OpenCV'],
    year: 2022,
  },
  {
    id: 13,
    title: 'Project Thirteen',
    description: 'Auth microservice',
    tags: ['JWT', 'OAuth'],
    year: 2022,
  },
  {
    id: 14,
    title: 'Project Fourteen',
    description: 'CMS platform',
    tags: ['Next.js', 'Prisma'],
    year: 2022,
  },
  {
    id: 15,
    title: 'Project Fifteen',
    description: 'Portfolio website',
    tags: ['Next.js', 'Tailwind'],
    year: 2022,
  },
  {
    id: 16,
    title: 'Project Sixteen',
    description: 'Analytics tracker',
    tags: ['TypeScript', 'PostgreSQL'],
    year: 2022,
  },
  {
    id: 17,
    title: 'Project Seventeen',
    description: 'Browser extension',
    tags: ['JavaScript', 'Chrome API'],
    year: 2022,
  },
  {
    id: 18,
    title: 'Project Eighteen',
    description: 'Event scheduling app',
    tags: ['React', 'Firebase'],
    year: 2022,
  },
  {
    id: 19,
    title: 'Project Nineteen',
    description: 'Code review tool',
    tags: ['GitHub API', 'Node.js'],
    year: 2022,
  },
  {
    id: 20,
    title: 'Project Twenty',
    description: 'Dev environment manager',
    tags: ['Docker', 'Shell'],
    year: 2022,
  },
];

export default function Home() {
  return (
    <div className="bg-[#F3F9FF]">
      <TitlePage />
      <div className="bg-[#F3F9FF] px-[8%] mx-auto">
        <div className="flex flex-col justify-center pt-24 lg:pb-40 pb-28">
          <div className="lg:pt-20 pt-16 flex flex-col gap-19 lg:gap-0 lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-28 lg:justify-start w-full">
              <div className="flex flex-col lg:gap-6 gap-4">
                <h1 className="font-victory-striker-sans lg:text-9xl text-8xl text-[#274D6F]">
                  30+
                </h1>
                <h4 className="lg:text-2xl text-xl text-[#354156]">
                  {' '}
                  Projects Completed{' '}
                </h4>
              </div>
              <div className="flex flex-col lg:gap-6 gap-4">
                <h1 className="font-victory-striker-sans lg:text-9xl text-8xl text-[#274D6F]">
                  0+
                </h1>
                <h4 className="lg:text-2xl text-xl text-[#354156]">
                  {' '}
                  Years of Experience{' '}
                </h4>
              </div>
            </div>
            <div>
              <Link href="/about">
              <div className="group text-3xl font-medium text-[#2E3F59]/90 uppercase flex flex-row items-center justify-center gap-6 hover:text-[#1C1D20] transition-colors duration-300 ease-in-out cursor-pointer text-nowrap">
                More About
                <LinkArrowIcon className="w-8 fill-[#2E3F59]/90 group-hover:fill-[#1C1D20]" />
              </div>
            </Link>
            </div>
          </div>
          <div className="font-victory-striker-sans lg:text-7xl text-5xl lg:pt-40 pt-20 flex flex-col lg:gap-6 gap-4 leading-[130%] h-full items-center lg:items-end -mx-[8%] lg:mx-auto lg:w-full">
            <h3 className="text-[#274D6F] text-center lg:text-end">
              Learn deeply,
            </h3>
            <h3 className="text-[#274D6F] text-center lg:text-end">
              Build intentionally
            </h3>
          </div>
        </div>

        <div className="pt-20">
          <h3 className="lg:text-7xl text-6xl font-victory-striker-sans text-[#2E3F59] leading-[140%]">
            {' '}
            Recent Projects{' '}
          </h3>
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 bg-[#F3F9FF]">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                color={randomColors[project.id % randomColors.length]}
                imageName={randomImages[project.id % randomImages.length]}
              />
            ))}
          </div>
          <div className="pb-24 pt-20 w-fit mx-auto">
            <Link href="/works">
              <div className="group text-3xl font-medium text-[#2E3F59]/90 uppercase flex flex-row items-center justify-center gap-5 hover:text-[#1C1D20] transition-colors duration-300 ease-in-out cursor-pointer">
                More Work
                <LinkArrowIcon className="w-8 fill-[#2E3F59]/90 group-hover:fill-[#1C1D20]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
