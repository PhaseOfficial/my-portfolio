import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-black text-gray-400 py-8 relative border-t border-white/10 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand / Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">P.A Mhonde</h3>
            <p className="text-sm mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
            {/* <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a> */}
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            {/* GitHub */}
            <a 
              href="https://github.com/PhaseOfficial" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="w-6 h-6"/>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/red-cup-series/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="w-6 h-6"/>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/phase_rcs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
            >
              <AiFillInstagram className="w-6 h-6"/>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/+263788147289" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300"
            >
              <IoLogoWhatsapp className="w-6 h-6"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;