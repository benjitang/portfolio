'use client';
import { GraphViewIcon } from '@/components/icons/GraphViewIcon';
import { ListViewIcon } from '@/components/icons/ListViewIcon';
import { useState } from 'react';

const Works = () => {
  const [graph, setGraph] = useState(true);
  return (
    <div className="bg-[#F3F9FF] min-h-screen px-[8%] mx-auto">
      <div className="flex flex-col justify-center py-40 pb-32 xl:pb-40">
        <div className="font-victory-striker-sans text-8xl lg:pt-24 pt-8 flex flex-col gap-8 leading-[130%] h-full">
          <h3 className="text-[#274D6F]">
            {' '}
            <span className="hidden xl:inline"> Check Out Some of my</span>{' '}
            Projects{' '}
          </h3>
          <h3 className="text-[#2E3F59]">
            {' '}
            <span className="hidden xl:inline"> Explore my</span> Portfolio{' '}
          </h3>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row gap-10">
          <div
            onClick={() => setGraph(true)}
            className={`transition-colors duration-300 ease-in-out cursor-pointer border-1 p-6 rounded-full border-[#354156] ${graph ? '!bg-[#1C1D20]' : '!bg-[#F3F9FF]'}`}
          >
            {' '}
            <GraphViewIcon
              className={`w-8 ${graph ? '!fill-[#F3F9FF]' : '!fill-[#354156]'}`}
            />
          </div>
          <div
            onClick={() => setGraph(false)}
            className={`transition-colors duration-300 ease-in-out cursor-pointer border-1 p-6 rounded-full border-[#354156] ${!graph ? '!bg-[#1C1D20]' : '!bg-[#F3F9FF]'}`}
          >
            {' '}
            <ListViewIcon
              className={`w-8 ${!graph ? '!fill-[#F3F9FF]' : '!fill-[#354156]'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
