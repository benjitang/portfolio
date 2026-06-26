'use client';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <div className="lg:px-[3.5em] px-4 bg-[#2E3F59]">
      <div className="pt-40 flex flex-col items-center gap-12">
        <h3 className="font-victory-striker-sans text-6xl lg:text-7xl text-[#F3F9FF] text-center leading-[140%]">
          {' '}
          Want to connect?{' '}
        </h3>
        <button className="font-medium text-xl lg:text-2xl border border-[#F8D752] text-[#F8D752] px-10 py-5 rounded-full hover:bg-[#F8D752] hover:text-[#2E3F59] hover:border-[#2E3F59] transition-colors duration-300 ease-in-out cursor-pointer">
          Get in Touch
        </button>
      </div>
      <div className="pt-32">
        <div className="text-2xl flex flex-row gap-8 font-medium text-[#F3F9FF]">
          {navLinks.map((nav) => (
            <div key={nav.name + '1'}>
              {nav.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
