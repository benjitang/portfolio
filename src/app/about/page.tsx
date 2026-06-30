import SkillCard from '@/components/SkillCard';
import { aboutMe, education, jobs, services, skills } from '@/constants';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#F3F9FF] min-h-screen px-[8%] mx-auto overflow-x-hidden">
      <div className="flex flex-col justify-center py-40 pt-56 pb-48 xl:pb-56">
        <div className="font-victory-striker-sans lg:text-7xl text-5xl lg:pt-24 pt-8 flex flex-col lg:gap-6 gap-4 leading-[130%] h-full items-center -mx-[8%]">
          <h3 className="text-[#274D6F] text-center">Learn deeply,</h3>
          <h3 className="text-[#274D6F] text-center">Build intentionally</h3>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col-reverse lg:gap-16 gap-4">
        <div className="flex flex-col justify-end flex-[2] w-full bg-[#AA8D52] lg:pt-40 pt-20">
          <Image
            src="/aboutImage.png"
            alt="aboutImage"
            width={5000}
            height={5000}
            className="w-full"
            style={{
              filter: 'saturate(0.95) brightness(0.9) contrast(0.99)',
            }}
          />
        </div>
        <div className="flex-[1] pt-20 flex flex-col justify-between pb-24 lg:gap-32 gap-20">
          <div>
            <h2 className="font-victory-striker-sans lg:text-7xl text-6xl text-[#2E3F59]">
              {' '}
              About Me{' '}
            </h2>
            <div className="flex flex-col lg:gap-16 gap-12 lg:pt-16 pt-20">
              {aboutMe.map((paragraph, index) => (
                <h5 key={index} className="lg:text-2xl text-xl text-[#354156]">
                  {paragraph}
                </h5>
              ))}
            </div>
          </div>
          <div className="flex xl:flex-col flex-col md:flex-row lg:gap-32 gap-20 md:gap-60">
            <div className="flex flex-col lg:gap-6 gap-4">
              <h1 className="font-victory-striker-sans lg:text-9xl text-8xl text-[#274D6F]">
                30+
              </h1>
              <h4 className="lg:text-2xl text-xl text-[#354156]"> Projects Completed </h4>
            </div>
            <div className="flex flex-col lg:gap-6 gap-4">
              <h1 className="font-victory-striker-sans lg:text-9xl text-8xl text-[#274D6F]">
                0+
              </h1>
              <h4 className="lg:text-2xl text-xl text-[#354156]"> Years of Experience </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-20">
          {services.map((service, index) => (
            <div key={index} className="">
              <div className="flex items-start justify-start pb-6 border-b border-[#2E3F59]/40">
                <h4 className="text-2xl text-[#2E3F59]/80">
                  {String(index + 1).padStart(2, '0')}
                </h4>
              </div>
              <h3 className="text-2xl font-medium pt-6 text-[#2E3F59]">
                {service.title}
              </h3>
              <p className="text-xl pt-7 text-[#2E3F59]/90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-72 flex lg:flex-row flex-col xl:gap-0 lg:gap-28 gap-8">
        <div className="flex-[1] py-8 flex flex-col justify-between gap-16">
          <div className="flex flex-col lg:text-7xl text-6xl font-victory-striker-sans lg:gap-10 gap-6">
            <h3 className="text-[#274D6F]">Working</h3>{' '}
            <h3 className="text-[#2E3F59]">Experience</h3>
          </div>
          <div className="lg:text-2xl text-xl text-[#5C5E62] bg-white lg:px-10 px-8 lg:py-5 py-4 rounded-full border-[#D1D5DB] border w-fit flex flex-row gap-6 justify-center items-center">
            <Image
              src="/greenDot.png"
              alt="Green Dot"
              width={20}
              height={20}
              className="lg:w-5 w-4 h-auto"
            />{' '}
            <h5 className="text-nowrap">Available for Work </h5>
          </div>
        </div>
        <div className="flex-[2] flex flex-col lg:gap-14 gap-8 min-w-0">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col lg:gap-6 xl:gap-12 gap-8 min-w-0"
            >
              <div className="flex items-start justify-start">
                <h4 className="lg:text-2xl text-xl text-[#2E3F59]/80 w-16">
                  {String(index + 1).padStart(2, '0')}
                </h4>
              </div>
              <div className="flex flex-row w-full justify-between lg:items-start items-center lg:pb-6 pb-4 border-b border-[#2E3F59]/40 gap-4 min-w-0">
                <h4 className="flex-[3] lg:text-3xl text-2xl text-[#354156] whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                  {job.title}
                </h4>
                <div className="flex-[1] flex flex-col text-end min-w-0">
                  <h5 className="lg:text-lg text-base text-[#2E3F59]/80 whitespace-nowrap overflow-hidden text-ellipsis">
                    {job.company}
                  </h5>
                  <h5 className="lg:text-lg text-base text-[#2E3F59]/80 whitespace-nowrap overflow-hidden text-ellipsis">
                    {job.startYear}-{job.endYear}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-72">
        <h4 className="text-end font-victory-striker-sans lg:text-7xl text-6xl text-[#274D6F]">
          Education{' '}
        </h4>
        <div className="pt-20">
          <div className="flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center items-start gap-2 lg:gap-2">
            <div className="flex flex-col lg:gap-4 gap-2">
              <h3 className="lg:text-4xl text-2xl text-[#2E3F59] font-medium">
                {' '}
                Stony Brook University{' '}
              </h3>
              <h5 className="lg:text-2xl text-xl text-[#2E3F59]/90">
                {' '}
                Bachelor of Science in Computer Science{' '}
              </h5>
            </div>
            <div className="flex justify-end items-end text-end w-full lg:w-fit">
              <h4 className="lg:text-5xl text-2xl text-[#274D6F] tracking-tight">
                {' '}
                2022 - 2026{' '}
              </h4>
            </div>
          </div>
          <div className="lg:pt-6 pt-4 lg:pb-10 pb-6">
            <div className="relative w-full lg:aspect-[1/0.5] aspect-[8/10]">
              <Image
                src="/stonybrook.jpg"
                alt="Stony Brook"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        {education.map((edu, index) => (
          <div
            className="flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center items-start gap-2 lg:gap-2 border-t border-[#2E3F59]/40 lg:pt-8 pt-4 lg:pb-10 pb-6"
            key={index}
          >
            <div className="flex flex-col lg:gap-4 gap-2">
              <h3 className="lg:text-4xl text-2xl text-[#2E3F59] font-medium">
                {' '}
                {edu.company}
              </h3>
              <h5 className="lg:text-2xl text-xl text-[#2E3F59]/90">
                {' '}
                {edu.certificate}
              </h5>
            </div>
            <div className="flex justify-end items-end text-end w-full lg:w-fit">
              <h4 className="lg:text-5xl text-2xl text-[#274D6F] tracking-tight">
                {' '}
                {edu.startYear === edu.endYear
                  ? edu.endYear
                  : `${edu.startYear} - ${edu.endYear}`}{' '}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-48 pb-32">
        <div className="flex flex-col lg:gap-20 gap-16">
          <h2 className="font-victory-striker-sans text-[#274D6F] text-6xl lg:text-7xl text-center leading-[130%]">
            {' '}
            Technology and Tools{' '}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-y divide-[#2E3F59]/40 border border-[#2E3F59]/40">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} tools={skill.tools} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;