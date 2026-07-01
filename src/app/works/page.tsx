'use client';
import { GraphViewIcon } from '@/components/icons/GraphViewIcon';
import { ListViewIcon } from '@/components/icons/ListViewIcon';
import { useEffect, useRef, useState } from 'react';
import ProjectCard, { type Project } from '@/components/ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';
import { randomColors, randomImages } from '@/constants';
import { fetchGithubProjects } from '@/lib/github';

const Works = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [graph, setGraph] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const graphBtnRef = useRef<HTMLDivElement>(null);
  const listBtnRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let cancelled = false;

    fetchGithubProjects()
      .then((data) => {
        if (!cancelled) setProjects(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load projects');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  const updatePointer = (
    e: React.MouseEvent<HTMLElement>,
    ref: React.RefObject<HTMLElement | null>
  ) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--x', `${x}%`);
    el.style.setProperty('--y', `${y}%`);
  };

  return (
    <div className="bg-[#F3F9FF] min-h-screen px-[8%] mx-auto">
      <div className="flex flex-col justify-center py-40 pb-32 xl:pb-40">
        <div className="font-victory-striker-sans text-8xl lg:pt-24 pt-8 flex flex-col gap-8 leading-[130%] h-full">
          <h3 className="text-[#274D6F]">
            <span className="hidden xl:inline"> Check Out Some of my</span>{' '}
            Projects
          </h3>
          <h3 className="text-[#2E3F59]">
            <span className="hidden xl:inline"> Explore my</span> Portfolio
          </h3>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex flex-row lg:gap-10 gap-8">
          <div
            ref={graphBtnRef}
            onClick={() => setGraph(true)}
            onMouseEnter={(e) => updatePointer(e, graphBtnRef)}
            onMouseLeave={(e) => updatePointer(e, graphBtnRef)}
            className={`view-toggle-button group relative cursor-pointer border p-6 rounded-full border-[#354156] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-1 active:scale-90 active:translate-y-0 ${graph ? 'bg-[#1C1D20]' : 'bg-[#F3F9FF]'}`}
          >
            <GraphViewIcon
              className={`relative z-10 w-8 transition-colors duration-300 ease-in-out ${graph ? '!fill-[#F3F9FF]' : '!fill-[#354156] group-hover:!fill-[#F3F9FF]'}`}
            />
          </div>
          <div
            ref={listBtnRef}
            onClick={() => setGraph(false)}
            onMouseEnter={(e) => updatePointer(e, listBtnRef)}
            onMouseLeave={(e) => updatePointer(e, listBtnRef)}
            className={`view-toggle-button group relative cursor-pointer border p-6 rounded-full border-[#354156] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-1 active:scale-90 active:translate-y-0 ${!graph ? 'bg-[#1C1D20]' : 'bg-[#F3F9FF]'}`}
          >
            <ListViewIcon
              className={`relative z-10 w-8 transition-colors duration-300 ease-in-out ${!graph ? 'fill-[#F3F9FF]' : 'fill-[#354156] group-hover:!fill-[#F3F9FF]'}`}
            />
          </div>
        </div>
      </div>

      {loading && (
        <p className="text-center py-20 text-[#354156] text-xl">
          Loading projects...
        </p>
      )}

      {error && (
        <p className="text-center py-20 text-red-500 text-xl">{error}</p>
      )}

      {!loading && !error && (
        <motion.div
          layout
          className={`grid gap-12 mt-14 bg-[#F3F9FF] ${
            graph ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <AnimatePresence mode="sync">
            {visibleProjects.map((project) =>
              graph ? (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <ProjectCard
                    project={project}
                    color={randomColors[project.id % randomColors.length]}
                    imageName={randomImages[project.id % randomImages.length]}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="border-b border-[#2E3F59]/40 pb-8 pt-8 flex justify-between items-center"
                >
                  <h5 className="lg:text-2xl text-xl text-[#354156]">
                    {project.title}
                  </h5>
                  <span className="lg:text-2xl text-xl  text-[#354156]">
                    {project.year}
                  </span>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {!loading && !error && projects.length > 6 && (
        <div className="flex justify-center py-20 pb-28">
          <button
            ref={loadMoreRef}
            onClick={() => setShowMore(!showMore)}
            onMouseEnter={(e) => updatePointer(e, loadMoreRef)}
            onMouseLeave={(e) => updatePointer(e, loadMoreRef)}
            className="load-more-button relative font-medium text-xl lg:text-2xl border bg-[#1C1D20] border-[#354156] text-[#F3F9FF] px-10 py-5 rounded-full overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-300 ease-in-out">
              {showMore ? 'Show Less' : 'Load More Work'}
            </span>
          </button>
        </div>
      )}

      <style jsx>{`
        .view-toggle-button {
          --x: 50%;
          --y: 50%;
        }
        .view-toggle-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1c1d20;
          clip-path: circle(0% at var(--x) var(--y));
          transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        .view-toggle-button:hover::before {
          clip-path: circle(150% at var(--x) var(--y));
        }

        .load-more-button {
          --x: 50%;
          --y: 50%;
        }
        .load-more-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f3f9ff;
          clip-path: circle(0% at var(--x) var(--y));
          transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        .load-more-button:hover::before {
          clip-path: circle(150% at var(--x) var(--y));
        }
        .load-more-button:hover span {
          color: #354156;
        }
      `}</style>
    </div>
  );
};

export default Works;