'use client';

import { useRef } from 'react';
import { socials } from '@/constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import Image from 'next/image';

const Socials = () => {
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updatePointer = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    const button = buttonRefs.current[index];
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    button.style.setProperty('--x', `${x}%`);
    button.style.setProperty('--y', `${y}%`);
  };

  return (
    <div className="text-white flex flex-row justify-between gap-6.5 sm:gap-8">
      {socials.map((social, index) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
          onMouseEnter={(e) => updatePointer(e, index)}
          onMouseLeave={(e) => updatePointer(e, index)}
          className="social-button group relative border-white border-1 rounded-full flex justify-center items-center p-4 md:p-5 overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-1 active:scale-90 active:translate-y-0"
        >
          <span className="fill relative z-10 flex items-center justify-center">
            {social.name === 'Github' ? (
              <GithubIcon />
            ) : social.name === 'LinkedIn' ? (
              <LinkedInIcon />
            ) : social.name === 'Twitter' ? (
              <TwitterIcon />
            ) : social.name === 'Instagram' ? (
              <InstagramIcon />
            ) : (
              <Image src={social.src} alt={social.name} width={32} height={32} />
            )}
          </span>
        </a>
      ))}

      <style jsx>{`
        .social-button {
          --x: 50%;
          --y: 50%;
        }
        .social-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f8d752;
          clip-path: circle(0% at var(--x) var(--y));
          transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        .social-button:hover::before {
          clip-path: circle(150% at var(--x) var(--y));
        }
        .social-button:hover {
          border-color: #f8d752;
        }
        .fill :global(svg) {
          transition: fill 0.4s ease, stroke 0.4s ease, color 0.4s ease;
          position: relative;
          z-index: 1;
        }
        .social-button:hover .fill :global(svg) {
          fill: #2e3f59;
          stroke: #2e3f59;
          color: #2e3f59;
        }
      `}</style>
    </div>
  );
};

export default Socials;