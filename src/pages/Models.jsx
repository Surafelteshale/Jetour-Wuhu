import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons"; // Importing hamburger icon

import G700 from "../assets/images/car_model/g700.webp";
import L6 from "../assets/images/car_model/l6.webp";
import L7 from "../assets/images/car_model/l7.webp";
import L9 from "../assets/images/car_model/l9.webp";
import T1 from "../assets/images/car_model/t1.webp";
import T2 from "../assets/images/car_model/t2.webp";
import X50 from "../assets/images/car_model/x50.webp";
import X70PLUS from "../assets/images/car_model/x70 plus.webp";
import Dashing from "../assets/images/car_model/dashing.webp";

/* =========================
   MODELS DATA (STATIC)
   ========================= */
const modelsData = {
  phev: {
    title: "Plug-in Hybrid Electric Vehicle (PHEV)",
    series: {
      "G Series": [
        {
          id: "g700",
          name: "Jetour G700 - CKD",
          img: G700,
          topSpeed: "180 km/h",
          power: "516 hp",
          maxTorque: "800 Nm",
          displacement: "2000 CC",
          prices: { "2025": "$16,100" },
        },
      ],
      "L Series": [
        {
          id: "l6",
          name: "Jetour L6 - CKD",
          img: L6,
          topSpeed: "185 km/h",
          power: "381 hp",
          maxTorque: "610 Nm",
          displacement: "1498 CC",
          prices: { "2025": "$11,050.00", "2026": "$11,100.00" },
        },
        {
          id: "l7",
          name: "Jetour L7 - CKD",
          img: L7,
          topSpeed: "190 km/h",
          power: "449 hp",
          maxTorque: "660 Nm",
          displacement: "1498 CC",
          prices: { "2025": "$11,300.00", "2026": "$11,340.00" },
        },
        {
          id: "l9",
          name: "Jetour L9 - CKD",
          img: L9,
          topSpeed: "195 km/h",
          power: "456 hp",
          maxTorque: "700 Nm",
          displacement: "1498 CC",
          prices: { "2025": "$12,250.00", "2026": "$12,310.00" },
        },
      ],
      "T Series": [
        {
          id: "t1",
          name: "Jetour T1 - CKD",
          img: T1,
          topSpeed: "180 km/h",
          power: "375 hp",
          maxTorque: "600 Nm",
          displacement: "1498 CC",
          prices: { "2026": "$13,770.00" },
        },
        {
          id: "t2",
          name: "Jetour T2 - CKD",
          img: T2,
          topSpeed: "190 km/h",
          power: "449 hp",
          maxTorque: "620 Nm",
          displacement: "1498 CC",
          prices: { "2025": "$14,200.00", "2026": "$14,300.00" },
        },
      ],
    },
  },
  fuel: {
    title: "Fuel Models",
    series: {
      "X Series": [
        {
          id: "x50",
          name: "Jetour X50 - CKD",
          img: X50,
          topSpeed: "180 km/h",
          power: "156 hp",
          maxTorque: "230 Nm",
          displacement: "1498 CC",
          prices: { "2025": "$7,130.00", "2026": "$7,130.00" },
        },
        {
          id: "x70PLUS",
          name: "Jetour X70PLUS - CKD",
          img: X70PLUS,
          topSpeed: "190 km/h",
          power: "197 hp",
          maxTorque: "290 Nm",
          displacement: "1499 CC",
          prices: { "2025": "$9,850.00", "2026": "$9,910.00" },
        },
        {
          id: "dashing",
          name: "Jetour Dashing - CKD",
          img: Dashing,
          topSpeed: "185 km/h",
          power: "197 hp",
          maxTorque: "290 Nm",
          displacement: "1,498 cc",
          prices: { "2025": "$9,700.00", "2026": "$9,760.00" },
        },
      ],
    },
  },
};

/* =========================
   REUSABLE COMPONENTS
   ========================= */

const VehicleTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["500 Vehicles", "1000 Vehicles", "2000 Vehicles"];

  return (
    <div className="flex flex-col items-center mb-20 space-y-6">
      <p className="text-gray-500 font-montserrat tracking-widest uppercase text-xs font-bold">
        Choose your yearly amount for a custom discount.
      </p>
      
      <div className="relative bg-white/70 backdrop-blur-md border border-gray-200 p-1.5 rounded-3xl shadow-xl flex items-center w-full max-w-xl">
        <div 
          className="absolute h-[85%] transition-all duration-500 ease-out bg-cyan-blue rounded-full shadow-lg shadow-cyan-blue/30"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(tabs.indexOf(activeTab) * 100) / tabs.length}%`,
            transform: `translateX(${tabs.indexOf(activeTab) === 0 ? '6px' : tabs.indexOf(activeTab) === 2 ? '-6px' : '0px'})`
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 flex-1 py-3 text-sm font-semibold transition-colors duration-300 font-montserrat ${
              activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

const CarGrid = ({ models, activeTab }) => {
  const calculatePrice = (basePrice) => {
    const numericValue = parseFloat(basePrice.replace(/[$,]/g, ""));
    let finalPrice = numericValue;

    if (activeTab === "1000 Vehicles") {
      finalPrice = numericValue * 0.85; 
    } else if (activeTab === "2000 Vehicles") {
      finalPrice = numericValue * 0.70; 
    }

    return `$${finalPrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const discountLabel = 
    activeTab === "1000 Vehicles" ? "15%" : 
    activeTab === "2000 Vehicles" ? "30%" : "0%";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {models.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-xl shadow-3xl overflow-hidden hover:scale-105 transition duration-300"
        >
          <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-7 font-palanquin">{car.name}</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600 font-montserrat text-sm">
              <div>
                <p className="text-cyan-blue">Top Speed</p>
                <p className="font-medium">{car.topSpeed}</p>
              </div>
              <div>
                <p className="text-cyan-blue">Power</p>
                <p className="font-medium">{car.power}</p>
              </div>
              <div>
                <p className="text-cyan-blue">Max Torque</p>
                <p className="font-medium">{car.maxTorque}</p>
              </div>
              <div>
                <p className="text-cyan-blue">Displacement</p>
                <p className="font-medium">{car.displacement}</p>
              </div>
            </div>

            <div className="mt-8 font-montserrat">
              {car.prices?.["2025"] && (
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <div className="flex flex-col">
                    <span className="font-medium">2025 Model</span>
                    {activeTab !== "500 Vehicles" && (
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 line-through">{car.prices["2025"]}</span>
                        <span className="text-[10px] text-red-600 font-bold">{discountLabel} OFF</span>
                      </div>
                    )}
                  </div>
                  <span className="font-semibold text-cyan-blue">{calculatePrice(car.prices["2025"])}</span>
                </div>
              )}
              {car.prices?.["2025"] && car.prices?.["2026"] && (
                <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
              {car.prices?.["2026"] && (
                <div className="flex justify-between items-center text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">2026 Model</span>
                    {activeTab !== "500 Vehicles" && (
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 line-through">{car.prices["2026"]}</span>
                        <span className="text-[10px] text-red-600 font-bold">{discountLabel} OFF</span>
                      </div>
                    )}
                  </div>
                  <span className="font-bold text-cyan-blue text-xl font-palanquin">
                    {calculatePrice(car.prices["2026"])}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* =========================
   PAGE
   ========================= */

const Models = () => {
  const [activeTab, setActiveTab] = useState("500 Vehicles");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Car Models</title>
        <meta name="description" content="Browse our latest Jetour models..." />
      </Helmet>

      {/* GLASSMORPHISM NAV BAR */}
      <nav className="sticky top-0 z-[100] py-2 bg-black/70 backdrop-blur-lg border-b border-white/10 px-6 py-4 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
             
          
          {/* Right Side: Logo */}
          <button onClick={() => navigate("/")}>
            <img
              src={headerLogo}
              alt="Jetour Logo"
              className="w-[120px] h-[26px] md:w-[140px] md:h-[30px]"
            />
          </button>
          {/* Hamburger for Mobile (Left Side) */}
          <button className="lg:hidden p-2" onClick={toggleMenu} aria-label="Toggle Menu">
            <img src={hamburger} alt="Menu" width={24} height={24} className="invert" />
          </button>

          {/* Left Side: Desktop Auth Logic */}
          <div className="hidden lg:block">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setOpen((prev) => !prev)}
                    className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold cursor-pointer select-none ring-2 ring-cyan-blue ring-offset-0"
                  >
                    {user.firstName?.charAt(0).toUpperCase()}
                  </div>

                  {open && (
                    <div className="absolute left-0 mt-3 w-32 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                      <button
                        onClick={() => {
                          logout();
                          setOpen(false);
                          navigate("/");
                        }}
                        className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition text-black"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigate("/signin")}
                className="bg-cyan-blue text-white font-montserrat text-sm font-semibold px-7 py-2 rounded-full transition-all duration-300 hover:opacity-90"
              >
                Sign In
              </button>
            )}
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
            
            {user ? (
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-white font-montserrat">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">
                    {user.firstName?.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.firstName}</span>
                </div>
                <button
                  onClick={() => { logout(); navigate("/"); setIsMenuOpen(false); }}
                  className="bg-red-500/20 text-red-400 text-center font-montserrat text-sm py-2 rounded-lg border border-red-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { navigate("/signin"); setIsMenuOpen(false); }}
                className="bg-cyan-blue text-white text-center font-montserrat font-semibold py-3 rounded-full"
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </nav>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <VehicleTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <section className="space-y-24">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-14 text-center font-palanquin">
                {modelsData.phev.title}
              </h1>
              {Object.entries(modelsData.phev.series).map(([series, cars]) => (
                <div key={series} className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 font-palanquin">{series}</h2>
                  <CarGrid models={cars} activeTab={activeTab} />
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-14 text-center font-palanquin">
                {modelsData.fuel.title}
              </h1>
              {Object.entries(modelsData.fuel.series).map(([series, cars]) => (
                <div key={series}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 font-palanquin">{series}</h2>
                  <CarGrid models={cars} activeTab={activeTab} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Models;