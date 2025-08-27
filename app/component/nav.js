'use client';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Cabs", href: "/cabs" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md border-gray-700">
      <div className="mx-auto max-w-[1100px] flex justify-between items-center px-4 py-3 sm:py-4 ">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold tracking-wide hover:text-red-500 transition duration-200">
          Tripway<span className="text-red-600">Holidays</span>
        </Link>

        {/* Desktop & Tablet Nav Links */}
        <ul className="hidden md:flex gap-6 items-center text-sm text-black font-bold">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href} className="hover:text-red-500 transition duration-200 ">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button (Tablet & Desktop only) */}
        <div className="hidden md:flex">
          <Link href="/booknow">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-white font-semibold text-sm">
              Book Now
            </button>
          </Link>
        </div>

        {/* Menu icon (mobile/tablet) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-transparent px-4 pb-4 space-y-3 text-sm font-medium text-black">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block py-2 border-b border-gray-700 hover:text-red-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booknow">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}


