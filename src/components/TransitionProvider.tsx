'use client';
import { useRef, useEffect, useCallback } from 'react';
import { TransitionRouter } from 'next-transition-router';
import gsap from 'gsap';

const ROWS = 4;
const COLS = 16;

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/works': 'Works',
  '/about': 'About',
  '/contact': 'Contact',
};

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const transitionGridRef = useRef<HTMLDivElement>(null);
  const transitionLabelRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const pendingLabelRef = useRef<string>('');
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const isTransitioningRef = useRef<boolean>(false);

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
    let startY = 0;
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleLinkClick = (e: MouseEvent | TouchEvent) => {
      console.log('link clicked', (e.target as HTMLElement).closest('a')?.href);
      // Block clicks during transition
      if (isTransitioningRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      // If touch moved more than 10px, it's a scroll — ignore
      if (e instanceof TouchEvent) {
        const touch = e.changedTouches[0];
        const distY = Math.abs(touch.clientY - startY);
        const distX = Math.abs(touch.clientX - startX);
        if (distY > 10 || distX > 10) return;
      }

      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const path = href.split('?')[0].replace(/\/$/, '') || '/';
      pendingLabelRef.current = ROUTE_LABELS[path] ?? '';
    };

    document.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });
    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener(
      'touchend',
      handleLinkClick as EventListener,
      true,
    );

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('click', handleLinkClick, true);
      document.removeEventListener(
        'touchend',
        handleLinkClick as EventListener,
        true,
      );
    };
  }, []);

  useEffect(() => {
    createTransitionGrid();
    window.addEventListener('resize', createTransitionGrid);
    return () => window.removeEventListener('resize', createTransitionGrid);
  }, [createTransitionGrid]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Block clicks during transition
      if (isTransitioningRef.current) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      const path = href.split('?')[0].replace(/\/$/, '') || '/';
      pendingLabelRef.current = ROUTE_LABELS[path] ?? '';
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => document.removeEventListener('click', handleLinkClick, true);
  }, []);

  const killActiveTimeline = () => {
    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
      activeTimelineRef.current = null;
    }
  };

  const getRowBlocks = (row: number): HTMLDivElement[] =>
    blocksRef.current.slice(row * COLS, row * COLS + COLS);

  const animateIn = (
    onComplete: () => void,
    label?: string,
  ): gsap.core.Timeline => {
    killActiveTimeline();
    isTransitioningRef.current = true;

    const t1 = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    if (transitionLabelRef.current) {
      transitionLabelRef.current.textContent = label ?? '';
      gsap.set(transitionLabelRef.current, { opacity: 0 });
    }

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

    if (transitionLabelRef.current) {
      t1.to(transitionLabelRef.current, { opacity: 1, duration: 0.2 }, 0.55);
    }

    activeTimelineRef.current = t1;
    return t1;
  };

  const animateOut = (onComplete: () => void): gsap.core.Timeline => {
    killActiveTimeline();

    const t1 = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
        onComplete();
      },
    });

    if (transitionLabelRef.current) {
      t1.to(transitionLabelRef.current, { opacity: 0, duration: 0.15 });
    }

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

    activeTimelineRef.current = t1;
    return t1;
  };

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        console.log('leave fired', pendingLabelRef.current);
        const t1 = animateIn(next, pendingLabelRef.current);
        return () => t1.kill();
      }}
      enter={(next) => {
        const t1 = animateOut(next);
        return () => t1.kill();
      }}
    >
      <div ref={transitionGridRef} className="transition-grid" />
      <div ref={transitionLabelRef} className="transition-label" />
      {children}
    </TransitionRouter>
  );
}
