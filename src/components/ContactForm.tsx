import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PointArrowIcon } from './icons/PointArrowIcon';

const ContactForm = () => {
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
        <div className="group flex flex-row gap-3 text-[#F8D752] hover:text-[#F3F9FF] cursor-pointer">
          <h6 className="text-xl xl:text-2xl font-base transition-colors duration-300 tracking-tight">
            SUBMIT
          </h6>
          <PointArrowIcon className="w-6 h-8 xl:w-8 xl:h-8" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
