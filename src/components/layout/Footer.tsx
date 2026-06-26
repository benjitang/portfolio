'use client';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <div className="lg:px-[3.5em] px-4 bg-[#2E3F59]">
      hello
    </div>
  );
};

export default Footer;