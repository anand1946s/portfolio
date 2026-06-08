"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Resume", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 pt-8 pb-3 flex items-center justify-center relative">
        
        {/* Logo */}
        {/* <div className="text-3xl font-bold">
          A
        </div> */}

        {/* Desktop Menu */}
        <div
  className="
    hidden
    md:flex
    absolute
    left-1/2
    -translate-x-1/2
    gap-16
    text-sm
    tracking-[0.3em]
    uppercase
  "
>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group
                relative
                transition-colors
                duration-300
                hover:text-amber-500
              "
            >
              {item.name}

              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-0.5 w-0 bg-amber-500 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
          <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
        </button>
      </div>

        {/* Mobile Dropdown (aligned to container) */}
        {menuOpen && (
          <div className="md:hidden mt-3 w-full">
            <div className="mx-auto max-w-6xl px-0 sm:px-6 md:px-8 lg:px-12">
              <div className="flex flex-col items-end gap-3 text-sm uppercase tracking-[0.2em]">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
    </nav>
  );
}