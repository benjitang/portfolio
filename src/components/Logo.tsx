import Link from 'next/link';
import { LogoIcon } from './icons/LogoIcon';

interface LogoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Logo = ({ open, setOpen }: LogoProps) => {
  return (
    <Link href="/" onClick={() => setOpen(false)}>
      {/* <div className={`${open ? 'bg-white hover:bg-[#F8D752]' : 'bg-[#F8D752] hover:bg-white'} lg:w-17 lg:h-17 w-13 h-13 flex items-center justify-center rounded-sm border-0 cursor-pointer transition-colors duration-300 ease-in-out`}>
        <h1 className="text-4xl lg:text-5xl font-source-serif font-bold text-[#2E3F59]">
          bt
        </h1>
      </div> */}
      <LogoIcon className={`${open ? 'fill-white hover:fill-[#F8D752]' : 'fill-[#F8D752] hover:fill-white'} lg:w-20 lg:h-20 w-16 h-16`} />
    </Link>
  );
};

export default Logo;