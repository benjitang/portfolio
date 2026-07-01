'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Socials from '../Socials';
import LogoLoop from '../LogoLoop';
import { PointArrowIcon } from '../icons/PointArrowIcon';
import FooterNavLink from '../FooterNavLink';

const Footer = () => {
  const pathname = usePathname();
  const ctaRef = useRef<HTMLDivElement>(null);

  if (pathname === '/contact') return null;

  const updateCtaPointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  };

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
        <div
          ref={ctaRef}
          onMouseEnter={updateCtaPointer}
          onMouseLeave={updateCtaPointer}
          className="cta-button relative inline-block rounded-full overflow-hidden border border-[#F8D752] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95"
        >
          <Link
            href="/contact"
            className="relative z-10 block font-medium text-xl lg:text-2xl text-[#F8D752] px-10 py-5 cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-400 ease-in-out">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>
      <div className="pt-28 flex flex-row justify-between lg:items-end items-center lg:gap-0 text-[#F3F9FF] lg:text-4xl text-2xl font-medium lg:w-[80%] w-[90%] mx-auto">
        {navLinks.map((nav) => (
          <FooterNavLink
            key={nav.name + '1'}
            href={nav.href}
            text={nav.name}
            active={pathname === nav.href}
          />
        ))}
      </div>
      <div className="font-victory-striker-sans pt-2 lg:pt-10">
        <div className="pt-10 lg:pt-1 h-70 -mx-4 lg:-mx-[3.5em]">
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
      <div className="lg:pt-10 pt-12 pb-20 lg:pb-12 flex lg:flex-row flex-col-reverse justify-between items-center lg:items-end gap-12 lg:gap-0">
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
      <style jsx>{`
        .cta-button {
          --x: 50%;
          --y: 50%;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f8d752;
          clip-path: circle(0% at var(--x) var(--y));
          transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        .cta-button:hover::before {
          clip-path: circle(150% at var(--x) var(--y));
        }
        .cta-button:hover span {
          color: #2e3f59;
        }
      `}</style>
    </div>
  );
};

export default Footer;