'use client';
import { useRef, useEffect, useCallback } from 'react';
import { TransitionRouter } from 'next-transition-router';
import gsap from 'gsap';

const ROWS = 4;
const COLS = 16;

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const transitionGridRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  const createTransitionGrid = useCallback(() => {
    if (!transitionGridRef.current) return;
    const container = transitionGridRef.current;
    container.innerHTML = '';
    blocksRef.current = [];

    const blockWidth = window.innerWidth / COLS;
    const blockHeight = window.innerHeight / ROWS;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const block = document.createElement('div');
        block.className = 'transition-block';
        block.style.cssText = `
          width: ${blockWidth + 1}px;
          height: ${blockHeight + 1}px;
          left: ${col * blockWidth}px;
          top: ${row * blockHeight}px;
          transform-origin: ${row % 2 === 0 ? 'left' : 'right'} center;
        `;
        container.appendChild(block);
        blocksRef.current.push(block);
      }
    }
    gsap.set(blocksRef.current, { scaleX: 0 });
  }, []);

  useEffect(() => {
    createTransitionGrid();
    window.addEventListener('resize', createTransitionGrid);
    return () => window.removeEventListener('resize', createTransitionGrid);
  }, [createTransitionGrid]);

  const getRowBlocks = (row: number): HTMLDivElement[] =>
    blocksRef.current.slice(row * COLS, row * COLS + COLS);

  const animateIn = (onComplete: () => void): gsap.core.Timeline => {
    const t1 = gsap.timeline({ onComplete });
    ([0, 1, 2, 3] as const).forEach((row) => {
      const blocks = getRowBlocks(row);
      t1.to(
        blocks,
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power3.inOut',
          stagger: {
            each: 0.025,
            from: row % 2 === 0 ? 'start' : 'end',
          },
        },
        '<',
      );
    });
    return t1;
  };

  const animateOut = (onComplete: () => void): gsap.core.Timeline => {
    const t1 = gsap.timeline({ onComplete });
    ([0, 1, 2, 3] as const).forEach((row) => {
      const blocks = getRowBlocks(row);
      t1.to(
        blocks,
        {
          scaleX: 0,
          duration: 0.6,
          ease: 'power3.inOut',
          stagger: {
            each: 0.025,
            from: row % 2 === 0 ? 'start' : 'end',
          },
        },
        '<',
      );
    });
    return t1;
  };

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const t1 = animateIn(next);
        return () => t1.kill();
      }}
      enter={(next) => {
        const t1 = animateOut(next);
        return () => t1.kill();
      }}
    >
      {/* Overlay grid — fixed, pointer-events:none, sits above content */}
      <div ref={transitionGridRef} className="transition-grid" />

      {/* Page content rendered normally below */}
      {children}
    </TransitionRouter>
  );
}
