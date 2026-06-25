import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import 'simplebar-react/dist/simplebar.min.css';
import Navbar from '@/components/layout/Navbar';
import { ScrollbarProvider } from '@/components/ScrollbarProvider';

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/neuemontreal/NeueMontreal-Light.otf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/fonts/neuemontreal/NeueMontreal-Regular.otf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../public/fonts/neuemontreal/NeueMontreal-Medium.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/fonts/neuemontreal/NeueMontreal-Bold.otf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--font-neue-montreal',
});

const victoryStrikerSans = localFont({
  src: '../../public/fonts/victorystrikersans/VictoryStrikerSans-Regular.otf',
  variable: '--font-victory-striker-sans',
});

export const metadata: Metadata = {
  title: 'Benjamin Tang — Software Engineer Portfolio',
  description: 'Portfolio for Benjamin Tang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${neueMontreal.variable} ${victoryStrikerSans.variable} h-full antialiased`}
    >
      <body className="m-0 p-0 flex flex-col">
        <Navbar fixed={true} />
        <ScrollbarProvider>{children}</ScrollbarProvider>
      </body>
    </html>
  );
}
