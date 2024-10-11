
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link

  // Listen for scroll events to hide topbar and make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTopbarVisible(false); // Hide topbar after scrolling down
        setIsNavbarSticky(true); // Make navbar sticky
      } else {
        setIsTopbarVisible(true); // Show topbar at the top
        setIsNavbarSticky(false); // Navbar not sticky
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header
        className={`w-full bg-white text-[#272B36] font-semibold uppercase body-font shadow-sm transition-all duration-300 z-40 ${isNavbarSticky ? "fixed top-0" : "relative"
          } ${isTopbarVisible ? " lg:mt-[0px]" : "mt-0"}`} // Adjust margin-top when topbar is visible or hidden
      >
        <div className=" flex justify-between items-center py-5 px-4 sm:px-10">
          {/* Site Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-4">
         <Link
            href={"/"}
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <Image className="h-12 w-full" src="/img/logo.jpg" alt="logo-image" width={400} height={400}/>
            
          </Link>
          <p className="text-[14px] sm:text-[16px] capitalize text-[#F56800]">Samir Textile Pvt. Ltd.</p>
         </div>

          {/* Navbar Links */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <Link href={"/"} onClick={() => setActiveLink("/")}>
              <li className={`mr-8 list-none ${activeLink === "/" ? "text-[#F56800]" : "text-[#272B36]"}`}>
                home
              </li>
            </Link>
            <Link href={"/about"} onClick={() => setActiveLink("/about")}>
              <li className={`mr-8 list-none ${activeLink === "/about" ? "text-[#F56800]" : "text-[#272B36]"}`}>
                about
              </li>
            </Link>
            <Link href={"/product"} onClick={() => setActiveLink("/product")}>
              <li className={`mr-8 list-none ${activeLink === "/product" ? "text-[#F56800]" : "text-[#272B36]"}`}>
               Product
              </li>
            </Link>
            <Link href={"/contact"} onClick={() => setActiveLink("/contact")}>
              <li className={`list-none ${activeLink === "/contact" ? "text-[#F56800]" : "text-[#272B36]"}`}>
                Contact
              </li>
            </Link>
          </nav>

          {/* Burger icon for mobile */}
          <button
            className="md:hidden rounded-md active:outline-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-md text-[#272B36]"
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
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-md text-[#272B36]"
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 border-t w-full bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col py-4 px-3 md:hidden text-base uppercase font-semibold">
            <Link href={"/"} onClick={() => setActiveLink("/")}>
              <li className={`block px-3 py-2 ${activeLink === "/" ? "text-[#F56800]" : "text-[#272B36]"}  list-none`}>
                home
              </li>
            </Link>
            <Link href={"/about"} onClick={() => setActiveLink("/about")}>
              <li className={`block px-3 py-2 ${activeLink === "/about" ? "text-[#F56800]" : "text-[#272B36]"}  list-none`}>
                about
              </li>
            </Link>
            <Link href={"/product"} onClick={() => setActiveLink("/product")}>
              <li className={`block px-3 py-2 ${activeLink === "/product" ? "text-[#F56800]" : "text-[#272B36]"}  list-none`}>
               Product
              </li>
            </Link>
            <Link href={"/contact"} onClick={() => setActiveLink("/contact")}>
              <li className={`block px-3 py-2 ${activeLink === "/contact" ? "text-[#F56800]" : "text-[#272B36]"}  list-none`}>
                Contact
              </li>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;






