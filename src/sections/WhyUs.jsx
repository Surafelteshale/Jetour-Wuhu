import heroImage from "../assets/images/hero.webp";

const WhyUs = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-white py-20">
      <div className="max-container w-full px-4 md:px-10 flex flex-col lg:flex-row items-center">
        
        {/* Image Container (Left Side) */}
        <div className="relative w-full lg:w-2/3 h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Service Workshop" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Dark Card (Right Side / Overlap) */}
        <div className="relative z-10 w-full lg:w-1/2 lg:-ml-32 mt-[-50px] lg:mt-0 p-8 md:p-16 bg-[#333333] text-white">
          
          {/* Corner Accents (The orange squares) */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-coral-red" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-coral-red" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-coral-red" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-coral-red" />

          <div className="flex flex-col gap-6">
            <h2 
            className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-wide font-palanquin"
            >
            Why Choose <br />
            <span className="text-white">Jetour Wuhu</span>
            </h2>

            <p className="font-montserrat text-white-400 text-sm md:text-base leading-relaxed max-w-xl mt-4">
            Jetour Wuhu is built to simplify car discovery. We bring the latest Jetour
            models, clear pricing, detailed specifications, and key highlights together
            in one visual platform—helping you compare options, understand ownership, and
            request quotations with confidence and ease.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;