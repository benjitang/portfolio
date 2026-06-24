'use client';

import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import TextType from '@/components/TextType';
import Navbar from '@/components/layout/Navbar';
import Socials from '@/components/Socials';
import { LinkArrowIcon } from '@/components/icons/LinkArrowIcon';
import TitlePage from '@/components/TitlePage';
import SimpleBar from 'simplebar-react';

export default function Home() {
  return (
    <div>
      <SimpleBar 
      style={{ height: '100vh' }}
    >
        <TitlePage />
        <div className="h-100"></div>
      </SimpleBar>
    </div>
  );
}
