import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      }
    ).fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.4"
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-container w-full px-8 sm:px-16">
        <div className="max-w-2xl">
          
          <h1
            ref={titleRef}
            className="font-palanquin text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
          >
            <span className="block">Explore Jetour Models</span>
            <span className="block">With Confidence</span>
          </h1>

          <p
            ref={subtitleRef}
            className="font-montserrat text-white/80 text-sm sm:text-lg leading-8 mt-6 max-w-xl"
          >
            Compare the latest Jetour SUVs and PHEV models, explore features and trims,
            view transparent pricing — all in one modern platform.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
