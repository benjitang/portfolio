'use client';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useRef, ReactNode } from 'react';

export function ScrollbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const simpleBarRef = useRef<any>(null);

  return (
    <SimpleBar 
      ref={simpleBarRef}
      style={{ height: '100vh' }}
    >
      {children}
    </SimpleBar>
  );
}