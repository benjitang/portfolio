"use client";
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/layout/Navbar';
import Socials from '@/components/Socials';
import { contactDetails } from '@/constants';
import SimpleBar from 'simplebar-react';

const Contact = () => {
  return (
    <SimpleBar style={{ height: '100vh' }}>
      <div className="min-h-screen bg-[#2E3F59] text-[#F3F9FF] overflow-x-hidden">
        <Navbar />
        <div className="px-[6%] mx-auto max-w-480 pt-4 flex flex-row gap-[10%] pb-10">
          <div className="flex-2">
            <div className="font-victory-striker-sans uppercase text-8xl flex flex-col gap-12">
              <h2 className="text-[#61ACF0]"> Contact Me</h2>
              <h2 className="text-[#F3F9FF]"> React Out </h2>
            </div>

            <div className="pt-18">
              <ContactForm />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-24">
            <div className="flex flex-col gap-10">
              <h3 className="font-victory-striker-sans text-5xl">
                {' '}
                Contact Details
              </h3>
              <div className="text-2xl flex flex-col gap-5">
                <h5> {contactDetails.email} </h5>
                <h5> {contactDetails.phone} </h5>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <h3 className="font-victory-striker-sans text-5xl">
                {' '}
                Contact Details
              </h3>
              <div className="text-2xl flex flex-col gap-5">
                <h5> Benjamin Tang </h5>
                <h5> Open for Work </h5>
                <h5> Flushing, NY </h5>
              </div>
            </div>

            <Socials />
          </div>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Contact;
