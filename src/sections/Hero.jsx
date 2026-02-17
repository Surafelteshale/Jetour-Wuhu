import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80  to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-container w-full px-8 sm:px-16">
        <div className="max-w-2xl">
          <h1 className="font-palanquin text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            Explore Jetour Models <br />
            <span className="text-white">With Confidence</span>
          </h1>

          <p className="font-montserrat text-white/80 text-sm sm:text-lg leading-8 mt-6 max-w-xl">
            Compare the latest Jetour SUVs and PHEV models, explore features and trims,
            view transparent pricing, all in one modern platform.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
