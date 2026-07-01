import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import Image from 'next/image';
import defaultComputer from '../../public/defaultComputer01.jpg';
import { randomImageMap } from '@/constants';
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: number;
  url: string;
};

const ProjectCard = ({
  project,
  color,
  imageName,
}: {
  project: Project;
  color: string;
  imageName: string;
}) => {
  const imageSrc: StaticImageData = randomImageMap[imageName];

  return (
    <div className="group flex flex-col gap-4 cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <h5 className="text-xl md:text-2xl text-[#354156] flex-5 whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-300 group-hover:text-black">
          {project.title}
        </h5>
        <h5 className="text-xl md:text-2xl text-[#354156] flex-1 flex justify-end transition-colors duration-300 group-hover:text-black">
          {project.year}
        </h5>
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square w-full overflow-hidden block"
        style={{ backgroundColor: `#${color}` }}
      >
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#1C1D20]/0 group-hover:bg-[#1C1D20]/60 transition-colors duration-300 opacity-0 group-hover:opacity-100">
          <span className="text-[#F3F9FF] text-2xl md:text-4xl font-medium tracking-wide">
            Open
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
