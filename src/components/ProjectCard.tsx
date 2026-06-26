import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: number;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-between items-center">
      <h5 className="text-xl md:text-2xl text-[#354156] flex-5 whitespace-nowrap overflow-hidden text-ellipsis">
        {project.title}
      </h5>
      <h5 className="text-xl md:text-2xl text-[#354156] flex-1 flex justify-end">
        {project.year}
      </h5>
    </div>
    <div className="aspect-square bg-blue-200 w-full"></div>
  </div>
);

export default ProjectCard;
