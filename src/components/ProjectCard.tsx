import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import Image from 'next/image';
import defaultComputer from "../../public/defaultComputer01.jpg"
import { randomImageMap } from '@/constants';
import type { StaticImageData } from 'next/image'

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: number;
};

const ProjectCard = ({ project, color, imageName }: { 
  project: Project; 
  color: string;
  imageName: string;
}) => {
  const imageSrc: StaticImageData = randomImageMap[imageName];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h5 className="text-xl md:text-2xl text-[#354156] flex-5 whitespace-nowrap overflow-hidden text-ellipsis">
          {project.title}
        </h5>
        <h5 className="text-xl md:text-2xl text-[#354156] flex-1 flex justify-end">
          {project.year}
        </h5>
      </div>
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ backgroundColor: `#${color}` }}
      >
        <Image
          src={imageSrc}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;