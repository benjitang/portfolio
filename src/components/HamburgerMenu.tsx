'use client';

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: number;
  color?: string;
  className?: string;
  barClassName?: string;
}

const HamburgerMenu = ({ open, setOpen, size = 15, color = 'white', className = '', barClassName = '' }: HamburgerMenuProps) => {
  return (
    <button
      className={`relative flex justify-center items-center bg-transparent border-none cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      onClick={() => setOpen(!open)}
    >
      <span
        className={`absolute transition-all duration-250 ease-out ${barClassName}`}
        style={{
          width: size,
          height: 4,
          borderRadius: 0,
          background: color,
          transform: open ? 'translateY(0) rotate(45deg)' : `translateY(-${size * 0.14}px)`,
        }}
      />
      <span
        className={`absolute transition-all duration-250 ease-out ${barClassName}`}
        style={{
          width: size,
          height: 4,
          borderRadius: 0,
          background: color,
          transform: open ? 'translateY(0) rotate(-45deg)' : `translateY(${size * 0.14}px)`,
        }}
      />
    </button>
  );
};

export default HamburgerMenu;