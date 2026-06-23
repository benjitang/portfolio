"use client";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu"
import Logo from "../Logo"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container-nav bg-[#2E3F59]">
      <Logo />
      <HamburgerMenu open={open} setOpen={setOpen} size={56} color="#F8D752" />
    </nav>
  )
}

export default Navbar


