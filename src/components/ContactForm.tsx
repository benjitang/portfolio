import React, { useRef } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PointArrowIcon } from './icons/PointArrowIcon';

const ContactForm = () => {
  const submitRef = useRef<HTMLButtonElement>(null);

  const updatePointer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = submitRef.current;
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-10">
        <div className="flex lg:flex-row flex-col gap-10 w-full">
          <div className="group flex flex-1 flex-col gap-2">
            <h6 className="text-xl xl:text-2xl font-medium transition-colors duration-300 text-[#C1C5C9]/80 group-focus-within:text-[#F3F9FF]">
              NAME
            </h6>
            <Input
              className="outline-none ring-0 rounded-none border-0 border-b border-[#C1C5C9]/80 bg-transparent px-0 !pb-6 py-1 !h-auto shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:border-[#F3F9FF] focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90"
              placeholder="YOUR NAME"
            />
          </div>

          <div className="group flex flex-1 flex-col gap-2">
            <h6 className="text-xl xl:text-2xl font-medium transition-colors duration-300 text-[#C1C5C9]/80 group-focus-within:text-[#F3F9FF]">
              EMAIL
            </h6>
            <Input
              className="outline-none ring-0 rounded-none border-0 border-b border-[#C1C5C9]/80 bg-transparent px-0 !pb-6 py-1 !h-auto shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:border-[#F3F9FF] focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90"
              placeholder="YOUR EMAIL"
            />
          </div>
        </div>
        <div className="group flex flex-1 flex-col gap-2">
          <h6 className="text-xl xl:text-2xl font-medium transition-colors duration-300 text-[#C1C5C9]/80 group-focus-within:text-[#F3F9FF]">
            MESSAGE
          </h6>
          <Textarea
            className="outline-none ring-0 rounded-none border-0 border-b border-[#C1C5C9]/80 bg-transparent px-0 !pb-6 py-1 h-40 max-h-40 shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:border-[#F3F9FF] focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90 "
            placeholder="YOUR MESSAGE"
          />
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <button
          ref={submitRef}
          type="submit"
          onMouseEnter={updatePointer}
          onMouseLeave={updatePointer}
          className="submit-wipe group relative flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95"
        >
          {/* Base layer */}
          <span className="relative flex flex-row items-center gap-3 text-[#F8D752]">
            <h6 className="text-xl xl:text-2xl font-base transition-colors duration-300 tracking-tight">
              SUBMIT
            </h6>
            <PointArrowIcon className="w-6 h-8 xl:w-8 xl:h-8 fill-[#F8D752]" />
          </span>
          {/* Overlay layer, revealed via clip-path from cursor */}
          <span className="wipe-layer absolute inset-0 flex flex-row items-center gap-3 text-[#F3F9FF] pointer-events-none">
            <h6 className="text-xl xl:text-2xl font-base transition-colors duration-300 tracking-tight">
              SUBMIT
            </h6>
            <PointArrowIcon className="w-6 h-8 xl:w-8 xl:h-8 fill-[#F3F9FF]" />
          </span>
          <style jsx>{`
            .submit-wipe {
              --x: 50%;
              --y: 50%;
              --r: 0px;
            }
            .wipe-layer {
              clip-path: circle(0px at var(--x) var(--y));
              transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .submit-wipe:hover .wipe-layer {
              clip-path: circle(var(--r) at var(--x) var(--y));
            }
          `}</style>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
