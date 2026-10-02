"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Games", "#games"],
    ["Culture", "#culture"],
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm border-b border-neutral-100" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`text-base font-bold tracking-tight transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}>
          Arkline Games
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm transition-colors ${scrolled ? "text-neutral-500 hover:text-neutral-900" : "text-white/70 hover:text-white"}`}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:info@arklinegames.com"
            className={`text-sm font-medium px-4 py-2 border transition-colors ${
              scrolled
                ? "border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                : "border-white/50 text-white hover:border-white"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-neutral-900" : "text-white"}`}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-neutral-100">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="text-sm text-neutral-600 hover:text-neutral-900">
                {label}
              </a>
            ))}
            <a href="mailto:info@arklinegames.com" className="text-sm font-medium text-neutral-900 border border-neutral-900 px-4 py-2 text-center">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
