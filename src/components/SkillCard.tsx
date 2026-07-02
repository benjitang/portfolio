'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface SkillCardProps {
  title: string;
  tools: string[];
}

export default function SkillCard({ title, tools }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const showGear = title.toLowerCase().includes('language');
  const showBot = title.toLowerCase().includes('machine');
  const showDatabase = title.toLowerCase().includes('database');
  const showCloud = title.toLowerCase().includes('cloud');
  const showGraphic = title.toLowerCase().includes('graphic');
  const showStyle = title.toLowerCase().includes('ui');

  const updatePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = toggleRef.current;
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
    <div className="relative p-5 pb-4 h-96 lg:h-80 flex flex-col overflow-hidden">
      {/* Color wipe layer */}
      <div
        className="absolute inset-0 bg-[#2E3F59] transition-transform duration-500 ease-in-out z-0"
        style={{
          transformOrigin: 'bottom',
          transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
        }}
      />

      {/* Border layer, clipped to this card only, synced to the same 500ms as the wipe */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 ease-in-out"
        style={{
          border: '1px solid #F3F9FF',
          opacity: expanded ? 1 : 0,
        }}
      />

      <div className="relative z-20 grid flex-1 min-h-0">
        {/* Collapsed content */}
        <div
          className={`col-start-1 row-start-1 flex flex-col lg:gap-16 gap-20 transition-opacity duration-300 ${
            expanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {showGear && (
            <Image src="/gear.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          {showBot && (
            <Image src="/bot.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          {showDatabase && (
            <Image src="/database.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          {showCloud && (
            <Image src="/cloud.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          {showGraphic && (
            <Image src="/graphic.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          {showStyle && (
            <Image src="/style.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
          )}
          <h4 className="text-4xl lg:text-3xl text-[#2E3F59] font-victory-striker-sans leading-[150%]">
            {title}
          </h4>
        </div>

        {/* Expanded content */}
        <div
          className={`pt-3 col-start-1 row-start-1 flex flex-wrap content-start gap-3 overflow-y-auto transition-opacity duration-300 ${
            expanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-[#F3F9FF] border border-[#F3F9FF]/40 rounded-full px-4 py-2 text-base lg:text-lg whitespace-nowrap h-fit"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex text-end justify-end">
        <div
          ref={toggleRef}
          role="button"
          tabIndex={0}
          onClick={() => setExpanded((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setExpanded((v) => !v);
            }
          }}
          onMouseEnter={updatePointer}
          onMouseLeave={updatePointer}
          className="skill-toggle relative inline-flex cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95"
        >
          <span
            className="relative uppercase underline underline-offset-4 lg:text-xl text-lg transition-colors duration-500"
            style={{ color: expanded ? 'rgba(243,249,255,0.9)' : 'rgba(46,63,89,0.9)' }}
          >
            {expanded ? 'Close' : 'See All'}
          </span>
          <span
            className="wipe-layer absolute inset-0 uppercase underline underline-offset-4 lg:text-xl text-lg"
            style={{ color: expanded ? '#F8D752' : '#000000' }}
          >
            {expanded ? 'Close' : 'See All'}
          </span>
          <style jsx>{`
            .skill-toggle {
              --x: 50%;
              --y: 50%;
              --r: 0px;
            }
            .wipe-layer {
              clip-path: circle(0px at var(--x) var(--y));
              transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .skill-toggle:hover .wipe-layer {
              clip-path: circle(var(--r) at var(--x) var(--y));
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}