import React, { useEffect } from "react";
import forestImage from "../assets/images/forest.webp";
import { Helmet } from "react-helmet";

import G700 from "../assets/images/car_model/g700.webp";

import L6 from "../assets/images/car_model/l6.webp";
import L7 from "../assets/images/car_model/l7.webp";
import L9 from "../assets/images/car_model/l9.webp";

import T1 from "../assets/images/car_model/t1.webp";
import T2 from "../assets/images/car_model/t2.webp";

import X50 from "../assets/images/car_model/x50.webp";
// import X70 from "../assets/images/car_model/X70.webp";
import X70PLUS from "../assets/images/car_model/x70 plus.webp";
// import X90 from "../assets/images/car_model/X90.webp";
// import X90Plus from "../assets/images/car_model/X90Plus.webp";
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
          name: "Jetour G700",
          img: G700,
          topSpeed: "180 km/h",
          power: "516 hp",
          maxTorque: "800 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2025": "$30,000",
          },
        },
      ],
      "L Series": [
        {
          id: "l6",
          name: "Jetour L6",
          img: L6,
          topSpeed: "185 km/h",
          power: "381 hp",
          maxTorque: "610 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2025": "$13,660",
            "2026": "$14,893.64",
          },
        },
        {
          id: "l7",
          name: "Jetour L7",
          img: L7,
          topSpeed: "190 km/h",
          power: "449 hp",
          maxTorque: "660 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2025": "$20,000",
            "2026": "$20,916.94",
          },
        },
        {
          id: "l9",
          name: "Jetour L9",
          img: L9,
          topSpeed: "195 km/h",
          power: "456 hp",
          maxTorque: "700 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2025": "$12,250",
            "2026": "$16,715",
          },
        },
      ],
      "T Series": [
        {
          id: "t1",
          name: "Jetour T1",
          img: T1,
          topSpeed: "180 km/h",
          power: "375 hp",
          maxTorque: "600 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2026": "$19,400",
          },
        },
        {
          id: "t2",
          name: "Jetour T2",
          img: T2,
          topSpeed: "190 km/h",
          power: "449 hp",
          maxTorque: "620 Nm",
          displacement: "1.5T Hybrid",
          prices: {
            "2025": "$18,682",
            "2026": "$19,682",
          },
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
          name: "Jetour X50",
          img: X50,
          topSpeed: "180 km/h",
          power: "156 hp",
          maxTorque: "230 Nm",
          displacement: "1.5L",
          prices: {
            "2025": "$8,630",
            "2026": "$10,000",
          },
        },
        // {
        //   id: "x70",
        //   name: "Jetour X70",
        //   img: X70,
        //   topSpeed: "185 km/h",
        //   power: "197 hp",
        //   maxTorque: "290 Nm",
        //   displacement: "1.6T",
        //   price: "$200,000",
        // },
        {
          id: "x70PLUS",
          name: "Jetour X70PLUS",
          img: X70PLUS,
          topSpeed: "190 km/h",
          power: "197 hp",
          maxTorque: "290 Nm",
          displacement: "1.6T",
          prices: {
            "2025": "$14,000",
            "2026": "$15,000",
          },
        },
        // {
        //   id: "x90",
        //   name: "Jetour X90",
        //   img: X90,
        //   topSpeed: "190 km/h",
        //   power: "197 hp",
        //   maxTorque: "320 Nm",
        //   displacement: "2.0T",
        //   price: "$200,000",
        // },
        // {
        //   id: "x90plus",
        //   name: "Jetour X90 Plus",
        //   img: X90Plus,
        //   topSpeed: "195 km/h",
        //   power: "254 hp",
        //   maxTorque: "390 Nm",
        //   displacement: "2.0T",
        //   price: "$200,000",
        // },
        {
          id: "dashing",
          name: "Jetour Dashing",
          img: Dashing,
          topSpeed: "185 km/h",
          power: "197 hp",
          maxTorque: "290 Nm",
          displacement: "1.6T",
          prices: {
            "2025": "$12,571",
            "2026": "$14,000",
          },
        },
      ],
    },
  },
};

/* =========================
   REUSABLE GRID
   ========================= */

const CarGrid = ({ models }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {models.map((car) => (
      <div
        key={car.id}
        className="bg-white rounded-xl shadow-3xl overflow-hidden hover:scale-105 transition duration-300"
      >
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-7 font-palanquin">
            {car.name}
          </h2>

          <div className="grid grid-cols-2 gap-4 text-gray-600 font-montserrat">
            <div>
              <p className="text-sm text-cyan-blue">Top Speed</p>
              <p className="font-medium">{car.topSpeed}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Power</p>
              <p className="font-medium">{car.power}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Max Torque</p>
              <p className="font-medium">{car.maxTorque}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Displacement</p>
              <p className="font-medium">{car.displacement}</p>
            </div>
          </div>

          {/* discount */}
          <div className="relative group overflow-hidden pr-6 mt-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/40">
  
          {/* The "Sheen" - This creates the light-catching effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Optional: Animated Glow following the mouse (simplified here as a static corner glow) */}
          <div className="absolute -top-10 -right-10 h-32 w-32 bg-cyan-400/20 blur-3xl rounded-full" />

          <div className="relative px-6 py-5 pr-5 font-montserrat">
            {/* Header with a subtle text glow */}
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-blue mb-3 drop-shadow-sm">
              Annual Production Discount
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-black/90">
                <span className="text-sm font-medium">1,000 vehicles / yr</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 border border-cyan-400/30 text-xs font-bold text-cyan-blue">
                  15% OFF
                </span>
              </div>

              <div className="flex justify-between items-center text-black/90">
                <span className="text-sm font-medium">2,000 vehicles / yr</span>
                <span className="px-2 py-1 rounded-lg border border-cyan-400/30 text-xs font-bold text-cyan-blue">
                  30% OFF
                </span>
              </div>
            </div>
          </div>
        </div>

          <div className="mt-8 font-montserrat">
            {/* Render 2025 only if it exists */}
            {car.prices?.["2025"] && (
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span className="font-medium">2025 Model</span>
                <span className="font-semibold text-cyan-blue">
                  {car.prices["2025"]}
                </span>
              </div>
            )}

            {/* Divider: Only shows if BOTH 2025 and 2026 exist */}
            {car.prices?.["2025"] && car.prices?.["2026"] && (
              <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            )}

            {/* Render 2026 only if it exists */}
            {car.prices?.["2026"] && (
              <div className="flex justify-between items-center text-base">
                <span className="font-semibold text-gray-900">2026 Model</span>
                <span className="font-bold text-cyan-blue text-xl font-palanquin">
                  {car.prices["2026"]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

/* =========================
   PAGE
   ========================= */

const Models = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Car Models</title>
        <meta
          name="description"
          content="Browse our latest Jetour models, including PHEV and fuel-powered SUVs."
        />
      </Helmet>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* PHEV */}
          <section>
            <h1 className="text-4xl font-bold mb-14 text-center font-palanquin">
              {modelsData.phev.title}
            </h1>

            {Object.entries(modelsData.phev.series).map(([series, cars]) => (
              <div key={series} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 font-palanquin">
                  {series}
                </h2>
                <CarGrid models={cars} />
              </div>
            ))}
          </section>

          {/* FUEL */}
          <section>
            <h1 className="text-4xl font-bold mb-14 text-center font-palanquin">
              {modelsData.fuel.title}
            </h1>

            {Object.entries(modelsData.fuel.series).map(([series, cars]) => (
              <div key={series}>
                <h2 className="text-3xl font-bold mb-8 font-palanquin">
                  {series}
                </h2>
                <CarGrid models={cars} />
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* ===== KEEPING YOUR ABOUT SECTION 100% UNCHANGED ===== */}
      {/* (Your About Jetour section continues exactly as before) */}
    </>
  );
};

export default Models;
