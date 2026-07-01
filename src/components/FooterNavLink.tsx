'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface FooterNavLinkProps {
  href: string;
  text: string;
  active?: boolean;
}

const FooterNavLink = ({ href, text, active = false }: FooterNavLinkProps) => {
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

  // For the active link, grow the circle from its own center on mount
  useEffect(() => {
    if (!active) return;
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const radius = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2;
    el.style.setProperty('--x', `${rect.width / 2}px`);
    el.style.setProperty('--y', `${rect.height / 2}px`);
    el.style.setProperty('--r', `${radius}px`);
  }, [active]);

  return (
    <Link href={href} className="inline-block">
      <div
        ref={wrapperRef}
        onMouseEnter={updatePointer}
        onMouseLeave={updatePointer}
        className={`text-wipe group relative inline-block cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95 ${
          active ? 'scale-105' : ''
        }`}
      >
        {/* Base layer */}
        <span className="relative text-[#F3F9FF]">{text}</span>
        {/* Overlay layer, revealed via clip-path from cursor (or center, if active) */}
        <span
          className={`wipe-layer absolute inset-0 text-[#F8D752] ${
            active ? 'wipe-active' : ''
          }`}
        >
          {text}
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
          .wipe-layer.wipe-active {
            clip-path: circle(var(--r) at var(--x) var(--y));
          }
        `}</style>
      </div>
    </Link>
  );
};

export default FooterNavLink;