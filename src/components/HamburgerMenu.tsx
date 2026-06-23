'use client';

import { useState } from "react";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: number;
  barHeight?: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  className?: string;
  barClassName?: string;
}

const HamburgerMenu = ({ 
  open, 
  setOpen, 
  size = 15,
  barHeight,
  color = 'white',
  hoverColor = '#F8D752',
  activeColor = '#F8D752',
  className = '', 
  barClassName = '' 
}: HamburgerMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate bar height proportionally based on size, default to 4 for size 56
  const calculatedBarHeight = barHeight ?? Math.round(size * (4 / 56));
  
  const currentColor = open 
    ? (isHovered ? color : activeColor)
    : (isHovered ? hoverColor : color);

  return (
    <button
      className={`relative flex justify-center items-center bg-transparent border-none cursor-pointer transition-colors lg:px-[3.5em] px-4 pb-3 lg:pb-8 ${className}`}
      style={{ width: size, height: size }}
      onClick={() => setOpen(!open)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`absolute transition-all duration-250 ease-out ${barClassName}`}
        style={{
          width: size,
          height: calculatedBarHeight,
          borderRadius: 0,
          background: currentColor,
          transform: open ? 'translateY(0) rotate(45deg)' : `translateY(-${size * 0.14}px)`,
          transitionProperty: 'background, transform',
        }}
      />
      <span
        className={`absolute transition-all duration-250 ease-out ${barClassName}`}
        style={{
          width: size,
          height: calculatedBarHeight,
          borderRadius: 0,
          background: currentColor,
          transform: open ? 'translateY(0) rotate(-45deg)' : `translateY(${size * 0.14}px)`,
          transitionProperty: 'background, transform',
        }}
      />
    </button>
  );
};

export default HamburgerMenu;