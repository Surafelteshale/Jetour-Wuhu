import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-black/80"
        }
      `}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-2">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={headerLogo}
            alt="Jetour Logo"
            className="w-[160px] h-[70px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="flex space-x-8 uppercase max-lg:hidden">
          {[
            { name: "Home", path: "/" },
            { name: "Models", path: "/models" },
            { name: "Contact Us", path: "/pages/ContactUs" },
            { name: "More", path: "/more" },
          ].map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold text-sm font-montserrat"
                  : "text-gray-300 text-sm font-montserrat hover:opacity-70 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Sign In */}
        <div className="max-lg:hidden">
          <button className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90">
            Sign In
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <img
            src={hamburger}
            alt="Menu"
            width={24}
            height={24}
            className="invert"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/70 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-2">
          {[
            { name: "Models", path: "/models" },
            { name: "Contact Us", path: "/pages/ContactUs" },
            { name: "More", path: "/more" },
          ].map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "block text-white font-semibold text-sm font-montserrat py-2"
                  : "block text-gray-300 text-sm font-montserrat py-2 hover:opacity-70 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Sign In */}
          <div className="pt-4">
            <button className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:opacity-90">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
