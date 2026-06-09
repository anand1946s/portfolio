"use client";

import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Resume", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 pt-16 pb-3 flex items-center justify-center relative">

        {/* Social Icons */}
        <div
          className="
            absolute
            left-4
            md:left-2
            top-1/2
            bottom-0
            -translate-y-1/2
            flex
            flex
            flex-row
            gap-8
            md:gap-10
            gap-8
            md:gap-10
          "
        >
          <a
            href="YOUR_INSTAGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            md:flex
            absolute
            left-[85%]
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
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
          className="
            md:hidden
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            flex
            flex-col
            gap-1
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3">
          <div
            className="
              min-w-[180px]
              rounded-xl
              border
              border-neutral-800
              bg-black/80
              backdrop-blur-lg
              p-4
              shadow-lg
            "
          >
            <div className="flex flex-col items-start gap-4 text-sm uppercase tracking-[0.2em]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    hover:text-amber-500
                    transition-colors
                  "
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