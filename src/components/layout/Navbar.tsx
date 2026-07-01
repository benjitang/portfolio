'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../Logo';
import { navLinks } from '@/constants';
import Socials from '../Socials';
import gsap from 'gsap';

const Navbar = ({ fixed = false }: { fixed?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpen = (value: boolean) => {
    if (value) {
      setVisible(true);
      setOpen(true);
      window.dispatchEvent(
        new CustomEvent('navOverlayChange', { detail: { open: true } }),
      );
    } else {
      // Animate out first, then hide
      if (overlayRef.current && contentRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        });
        gsap.to(overlayRef.current, {
          clipPath: 'circle(0% at 50% 0%)',
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            setOpen(false);
            setVisible(false);
            window.dispatchEvent(
              new CustomEvent('navOverlayChange', { detail: { open: false } }),
            );
          },
        });
      } else {
        setOpen(false);
        setVisible(false);
        window.dispatchEvent(
          new CustomEvent('navOverlayChange', { detail: { open: false } }),
        );
      }
    }
  };

  const handleNavigate = () => {
    setOpen(false);
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent('navOverlayChange', { detail: { open: false } }),
    );
  };

  // Animate in when visible becomes true
  useEffect(() => {
    if (visible && overlayRef.current && contentRef.current) {
      setTimeout(() => {
        gsap.fromTo(
          overlayRef.current!,
          { clipPath: 'circle(0% at 50% 0%)' },
          {
            clipPath: 'circle(150% at 50% 0%)',
            duration: 0.7,
            ease: 'power3.inOut',
          },
        );
        gsap.fromTo(
          contentRef.current!,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, delay: 0.3, ease: 'power2.out' },
        );
      }, 10);
    }
  }, [visible]);

  // Sync open state across both navbar instances
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      const isOpen = customEvent.detail.open;
      setOpen(isOpen);
      if (!isOpen) setVisible(false);
      if (fixed) {
        if (isOpen) setScrolled(true);
      }
    };
    window.addEventListener('navOverlayChange', handler);
    return () => window.removeEventListener('navOverlayChange', handler);
  }, [fixed]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('nav-overlay-open');
    } else {
      document.body.classList.remove('nav-overlay-open');
    }
    return () => document.body.classList.remove('nav-overlay-open');
  }, [open]);

  useEffect(() => {
    if (!fixed) return;

    if (open) {
      setScrolled(true);
      return;
    }

    const shouldWatchScroll = pathname === '/' || pathname === '/contact';
    if (!shouldWatchScroll) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      const scrollElement = document.querySelector(
        '.simplebar-content-wrapper',
      );
      if (scrollElement) {
        setScrolled((scrollElement as HTMLElement).scrollTop > 240);
      } else {
        setScrolled(window.scrollY > 240);
      }
    };

    handleScroll();
    const scrollElement = document.querySelector('.simplebar-content-wrapper');
    scrollElement?.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => {
      scrollElement?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixed, pathname, open]);

  const navbarClasses = `container-nav z-[60] transition-all duration-300 ${
    fixed
      ? `fixed inset-x-0 top-0 ${!open ? 'mix-blend-difference' : ''}`
      : 'relative'
  } ${fixed && !scrolled && !open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

  return (
    <>
      {(!open || visible) && (
        <nav className={navbarClasses}>
          <Logo open={open} setOpen={handleOpen} fixed={fixed} />
          <HamburgerMenu
            open={open}
            setOpen={handleOpen}
            size={56}
            color={fixed && !open ? '#FFFFFF' : '#F8D752'}
            hoverColor={fixed && !open ? 'oklch(83.7% 0.128 66.29)' : '#F3F9FF'}
            activeColor="#F3F9FF"
            className="lg:block hidden"
            mixBlend={fixed}
          />
          <HamburgerMenu
            open={open}
            setOpen={handleOpen}
            size={44}
            barHeight={3}
            color={fixed && !open ? '#FFFFFF' : '#F8D752'}
            hoverColor={fixed && !open ? 'oklch(83.7% 0.128 66.29)' : '#F3F9FF'}
            activeColor="#F3F9FF"
            className="lg:hidden block"
            mixBlend={fixed}
          />
        </nav>
      )}

      {visible && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[40] flex flex-col justify-center items-center lg:gap-20 gap-18 pt-26"
          style={{
            backgroundColor: '#2E3F59',
            clipPath: 'circle(0% at 50% 0%)',
            boxShadow: '0 0 0 3px #F8D752',
          }}
        >
          <div
            ref={contentRef}
            className="flex flex-col items-center lg:gap-20 gap-18 w-full opacity-0"
          >
            <div className="flex flex-col lg:gap-9 gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block font-victory-striker-sans text-center lg:text-7xl text-6xl transition-colors duration-300 ease-in-out hover:text-[#F8D752] ${
                      isActive ? 'text-[#F8D752]' : 'text-[#F3F9FF]'
                    }`}
                    onClick={(event) => {
                      if (isActive) {
                        event.preventDefault();
                        return;
                      }
                      handleNavigate();
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="px-8">
              <Socials />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
