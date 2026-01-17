import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-[9999] py-3 px-6 m-2 rounded-xl border border-white/20 shadow-lg backdrop-blur-xl bg-white/10 transition-all duration-300"
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-semibold font-montserrat text-white hover:text-gray-200 transition-colors"
          >
            P.A Mhonde
          </Link>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6 text-white">
            {/* GitHub Link */}
            <a
              href="https://github.com/PhaseOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              title="GitHub"
            >
              <FaGithub size={28} />
            </a>
            
            {/* Phone Link */}
            <a
              href="tel:0788147289"
              className="hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
              title="Call"
            >
              <FaPhone size={26} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {/* Changed z-index to 10000 to ensure it covers the navbar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white text-2xl font-montserrat z-[10000] animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-400 transition-colors p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <IoClose size={36} />
          </button>

          {/* Mobile Links */}
          <a
            href="https://github.com/PhaseOfficial"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors font-medium flex items-center gap-4"
          >
            <FaGithub size={32} />
            <span>GitHub</span>
          </a>
          
          <a
            href="tel:0788147289"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors font-medium flex items-center gap-4"
          >
            <FaPhone size={30} />
            <span>Call Me</span>
          </a>
        </div>
      )}
    </>
  );
}