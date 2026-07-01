'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';

interface TextWipeLinkProps {
  href: string;
  text: string;
  baseColor: string;
  hoverColor: string;
  textClassName?: string;
  iconClassName?: string;
  gapClassName?: string;
  className?: string;
  uppercase?: boolean;
}

const TextWipeLink = ({
  href,
  text,
  baseColor,
  hoverColor,
  textClassName = 'text-2xl',
  iconClassName = 'w-7',
  gapClassName = 'gap-4',
  className = '',
  uppercase = true,
}: TextWipeLinkProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updatePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = Math.max(x, rect.width - x);
    const dy = Math.max(y, rect.height - y);
    const radius = Math.sqrt(dx * dx + dy * dy);
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
    el.style.setProperty('--r', `${radius}px`);
  };

  return (
    <Link href={href}>
      <div
        ref={wrapperRef}
        onMouseEnter={updatePointer}
        onMouseLeave={updatePointer}
        className={`text-wipe group relative cursor-pointer flex flex-row items-center justify-center ${gapClassName} transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95 ${className}`}
      >
        {/* Base layer */}
        <span
          className={`relative flex flex-row items-center justify-center ${gapClassName} font-medium ${uppercase ? 'uppercase' : ''} text-nowrap ${textClassName}`}
          style={{ color: baseColor }}
        >
          {text}
          <LinkArrowIcon className={iconClassName} style={{ color: baseColor }} />
        </span>
        {/* Overlay layer, revealed via clip-path from cursor */}
        <span
          className={`wipe-layer absolute inset-0 flex flex-row items-center justify-center ${gapClassName} font-medium ${uppercase ? 'uppercase' : ''} text-nowrap ${textClassName}`}
          style={{ color: hoverColor }}
        >
          {text}
          <LinkArrowIcon className={iconClassName} style={{ color: hoverColor }} />
        </span>
        <style jsx>{`
          .text-wipe {
            --x: 50%;
            --y: 50%;
            --r: 0px;
          }
          .wipe-layer {
            clip-path: circle(0px at var(--x) var(--y));
            transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .text-wipe:hover .wipe-layer {
            clip-path: circle(var(--r) at var(--x) var(--y));
          }
        `}</style>
      </div>
    </Link>
  );
};

export default TextWipeLink;