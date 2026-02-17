import React from "react";
import { headerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="w-full bg-black/70 text-white">
      {/* Top spacer */}
      <div className="h-16" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        
        {/* Brand section */}
        <div className="flex flex-col items-center text-center gap-4">
  {/* Jetour Logo */}
  <img
    src={headerLogo} // make sure to import headerLogo from your assets
    alt="Jetour Logo"
    className="w-32 h-auto mb-2"
  />

  {/* Heading */}
  <h2 className="text-3xl font-palanquin font-bold tracking-wide">
    JETOUR WUHU
  </h2>

  {/* Descriptive text */}
  <p className="text-white/70 max-w-xl leading-relaxed">
    Discover premium SUVs engineered with cutting-edge technology, refined comfort,
    and bold modern design. Every Jetour vehicle is crafted to deliver confidence,
    performance, and elegance whether you’re navigating the city or exploring
    beyond the horizon.
  </p>
</div>


        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1 */}
          {/* <div className="flex flex-col gap-4 ml-10"> */}
            <div className="flex flex-col gap-2 text-white/70">
              <h3 className="font-semibold text-lg text-white">Explore</h3>
              <ul className="flex flex-col gap-1">
                <li>Learn about our brand and vision</li>
                <li>See the range of Jetour models</li>
                <li>Discover the qualities that make Jetour unique</li>
              </ul>
            </div>

          {/* </div> */}

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="flex flex-col gap-2 text-white/70 list-disc list-inside">
              <li>
                Jetour designs premium SUVs.
              </li>
              <li>
                Comfort, Performance, and Safety.
              </li>
              <li>
                Innovation, Reliability, and Exceptional.
              </li>
              <li>
                Adventurers and Luxury.
              </li>
            </ul>
          </div>



          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Jetour Models</h3>
            <div className="grid grid-cols-2 gap-2 text-white/70">
              {/* G Series */}
              <div>
                <p className="font-semibold">G Series</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>G700</li>
                </ul>
              </div>

              {/* T Series */}
              <div>
                <p className="font-semibold">T Series</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>T1</li>
                  <li>T2</li>
                </ul>
              </div>

              {/* L Series */}
              <div>
                <p className="font-semibold">L Series</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>L6</li>
                  <li>L7</li>
                  <li>L8</li>
                </ul>
              </div>

              {/* X Series */}
              <div>
                <p className="font-semibold">X Series</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>X50</li>
                  <li>X70</li>
                  <li>X70 Plus</li>
                  <li>X90</li>
                  <li>X90 Plus</li>
                  <li>Dashing</li>
                </ul>
              </div>
            </div>
          </div>


        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Jetour Wuhu. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            {/* <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span> */}
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-10" />
    </footer>
  );
};

export default Footer;
