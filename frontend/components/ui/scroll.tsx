"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        "flex flex-col items-center fixed bottom-8 left-6 z-40 text-gray-400 transform transition-all duration-300 " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none")
      }
      aria-hidden={!visible}
    >
      <div className="text-sm tracking-widest select-none">Scroll</div>
      <FaChevronDown className="mt-1 text-xl animate-bounce" />
    </div>
  );
}
