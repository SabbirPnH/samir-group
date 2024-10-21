
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import "../../app/globals.css";
// import { IoCall } from "react-icons/io5";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { IoLogoInstagram } from "react-icons/io5";
// import { IoMail } from "react-icons/io5";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTopbarVisible, setIsTopbarVisible] = useState(true);
//   const [isNavbarSticky, setIsNavbarSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");

//   // Listen for scroll events to hide topbar and make navbar sticky
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsTopbarVisible(false); // Hide topbar after scrolling down
//         setIsNavbarSticky(true); // Make navbar sticky
//       } else {
//         setIsTopbarVisible(true); // Show topbar at the top
//         setIsNavbarSticky(false); // Navbar not sticky
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         className={`bg-[#f1f5f9] p-0 transition-all duration-300 fixed top-0 w-full z-50  ${isTopbarVisible ? "block" : "hidden"
//           }`}
//       >
//         <div className="hidden lg:flex justify-between items-center px-4 sm:px-10">
//           <div className="flex space-x-6">
//             <div className="flex items-center py-3">
//               <IoMail  className="text-[#E72929] mr-2" />
//               <span className="text-sm">samirmotors18@gmail.com</span>
//             </div>
           
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="flex items-center py-3">
//               <IoCall className="text-[#E72929] mr-2" />
//               <span className="text-sm">Cell: 01716-537772,01616-537772</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <a className="bg-white text-[#E72929] p-2" href="#">
//                 <FaFacebookF />
//               </a>
//               <a className="bg-white text-[#E72929] p-2" href="#">
//                 <FaTwitter />
//               </a>
//               <a className="bg-white text-[#E72929] p-2" href="#">
//                 <FaLinkedinIn />
//               </a>
//               <a className="bg-white text-[#E72929] p-2" href="#">
//                 <IoLogoInstagram />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Navbar */}
//       <header
//         className={`w-full bg-white text-[#272B36] font-semibold uppercase body-font shadow-sm transition-all duration-300 z-40 ${
//           isNavbarSticky ? "fixed top-0" : "relative"
//         } ${isTopbarVisible ? "lg:mt-[0px]" : "mt-0"}`}
//       >
//         <div className="flex justify-between items-center py-5 px-4 sm:px-20">
//           {/* Site Logo and Name */}
//           <div className="flex items-center gap-2 sm:gap-4">
//             <a href={"#home"} className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
//               <Image className="h-12 w-full" src="/img/logo (2).png" alt="logo-image" width={400} height={400} />
//             </a>
//           </div>

//           {/* Navbar Links */}
//           <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
//             <Link href="#home" onClick={() => setActiveLink("#home")}>
//               <li className={`mr-8 list-none ${activeLink === "#home" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 Home
//               </li>
//             </Link>
//             {/* Our Company Dropdown */}
//             <div className="relative group">
//               <Link href="#company" onClick={() => setActiveLink("#company")} className="flex items-center">
//                 <li className={`mr-8 list-none ${activeLink === "#company" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                   Our Company
//                 </li>
//               </Link>
//               {/* Dropdown Menu */}
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                 <Link href="#about" onClick={() => setActiveLink("#about")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   About
//                   </li>
//                 </Link>
//                 <Link href="#message" onClick={() => setActiveLink("#message")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Message
//                   </li>
//                 </Link>
//                 <Link href="#mission" onClick={() => setActiveLink("#mission")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Mission & Vision
//                   </li>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative group">
//               <Link href="#notice" onClick={() => setActiveLink("#notice")} className="flex items-center">
//                 <li className={`mr-8 list-none ${activeLink === "#notice" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 notice 
//                 </li>
//               </Link>
//               {/* Dropdown Menu */}
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                 <Link target="_blank" href="https://beta.samirgroupbd.com/" onClick={() => setActiveLink("https://beta.samirgroupbd.com/")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Consultancy
//                   </li>
//                 </Link>
//               </div>
//             </div>
//             <Link href="#contact" onClick={() => setActiveLink("#contact")}>
//               <li className={`list-none ${activeLink === "#contact" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 Contact
//               </li>
//             </Link>
//           </nav>

//           {/* Burger icon for mobile */}
//           <button className="md:hidden rounded-md active:outline-none focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-[#272B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-[#272B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`absolute left-0 border-t w-full bg-white transition-transform duration-300 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
//           <div className="flex flex-col py-4 px-3 md:hidden text-base uppercase font-semibold">
//             <Link href="#home" onClick={() => setActiveLink("#home")}>
//               <li className={`block px-3 pt-2 list-none ${activeLink === "#home" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 Home
//               </li>
//             </Link>
//             <div className="relative group">
//               <Link href="#company" onClick={() => setActiveLink("#company")} className="flex items-center">
//                 <li className={` py-2 px-3 list-none ${activeLink === "#company" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                   Our Company
//                 </li>
//               </Link>
//               {/* Dropdown Menu */}
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
//                 <Link href="#about" onClick={() => setActiveLink("#about")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   About
//                   </li>
//                 </Link>
//                 <Link href="#message" onClick={() => setActiveLink("#message")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Message
//                   </li>
//                 </Link>
//                 <Link href="#mission" onClick={() => setActiveLink("#mission")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Mission & Vision
//                   </li>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative group">
//               <Link href="#notice" onClick={() => setActiveLink("#notice")} className="flex items-center">
//                 <li className={` px-3 list-none ${activeLink === "#notice" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 notice 
//                 </li>
//               </Link>
//               {/* Dropdown Menu */}
//               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                 <Link href="https://beta.samirgroupbd.com/" onClick={() => setActiveLink("https://beta.samirgroupbd.com/")}>
//                   <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                   Consultancy
//                   </li>
//                 </Link>
//               </div>
//             </div>
           
            
//             <Link href="#contact" onClick={() => setActiveLink("#contact")}>
//               <li className={`block px-3 py-2 list-none ${activeLink === "#contact" ? "text-[#E72929]" : "text-[#272B36]"}`}>
//                 Contact
//               </li>
//             </Link>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;






"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { IoCall, IoMail, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

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
      {/* Topbar */}
      <div
        className={`bg-[#f1f5f9] p-0 transition-all duration-300 fixed top-0 w-full z-50  ${isTopbarVisible ? "block" : "hidden"
          }`}
      >
        <div className="hidden lg:flex justify-between items-center px-4 sm:px-20">
          <div className="flex space-x-6">
            <div className="flex items-center py-3">
              <IoMail className="text-[#E72929] mr-2" />
              <span className="text-sm">info.samirtextile@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center py-3">
              <IoCall className="text-[#E72929] mr-2" />
              <span className="text-sm">Cell: 01716-537772,01616-537772</span>
            </div>
            <div className="flex items-center space-x-2">
              <a className="bg-white text-[#E72929] p-2" href="#">
                <FaFacebookF />
              </a>
              <a className="bg-white text-[#E72929] p-2" href="#">
                <FaTwitter />
              </a>
              <a className="bg-white text-[#E72929] p-2" href="#">
                <FaLinkedinIn />
              </a>
              <a className="bg-white text-[#E72929] p-2" href="#">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`w-full bg-white text-[#272B36] font-semibold uppercase body-font shadow-sm transition-all duration-300 z-40 ${isNavbarSticky ? "fixed top-0" : "relative"} ${isTopbarVisible ? " lg:mt-[50px]" : "mt-0"
          }`}
      >
        <div className="flex justify-between items-center py-3 px-4 sm:px-20">
          {/* Site Logo and Name */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={"#home"}
              className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
            >
              <Image
                className="h-12 w-full"
                src="/img/logo (2).png"
                alt="logo-image"
                width={400}
                height={400}
              />
            </a>
          </div>

          {/* Navbar Links */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <Link href="#home" onClick={() => setActiveLink("#home")}>
              <li
                className={`px-3 list-none ${activeLink === "#home" ? "text-[#E72929]" : "text-[#272B36]"
                  }`}
              >
                Home
              </li>
            </Link>
            {/* Our Company Dropdown */}
            <div className="relative group">
              <Link href="#company" onClick={() => setActiveLink("#company")} className="flex items-center">
                <li className={` px-3 list-none ${activeLink === "#company" ? "text-[#E72929]" : "text-[#272B36]"}`}>
                  Our Company
                </li>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link href="#about" onClick={() => setActiveLink("#about")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</li>
                </Link>
                <Link href="#message" onClick={() => setActiveLink("#message")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Message</li>
                </Link>
                <Link href="#mission" onClick={() => setActiveLink("#mission")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mission & Vision</li>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="#notice" onClick={() => setActiveLink("#notice")} className="flex items-center">
                <li className={` px-3 list-none ${activeLink === "#notice" ? "text-[#E72929]" : "text-[#272B36]"}`}>
                notice 
                </li>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link target="_blank" href="https://beta.samirgroupbd.com/" onClick={() => setActiveLink("https://beta.samirgroupbd.com/")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Consultancy
                  </li>
                </Link>
              </div>
            </div>
            <Link href="#contact" onClick={() => setActiveLink("#contact")}>
              <li className={` pl-3 list-none ${activeLink === "#contact" ? "text-[#E72929]" : "text-[#272B36]"}`}>
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
        <div className={`absolute left-0 border-t w-full bg-white transition-transform duration-300 ease-in-out  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex flex-col py-4 px-3 md:hidden text-base uppercase font-semibold">
            <Link href="#home" onClick={() => setActiveLink("#home")}>
              <li className={`block px-3 pt-2 list-none ${activeLink === "#home" ? "text-[#E72929]" : "text-[#272B36]"}`}>
                Home
              </li>
            </Link>
            <div className="relative group">
              <Link href="#company" onClick={() => setActiveLink("#company")} className="flex items-center">
                <li className={` py-2 px-3 list-none ${activeLink === "#company" ? "text-[#E72929]" : "text-[#272B36]"}`}>
                  Our Company
                </li>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link href="#about" onClick={() => setActiveLink("#about")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  About
                  </li>
                </Link>
                <Link href="#message" onClick={() => setActiveLink("#message")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Message
                  </li>
                </Link>
                <Link href="#mission" onClick={() => setActiveLink("#mission")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mission & Vision
                  </li>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="#notice" onClick={() => setActiveLink("#notice")} className="flex items-center">
                <li className={` px-3 list-none ${activeLink === "#notice" ? "text-[#E72929]" : "text-[#272B36]"}`}>
                notice 
                </li>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link target="_blank" href="https://beta.samirgroupbd.com/" onClick={() => setActiveLink("https://beta.samirgroupbd.com/")}>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Consultancy
                  </li>
                </Link>
              </div>
            </div>
           
            
            <Link href="#contact" onClick={() => setActiveLink("#contact")}>
              <li className={`block px-3 py-2 list-none ${activeLink === "#contact" ? "text-[#E72929]" : "text-[#272B36]"}`}>
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






