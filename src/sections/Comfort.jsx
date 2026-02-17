import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import comfortImg from "../assets/images/adventure.webp";

gsap.registerPlugin(ScrollTrigger);

const Comfort = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Content animation (fade + slide from left)
      tl.from(contentRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Image animation (fade + slide from right)
      tl.from(
        imageRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Text inside content stagger
      tl.from(
        contentRef.current.querySelectorAll("span, h2, p"),
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#333333] overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row min-h-[500px]">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div
            ref={contentRef}
            className="max-w-xl px-6 py-16 sm:px-12 lg:px-16 ml-auto"
          >
            {/* Background Accent Text */}
            <span
              className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-widest text-white/10 block"
              style={{ fontFamily: "Doxent, sans-serif" }}
            >
              COMFORT
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase mb-6 font-palanquin">
              DESIGNED FOR EVERYDAY EASE
            </h2>

            <div className="flex items-start gap-4">
              {/* Accent */}
              <div className="w-3 h-3 bg-cyan-blue mt-2 flex-shrink-0" />

              <p className="font-montserrat text-white/80 text-base md:text-lg leading-relaxed">
                Jetour interiors are crafted to elevate every journey with refined
                materials, intelligent space design, and comfort-focused technology
                that adapts effortlessly to daily life.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE — center → full right edge */}
        <div className="w-full lg:w-1/2 h-[320px] lg:h-auto">
          <img
            ref={imageRef}
            src={comfortImg}
            alt="Jetour Comfort Experience"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Comfort;
