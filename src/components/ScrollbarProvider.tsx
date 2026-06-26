'use client';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useRef, ReactNode } from 'react';

export function ScrollbarProvider({ children, isDesktop }: { children: ReactNode; isDesktop: boolean }) {
  const simpleBarRef = useRef<any>(null);

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <SimpleBar ref={simpleBarRef} style={{ height: '100vh' }}>
      {children}
    </SimpleBar>
  );
}