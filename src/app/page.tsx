'use client';
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
