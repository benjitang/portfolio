import Link from 'next/link';

interface LogoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Logo = ({ open, setOpen }: LogoProps) => {
  return (
    <Link href="/" onClick={() => setOpen(false)}>
      <div className={`${open ? 'bg-white hover:bg-[#F8D752]' : 'bg-[#F8D752] hover:bg-white'} lg:w-17 lg:h-17 w-13 h-13 flex items-center justify-center rounded-sm border-0 cursor-pointer transition-colors duration-300 ease-in-out`}>
        <h1 className="text-4xl lg:text-5xl font-source-serif font-bold text-[#2E3F59]">
          bt
        </h1>
      </div>
    </Link>
  );
};

export default Logo;