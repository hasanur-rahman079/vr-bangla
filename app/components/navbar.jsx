"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto py-1 px-12 md:px-2">
      <div className="relative flex items-center justify-between z-30 shadow-md">
        <Image
          src="/images/logo1.png"
          width={220}
          height={220}
          alt="LogoVRBangla"
        />

        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      {/* navbar items */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 px-12 bg-[#050712] w-full h-screen overflow-hidden z-20">
          <div className="grid grid-cols-3 md:grid-cols-2 gap-6 pt-20">
            <Link href="/" className="stroke_text">
              Home
            </Link>
            <Link href="/about" className="stroke_text">
              About
            </Link>
            <Link href="/values" className="stroke_text">
              Values
            </Link>
            <Link href="/services" className="stroke_text">
              Services
            </Link>
            <Link href="/portfolio" className="stroke_text">
              Portfolio
            </Link>
            <Link href="/gallery" className="stroke_text">
              Gallery
            </Link>
            <Link href="/team" className="stroke_text">
              Team
            </Link>
            <Link href="/news" className="stroke_text">
              News
            </Link>
            <Link href="/faq" className="stroke_text">
              Faq
            </Link>
            <Link href="/contact" className="stroke_text">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
