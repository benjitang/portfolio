'use client';

import Image from 'next/image';
import Link from 'next/link';
import LogoLoop from '@/components/LogoLoop';
import TextType from '@/components/TextType';
import Navbar from '@/components/layout/Navbar';
import Socials from '@/components/Socials';
import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';

const marqueeLogos = [
  { src: '/bigName.svg', alt: 'Benjamin Tang' },
  { src: '/bigName.svg', alt: 'Benjamin Tang' },
];

export default function TitlePage() {
  return (
    <div className="bg-[#2E3F59] min-h-screen w-full flex flex-col relative overflow-x-hidden lg:h-auto h-270">
      <Navbar />

      <div className="pt-10 lg:pt-1 h-70">
        {/* Mobile */}
        <div className="lg:hidden w-full h-60 relative overflow-hidden">
          <LogoLoop
            logos={marqueeLogos}
            speed={32}
            direction="right"
            logoHeight={240}
            gap={96}
            hoverSpeed={28}
            fadeOut={false}
            ariaLabel="Benjamin Tang"
          />
        </div>

        {/* Desktop */}
        <div className="hidden lg:block w-full h-70 relative overflow-hidden">
          <LogoLoop
            logos={marqueeLogos}
            speed={32}
            direction="right"
            logoHeight={270}
            gap={96}
            hoverSpeed={28}
            fadeOut={false}
            ariaLabel="Benjamin Tang"
          />
        </div>
        <h1 className="uppercase text-3xl text-[#F3F9FF] px-10 py-2 hidden lg:block">
          Open for Work
        </h1>
      </div>

      <div className="flex flex-1 flex-col lg:justify-center justify-end md:pb-53 pb-51 items-center lg:h-full lg:pb-20 lg:pt-8">
        <div className="px-10 w-full flex-row lg:justify-between justify-center items-center flex z-10">
          <Link href="/contact">
            <div className="group text-2xl font-medium text-[#F8D752] uppercase hidden lg:flex flex-row items-center justify-center gap-4 hover:text-[#F3F9FF] transition-colors duration-300 ease-in-out cursor-pointer">
              Get in Touch
              <LinkArrowIcon className="w-7" />
            </div>
          </Link>
          <div className="lg:h-60 h-45">
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
              className="font-victory-striker-sans lg:text-7xl text-6xl text-[#F3F9FF] lg:text-end text-center lg:pt-0 pt-0 leading-[1.5] tracking-wide whitespace-pre-line"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 lg:px-10 px-5 lg:pb-10 pb-12 pt-14 w-full flex lg:flex-row flex-col lg:justify-between lg:items-end justify-center items-between z-15 overflow-auto overflow-x-hidden gap-10 lg:gap-0">
        <h3 className="uppercase text-[#F3F9FF] text-2xl font-medium flex-1 lg:flex justify-start hidden">
          New York | US
        </h3>
        <div className="flex-1 flex justify-center">
          <Socials />
        </div>
        <div className="lg:hidden flex justify-center">
          <h3 className="uppercase text-[#F3F9FF] text-2xl font-medium flex-1 lg:flex justify-start">
            NYC
          </h3>
          <Link href="/contact">
            <div className="cursor-pointer group hover:text-white text-2xl font-medium text-[#F8D752] uppercase flex flex-row items-center justify-center gap-3">
              Get in Touch
              <LinkArrowIcon className="w-7" />
            </div>
          </Link>
        </div>
        <h3 className="uppercase text-[#F3F9FF] text-2xl font-medium flex-1 lg:flex justify-end hidden">
          (Scroll)
        </h3>
      </div>

      <Image
        src="/titlePicture.svg"
        alt="Title Picture"
        width={1000}
        height={500}
        style={{
          filter: 'saturate(0.95) brightness(0.9) contrast(0.99)',
          transform: 'translateX(-50%)',
        }}
        className="absolute bottom-0 left-1/2 z-5 max-w-[1000px] overflow-clip h-auto"
      />
    </div>
  );
}
