'use client';
import ContactForm from '@/components/ContactForm';
import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import Navbar from '@/components/layout/Navbar';
import Socials from '@/components/Socials';
import TextWipeLink from '@/components/TextWipeLink';
import { contactDetails } from '@/constants';
import SimpleBar from 'simplebar-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#2E3F59] text-[#F3F9FF] overflow-x-hidden my-auto">
      <Navbar />
      <div className="px-[6%] mx-auto max-w-480 min-h-[calc(100vh-128px)] lg:min-h-[calc(100vh-160px)] pt-4 flex xl:flex-row flex-col gap-[10%] xl:items-center xl:pb-10 pb-20">
        <div className="flex-2 flex flex-col justify-between items-between h-full">
          <div className="font-victory-striker-sans uppercase text-7xl xl:text-8xl flex flex-col xl:gap-12 gap-10 pt-8 xl:pt-4">
            <h2 className="text-[#61ACF0]"> Contact Me</h2>
            <h2 className="text-[#F3F9FF]"> Reach Out </h2>
          </div>

          <div className="lg:pt-18 pt-24">
            <ContactForm />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start gap-24 pt-40 lg:pt-12 xl:pt-0 h-full">
          <div className="flex flex-col gap-10">
            <h3 className="font-victory-striker-sans lg:text-5xl text-4xl">
              {' '}
              Contact Details
            </h3>
            <div className="text-xl lg:text-2xl flex flex-col gap-5">
              <TextWipeLink
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactDetails.email}`}
                text={contactDetails.email}
                baseColor="#FFFFFF"
                hoverColor="#F8D752"
                textClassName="text-base text-xl lg:text-2xl"
                iconClassName="w-6 lg:w-7"
                gapClassName="gap-2 lg:gap-3"
                uppercase={false}
                newTab
              />
              <h5> {contactDetails.phone} </h5>
            </div>
          </div>

          <div className="flex flex-col gap-10 pb-12 lg:pb-0">
            <h3 className="font-victory-striker-sans lg:text-5xl text-4xl">
              {' '}
              Business Details
            </h3>
            <div className="text-xl lg:text-2xl flex flex-col gap-5">
              <h5> Benjamin Tang </h5>
              <h5> Open for Work </h5>
              <h5> Flushing, NY </h5>
            </div>
          </div>
          <div className="w-full md:w-[80%] xl:w-full mx-auto">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
