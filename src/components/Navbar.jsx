import { useState } from 'react';
import mysite from '../assets/weblogo.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import GlassSurface from './GlassSurface';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <GlassSurface
            width="100%"
            height="auto"
            borderRadius={80}
            opacity={0.9}
            brightness={80}
            blur={14}
            className="sticky top-0 w-full py-4 px-6 z-10"
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-black font-montserrat-bold">
                   Phase_RCS
                </h1>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/Projects" className="hover:text-white">Projects</Link>
                    <Link to="/Resume" className="hover:text-white">Resume</Link>
                    <Link to="/Contact" className="hover:text-white">Contact</Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center px-3 py-2 border rounded text-black border-red hover:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <GiHamburgerMenu className='text-white'/>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2 bg-gray-800 p-4 rounded-lg shadow-lg text-white">
                    <Link to="/Projects" className="hover:text-white">Projects</Link>
                    <Link to="/Resume" className="hover:text-white">Resume</Link>
                    <Link to="/Contact" className="hover:text-white">Contact</Link>
                </div>
            )}
        </GlassSurface>
    );
}
