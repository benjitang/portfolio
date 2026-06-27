'use client';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Socials from '../Socials';
import LogoLoop from '../LogoLoop';
import { PointArrowIcon } from '../icons/PointArrowIcon';

const Footer = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  const marqueeLogos = [
    { src: 'bigName.svg', alt: 'Benjamin Tang' },
    { src: 'bigName.svg', alt: 'Benjamin Tang' },
  ];

  return (
    <div className="lg:px-[3.5em] px-4 bg-[#2E3F59]">
      <div className="pt-36 flex flex-col items-center gap-12">
        <h3 className="font-victory-striker-sans text-6xl lg:text-7xl text-[#F3F9FF] text-center leading-[160%]">
          {' '}
          Want to connect?{' '}
        </h3>
        <button className="font-medium text-xl lg:text-2xl border border-[#F8D752] text-[#F8D752] px-10 py-5 rounded-full hover:bg-[#F8D752] hover:text-[#2E3F59] hover:border-[#2E3F59] transition-colors duration-300 ease-in-out cursor-pointer">
          Get in Touch
        </button>
      </div>
      <div className="pt-28 flex lg:flex-row flex-col-reverse lg:justify-between lg:items-end items-center gap-16 lg:gap-0">
        <div className="lg:text-2xl text-xl flex flex-row gap-0 lg:gap-10 w-[90%] justify-between lg:justify-start lg:w-auto font-medium text-[#F3F9FF]">
          {navLinks.map((nav) => (
            <div key={nav.name + '1'}>{nav.name}</div>
          ))}
        </div>
        <div className="group hover:text-[#F8D752] transition-colors duration-300 ease-in-out text-[#F3F9FF] flex flex-row gap-4 cursor-pointer">
          <h2 className="text-2xl underline underline-offset-6">Back To Top</h2>
          <PointArrowIcon className="w-8 h-8 fill-[#F3F9FF] group-hover:fill-[#F8D752] -rotate-90 transition-colors duration-300 ease-in-out" />
        </div>
      </div>
      <div className="font-victory-striker-sans pt-2 lg:pt-10">
        <div className="pt-10 lg:pt-1 h-70 -mx-4 lg:-mx-[3.5em]">
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
        </div>
      </div>
      <div className="lg:pt-10 pt-12 pb-20 lg:pb-12 flex lg:flex-row flex-col-reverse justify-between items-center gap-12 lg:gap-0">
        <div>
          <h2 className="lg:text-2xl text-xl text-[#F3F9FF] font-base text-center">
            {' '}
            © 2026 Benjamin Tang All Rights Reserved
          </h2>
        </div>
        <div className="lg:w-[28%] w-[90%]">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
