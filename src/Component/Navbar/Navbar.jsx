import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import TopPost from '../TopPost/TopPost';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const productsRef = useRef(null);
  const aboutRef = useRef(null);

  const [productsTimeout, setProductsTimeout] = useState(null);
  const [aboutTimeout, setAboutTimeout] = useState(null);

  const handleMouseEnter = (setDropdownState) => {
    clearTimeout(productsTimeout);
    clearTimeout(aboutTimeout);
    setDropdownState(true);
  };

  const handleMouseLeave = (setDropdownState, ref, setTimeoutState) => {
    const timeoutId = setTimeout(() => {
      if (!ref.current.contains(document.activeElement)) {
        setDropdownState(false);
      }
    }, 100); // Delay for better user experience

    setTimeoutState(timeoutId);
  };

  return (
    <>
      {/* This is the top details section */}
      <TopPost />

      <nav className="bg-white shadow-md relative z-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-[120px]">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-1/2 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and navigation links */}
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link to="/" className="text-black text-2xl font-bold">
                  <img
                    src="https://www.alstonejindal.in/image/logo.png"
                    alt="logoImg"
                    className="w-36 h-16"
                  />
                </Link>
              </div>
              <div className="hidden sm:flex sm:ml-6 space-x-4 h-10 mt-8">
                <Link
                  to="/"
                  className="text-black hover:bg-red-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-all duration-200 ease-in-out"
                >
                  Home
                </Link>

                {/* Products dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(setIsProductsOpen)}
                  onMouseLeave={() => handleMouseLeave(setIsProductsOpen, productsRef, setProductsTimeout)}
                  ref={productsRef}
                >
                  <button
                    className="text-black hover:bg-red-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium flex items-center"
                  >
                    Products
                    <FaCaretDown className="ml-1" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${isProductsOpen ? "block" : "hidden"} z-40`}
                  >
                    <Link
                      to="/faucets"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      Faucets
                    </Link>
                    <Link
                      to="/bathittings"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      Bath Fittings
                    </Link>
                  </div>
                </div>

                {/* About dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
                  onMouseLeave={() => handleMouseLeave(setIsAboutOpen, aboutRef, setAboutTimeout)}
                  ref={aboutRef}
                >
                  <button
                    className="text-black hover:bg-red-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium flex items-center"
                  >
                    About
                    <FaCaretDown className="ml-1" />
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${isAboutOpen ? "block" : "hidden"} z-40`}
                  >
                    <Link
                      to="/about-company"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      About Company
                    </Link>
                    <Link
                      to="/innovation"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      Innovation
                    </Link>
                    <Link
                      to="/awards-achievements"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      Awards & Achievements
                    </Link>
                    <Link
                      to="/investor-relations"
                      className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                    >
                      Investor Relations
                    </Link>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="text-black hover:bg-red-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </Link>

                <Link
                  to="/download"
                  className="text-black hover:bg-red-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  Download
                </Link>
              </div>
            </div>

            {/* This is the next logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-black text-2xl font-bold">
                <img
                  src="https://www.alstonejindal.in/image/jindal.png"
                  alt="logoImg"
                  className="w-36 h-1/2"
                />
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-black hover:bg-red-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(setIsProductsOpen)}
                onMouseLeave={() => handleMouseLeave(setIsProductsOpen, productsRef, setProductsTimeout)}
              >
                <button
                  className="text-black hover:bg-red-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium flex items-center w-full"
                >
                  Products
                  <FaCaretDown className="ml-1" />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg ${isProductsOpen ? "block" : "hidden"} z-40`}
                >
                  <Link
                    to="/faucets"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Faucets
                  </Link>
                  <Link
                    to="/bath-fittings"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Bath Fittings
                  </Link>
                </div>
              </div>
              <div
                className="relative mt-2"
                onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
                onMouseLeave={() => handleMouseLeave(setIsAboutOpen, aboutRef, setAboutTimeout)}
              >
                <button
                  className="text-black hover:bg-red-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium flex items-center w-full"
                >
                  About
                  <FaCaretDown className="ml-1" />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg ${isAboutOpen ? "block" : "hidden"} z-40`}
                >
                  <Link
                    to="/about-company"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    About Company
                  </Link>
                  <Link
                    to="/innovation"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Innovation
                  </Link>
                  <Link
                    to="/awards-achievements"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Awards & Achievements
                  </Link>
                  <Link
                    to="/investor-relations"
                    className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white"
                  >
                    Investor Relations
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="text-black hover:bg-red-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
              <Link
                to="/download"
                className="text-black hover:bg-red-700 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
