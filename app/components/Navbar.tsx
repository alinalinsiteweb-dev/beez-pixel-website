"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BP</span>
            </div>
            <span className="font-bold text-xl text-blue-600 hidden sm:inline">
              Beez Pixel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#servicii"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Servicii
            </Link>
            <Link
              href="#portofoliu"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Portofoliu
            </Link>
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="#servicii"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Servicii
            </Link>
            <Link
              href="#portofoliu"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
            >
              Portofoliu
            </Link>
            <Link
              href="#contact"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
