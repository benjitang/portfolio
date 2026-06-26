'use client';
import { GraphViewIcon } from '@/components/icons/GraphViewIcon';
import { ListViewIcon } from '@/components/icons/ListViewIcon';
import { useState } from 'react';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

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

const Works = () => {
  const [graph, setGraph] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <div className="bg-[#F3F9FF] min-h-screen px-[8%] mx-auto">
      <div className="flex flex-col justify-center py-40 pb-32 xl:pb-40">
        <div className="font-victory-striker-sans text-8xl lg:pt-24 pt-8 flex flex-col gap-8 leading-[130%] h-full">
          <h3 className="text-[#274D6F]">
            <span className="hidden xl:inline"> Check Out Some of my</span>{' '}
            Projects
          </h3>
          <h3 className="text-[#2E3F59]">
            <span className="hidden xl:inline"> Explore my</span> Portfolio
          </h3>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex flex-row gap-10">
          <div
            onClick={() => setGraph(true)}
            className={`transition-colors duration-300 ease-in-out cursor-pointer border p-6 rounded-full border-[#354156] ${graph ? 'bg-[#1C1D20]' : 'bg-[#F3F9FF]'}`}
          >
            <GraphViewIcon
              className={`w-8 ${graph ? '!fill-[#F3F9FF]' : '!fill-[#354156]'}`}
            />
          </div>
          <div
            onClick={() => setGraph(false)}
            className={`transition-colors duration-300 ease-in-out cursor-pointer border p-6 rounded-full border-[#354156] ${!graph ? 'bg-[#1C1D20]' : 'bg-[#F3F9FF]'}`}
          >
            <ListViewIcon
              className={`w-8 ${!graph ? 'fill-[#F3F9FF]' : 'fill-[#354156]'}`}
            />
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14 bg-[#F3F9FF]"
      >
        <AnimatePresence mode="sync">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center py-20 pb-28">
        <button
          onClick={() => setShowMore(!showMore)}
          className="font-medium text-2xl border border-[#354156] text-[#354156] px-10 py-5 rounded-full hover:bg-[#2E3F59] hover:text-[#F3F9FF] hover:border-[#2E3F59] transition-colors duration-300 ease-in-out cursor-pointer"
        >
          {showMore ? 'Show Less' : 'Load More Work'}
        </button>
      </div>
    </div>
  );
};

export default Works;
