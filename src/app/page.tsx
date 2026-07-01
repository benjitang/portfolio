import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import ProjectCard from '@/components/ProjectCard';
import TextWipeLink from '@/components/TextWipeLink';
import TitlePage from '@/components/TitlePage';
import { randomColors, randomImages } from '@/constants';
import Link from 'next/link';
import { fetchGithubProjects } from '@/lib/github';

export default async function Home() {
  const projects = await fetchGithubProjects();

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
              <TextWipeLink
                href="/about"
                text="More About"
                baseColor="rgba(46, 63, 89, 0.9)"
                hoverColor="#1C1D20"
                textClassName="text-3xl"
                iconClassName="w-8"
                gapClassName="gap-6"
              />
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
            <TextWipeLink
              href="/works"
              text="More Work"
              baseColor="rgba(46, 63, 89, 0.9)"
              hoverColor="#1C1D20"
              textClassName="text-3xl"
              iconClassName="w-8"
              gapClassName="gap-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}