import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import TextType from '@/components/TextType';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <div className="bg-[#2E3F59] h-screen w-full flex flex-col justify-between relative overflow-hidden">
      <Navbar />
      <div className="pt-">
        <Marquee speed={24} gradient={false} direction="right">
          <Image
            src="/bigName.svg"
            alt="Big Name"
            width={1200}
            height={800}
            className="mr-32"
          />
          <Image
            src="/bigName.svg"
            alt="Big Name"
            width={1200}
            height={800}
            className="mr-32"
          />
          <Image
            src="/bigName.svg"
            alt="Big Name"
            width={1200}
            height={800}
            className="mr-32"
          />
          <Image
            src="/bigName.svg"
            alt="Big Name"
            width={1200}
            height={800}
            className="mr-32"
          />
          <Image
            src="/bigName.svg"
            alt="Big Name"
            width={1200}
            height={800}
            className="mr-32"
          />
        </Marquee>
        <h1 className="uppercase text-3xl text-[#F3F9FF] px-10 py-4">
          {' '}
          Open for Work{' '}
        </h1>
      </div>
      <div className="pt-12 px-10 w-full flex flex-row justify-between items-center">
        <h2 className="text-2xl font-medium text-[#F8D752] uppercase">
          Get in Touch
        </h2>
        <TextType
          text={[
            'Full-Stack\nEngineer',
            'Backend\nEngineer',
            'Frontend\nEngineer',
            'Data\nAnalyst',
          ]}
          typingSpeed={150}
          pauseDuration={2000}
          showCursor
          cursorCharacter="|"
          deletingSpeed={70}
          cursorBlinkDuration={0.6}
          className="
          font-victory-striker-sans text-7xl text-[#F3F9FF] text-end leading-[1.5] tracking-wide whitespace-pre-line h-60"
        />
      </div>
      <div className="px-10 pb-10 pt-14 w-full flex flex-row justify-between">
        <h3 className="uppercase text-[#F3F9FF] text-2xl"> New York | US </h3>
        <h3 className="uppercase text-[#F3F9FF] text-2xl"> (Scroll) </h3>
      </div>
      <Image
        src="/titlePicture.png"
        alt="Title Picture"
        width={1000}
        height={500}
        style={{ filter: 'saturate(0.95) brightness(0.9) contrast(0.99)' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-5 translate-y-[40%]"
      />
    </div>
  );
}
