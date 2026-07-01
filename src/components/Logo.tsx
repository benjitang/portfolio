import Link from 'next/link';
import { LogoIcon } from './icons/LogoIcon';

interface LogoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  fixed: boolean;
}

const Logo = ({ open, setOpen, className, fixed }: LogoProps) => {
  const colorClass = open
    ? 'fill-white hover:fill-[#F8D752]'
    : fixed
      ? 'fill-white hover:fill-orange-300'
      : 'fill-[#F8D752] hover:fill-white';

  return (
    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="inline-flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-1 active:scale-90 active:translate-y-0"
    >
      <LogoIcon
        className={`${colorClass} lg:w-20 lg:h-20 w-16 h-16 ${className ?? ''}`.trim()}
      />
    </Link>
  );
};

export default Logo;