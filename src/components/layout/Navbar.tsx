'use client';
import { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../Logo';
import { navLinks } from '@/constants';
import Socials from '../Socials';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="container-nav z-60">
        <Logo open={open} setOpen={setOpen} />
        <HamburgerMenu
          open={open}
          setOpen={setOpen}
          size={56}
          color="#F8D752"
          hoverColor="#F3F9FF"
          activeColor="#F3F9FF"
          className="lg:block hidden"
        />
        <HamburgerMenu
          open={open}
          setOpen={setOpen}
          size={44}
          barHeight={3}
          color="#F8D752"
          hoverColor="#F3F9FF"
          activeColor="#F3F9FF"
          className="lg:hidden block"
        />
      </nav>

      {/* Full Screen Overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#2E3F59] bg-opacity-50 z-40 flex flex-col justify-center items-center lg:gap-20 gap-18 pt-26">
          <div className="flex flex-col lg:gap-9 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block font-victory-striker-sans text-center lg:text-7xl text-6xl text-[#F3F9FF] hover:text-[#F8D752] transition-colors duration-300 ease-in-out"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="px-8">
            <Socials />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
