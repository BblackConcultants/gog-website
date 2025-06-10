'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-[#3399FF]' : 'text-[#1A2B4C] hover:text-[#3399FF]';
  };

  return (
    <nav className="bg-[#FFFFFF] shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-32">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Gospel of Grace Academy and University International"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
              <span className="ml-3 text-xl font-semibold text-[#1A2B4C] hidden md:block">
                Gospel of Grace University
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={isActive('/')}>Home</Link>
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 ${isActive('/about')} group`}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About
                <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-opacity ${isAboutOpen ? 'opacity-100' : 'opacity-0 invisible'}`}>
                <Link 
                  href="/about" 
                  className={`block px-4 py-2 hover:bg-[#F2F2F2] ${isActive('/about') ? 'text-[#3399FF]' : 'text-[#1A2B4C]'}`}
                  onClick={() => setIsAboutOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/about/team" 
                  className={`block px-4 py-2 hover:bg-[#F2F2F2] ${isActive('/about/team') ? 'text-[#3399FF]' : 'text-[#1A2B4C]'}`}
                  onClick={() => setIsAboutOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            </div>
            <Link href="/courses" className={isActive('/courses')}>Courses</Link>
            <Link href="/contact" className={isActive('/contact')}>Contact</Link>
            <Link href="/apply" className="bg-[#1A2B4C] text-white px-4 py-2 rounded-md hover:bg-[#C9A136]">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1A2B4C] hover:text-[#3399FF] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#FFFFFF] shadow-lg">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F2F2F2] ${isActive('/')}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F2F2F2] ${isActive('/about')}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/about/team"
            className={`block px-3 py-2 pl-6 rounded-md text-base font-medium hover:bg-[#F2F2F2] ${isActive('/about/team')}`}
            onClick={() => setIsOpen(false)}
          >
            Our Team
          </Link>
          <Link
            href="/courses"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F2F2F2] ${isActive('/courses')}`}
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>

          <Link
            href="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-[#F2F2F2] ${isActive('/contact')}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/apply"
            className="block px-3 py-2 rounded-md text-base font-medium bg-[#1A2B4C] text-white hover:bg-[#C9A136]"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
