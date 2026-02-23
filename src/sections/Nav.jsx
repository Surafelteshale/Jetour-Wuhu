import { useState, useEffect, useRef } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Values", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Comfort", id: "comfort" },
    { name: "FAQ", id: "faq" },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Not on landing page → navigate there first, pass section in state
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on landing page → scroll directly
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSignInClick = () => navigate("/signin");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-black/80"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-2">
        
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center py-5">
          <img
            src={headerLogo}
            alt="Jetour Logo"
            className="w-[140px] h-[30px]"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="flex space-x-8 uppercase max-lg:hidden">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 text-sm font-montserrat hover:text-white transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop Sign In */}
        {user ? (
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigate("/models")}
              className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90"
            >
              View Models
            </button>
            <div className="relative" ref={dropdownRef}>
              {/* Avatar */}
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold cursor-pointer select-none"
              >
                {user.firstName?.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-32 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                      navigate("/");
                    }}
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignInClick}
            className="hidden lg:block bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90"
          >
            Sign In
          </button>
        )}


        {/* Hamburger */}
        <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          <img src={hamburger} alt="Menu" width={24} height={24} className="invert" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/70 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-2">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 text-sm font-montserrat py-2 hover:text-white transition"
            >
              {item.name}
            </button>
          ))}

          {/* Mobile Sign In */}
          {user ? (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/models")}
              className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90"
            >
              View Models
            </button>
            <div className="relative" ref={dropdownRef}>
              {/* Avatar */}
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold cursor-pointer select-none"
              >
                {user.firstName?.charAt(0).toUpperCase()}
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-3 w-32 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                      navigate("/");
                    }}
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={handleSignInClick}
            className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90"
          >
            Sign In
          </button>
        )}  
        </div>
      )}
    </header>
  );
};

export default Nav;
