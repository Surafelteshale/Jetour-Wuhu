import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerLogo, headerLogo2 } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-[#363837] py-2">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
        
        {/* Logo */}
        <div className="text-center">
          <NavLink to="/">
            <img src={headerLogo} alt="Jetour Logo" className="w-[160px] h-[70px] mx-auto" />
          </NavLink>
        </div>

        {/* Navigation Links (Desktop View) */}
        <div className="flex space-x-8 text-white text-base uppercase max-lg:hidden">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat" : "text-gray-400 text-sm font-montserrat hover:opacity-50"}
          >
            Home
          </NavLink>

          <NavLink 
            to="/models" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat" : "text-gray-400 text-sm font-montserrat hover:opacity-50"}
          >
            Models
          </NavLink>

          <NavLink 
            to="/pages/ContactUs" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat" : "text-gray-400 text-sm font-montserrat hover:opacity-50"}
          >
            Contact Us
          </NavLink>

          <NavLink 
            to="/more" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat" : "text-gray-400 text-sm font-montserrat hover:opacity-50"}
          >
            More
          </NavLink>
        </div>

        {/* Secondary Logo */}
        <div className='max-lg:hidden'>
          <img src={headerLogo2} alt="Suweys Motors Logo" className="h-11" />
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className='hidden max-lg:block' onClick={toggleMenu}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} className="filter invert" />
        </div>
      </nav>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="max-lg:block bg-[#363837] py-4 px-6">
          <NavLink 
            to="/models" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat block py-2" : "text-gray-400 text-sm font-montserrat block py-2 hover:opacity-50"}
            onClick={toggleMenu} // Close the menu after clicking
          >
            Models
          </NavLink>

          <NavLink 
            to="/pages/ContactUs" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat block py-2" : "text-gray-400 text-sm font-montserrat block py-2 hover:opacity-50"}
            onClick={toggleMenu} // Close the menu after clicking
          >
            Contact Us
          </NavLink>

          <NavLink 
            to="/more" 
            className={({ isActive }) => isActive ? "text-white font-semibold text-sm font-montserrat block py-2" : "text-gray-400 text-sm font-montserrat block py-2 hover:opacity-50"}
            onClick={toggleMenu} // Close the menu after clicking
          >
            More
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Nav;
