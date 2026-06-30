import { aboutMe, jobs, services } from '@/constants';
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
        <div className="flex-1 flex flex-col text-7xl font-victory-striker-sans gap-10 py-8">
          <div></div>
          <h3 className="text-[#274D6F]">Working</h3>{' '}
          <h3 className="text-[#2E3F59]">Experience</h3>
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
    </div>
  );
};

export default About;
