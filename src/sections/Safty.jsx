import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jetour8Img from "../assets/images/jetour8.webp";

gsap.registerPlugin(ScrollTrigger);

const Safety = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Image animation (fade + slide from left)
      tl.from(imageRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Content animation (fade + slide from right)
      tl.from(
        contentRef.current,
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
        
        {/* LEFT IMAGE — full bleed from left to center */}
        <div
          ref={imageRef}
          className="w-full lg:w-1/2 h-[320px] lg:h-auto"
        >
          <img
            src={jetour8Img}
            alt="Jetour Safety Feature"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div
            ref={contentRef}
            className="max-w-xl px-6 py-16 sm:px-12 lg:px-16"
          >
            {/* Background Accent Text */}
            <span
              className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-widest text-white/10 block"
              style={{ fontFamily: "Doxent, sans-serif" }}
            >
              SMART
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase mb-6 font-palanquin">
              BUILT FOR REAL-WORLD JOURNEYS
            </h2>

            <div className="flex items-start gap-4">
              {/* Accent */}
              <div className="w-3 h-3 bg-cyan-blue mt-2 flex-shrink-0" />

              <p className="font-montserrat text-white/80 text-base md:text-lg leading-relaxed">
                From urban commutes to long adventures, Jetour integrates smart
                assistance and structural protection to ensure peace of mind on
                every drive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
