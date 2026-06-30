import SkillCard from '@/components/SkillCard';
import { aboutMe, education, jobs, services, skills } from '@/constants';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#F3F9FF] min-h-screen px-[8%] mx-auto">
      <div className="flex flex-col justify-center py-40 pb-32 xl:pb-40">
        <div className="font-victory-striker-sans text-7xl lg:pt-24 pt-8 flex flex-col gap-8 leading-[130%] h-full items-end">
          <h3 className="text-[#274D6F] text-end w-[70%]">djsafl</h3>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col-reverse gap-18">
        <div className="flex flex-col justify-end flex-2 w-full bg-[#AA8D52] aspect-[7/10]">
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
        <div className="flex-1 pt-20 flex flex-col justify-between items-between pb-24">
          <div>
            <h2 className="font-victory-striker-sans text-7xl text-[#2E3F59]">
              {' '}
              About Me{' '}
            </h2>
            <div className="flex flex-col gap-16 pt-16">
              {aboutMe.map((paragraph, index) => (
                <h5 key={index} className="text-2xl text-[#354156]">
                  {paragraph}
                </h5>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-32">
            <div className="flex flex-col gap-6">
              <h1 className="font-victory-striker-sans text-9xl text-[#274D6F]">
                30+
              </h1>
              <h4 className="text-2xl text-[#354156]"> Projects Completed </h4>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="font-victory-striker-sans text-9xl text-[#274D6F]">
                0+
              </h1>
              <h4 className="text-2xl text-[#354156]"> Years of Experience </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-18">
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
      <div className="pt-72 flex flex-row gap-10">
        <div className="flex-1 py-8 flex flex-col justify-between">
          <div className="flex flex-col text-7xl font-victory-striker-sans gap-10">
            <h3 className="text-[#274D6F]">Working</h3>{' '}
            <h3 className="text-[#2E3F59]">Experience</h3>
          </div>
          <div className="text-2xl text-[#5C5E62] bg-white px-10 py-5 rounded-full border-[#D1D5DB] border-1 w-fit flex flex-row gap-6 justify-center items-center">
            <Image
              src="/greenDot.png"
              alt="Green Dot"
              width={20}
              height={20}
              className="w-5 h-5"
            />{' '}
            <h5>Available for Work </h5>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-14">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-row gap-16">
              <div className="flex items-start justify-start">
                <h4 className="text-2xl text-[#2E3F59]/80 w-16">
                  {String(index + 1).padStart(2, '0')}
                </h4>
              </div>
              <div className="flex flex-row w-full justify-between items-start pb-6 border-b border-[#2E3F59]/40">
                <h4 className="text-3xl text-[#354156]"> {job.title}</h4>
                <div className="flex flex-col text-end">
                  <h5 className="text-lg text-[#2E3F59]/80"> {job.company}</h5>{' '}
                  <h5 className="text-lg text-[#2E3F59]/80">
                    {' '}
                    {job.startYear}-{job.endYear}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-72">
        <h4 className="text-end font-victory-striker-sans text-7xl text-[#274D6F]">
          Education{' '}
        </h4>
        <div className="pt-20">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl text-[#2E3F59] font-medium">
                {' '}
                Stony Brook University{' '}
              </h3>
              <h5 className="text-2xl text-[#2E3F59]/90">
                {' '}
                Bachelor of Science in Computer Science{' '}
              </h5>
            </div>
            <div>
              <h4 className="text-5xl text-[#274D6F] tracking-tight">
                {' '}
                2022 - 2026{' '}
              </h4>
            </div>
          </div>
          <div className="pt-6 pb-10">
            <div className="relative w-full" style={{ aspectRatio: '1 / 0.5' }}>
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
            className="flex flex-row justify-between items-center border-t border-[#2E3F59]/40 pt-8 pb-10"
            key={index}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl text-[#2E3F59] font-medium">
                {' '}
                {edu.company}
              </h3>
              <h5 className="text-2xl text-[#2E3F59]/90"> {edu.certificate}</h5>
            </div>
            <div>
              <h4 className="text-5xl text-[#274D6F] tracking-tight">
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
        <div className="flex flex-col gap-20">
          <h2 className="font-victory-striker-sans text-[#274D6F] text-7xl text-center">
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
