import { useEffect, useState } from "react";
import { getJetourHero } from "../config/firestoreHelpers";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: "",
    highlight: "",
    subtitle: "",
    image: ""
  });

  useEffect(() => {
    const fetchHero = async () => {
      const data = await getJetourHero();
      setHeroData(data);
    };

    fetchHero();
  }, []);

  // Split the title to inject the highlight word dynamically
  const splitTitle = () => {
    const parts = heroData.title.split(heroData.highlight);
    return parts.length === 2 ? parts : [heroData.title];
  };

  return (
    <section 
      id="home"
      className="w-full flex flex-col md:flex-row items-center justify-between min-h-screen max-container bg-white px-10 xl:px-20 pt-16 pb-10"
    >
      {/* Left Side - Text */}
      <div className="relative xl:w-2/5 md:w-1/2 flex flex-col justify-center items-start text-left max-w-lg mt-10 ml-10">
        <h1 className="font-palanquin text-4xl md:text-5xl xl:text-6xl leading-tight font-bold text-black">
          {splitTitle().length === 2 ? (
            <>
              <span className="relative pr-4 xl:pr-10">{splitTitle()[0]}</span>
              <br />
              <span className="text-cyan-blue">{heroData.highlight}</span>
              {splitTitle()[1]}
            </>
          ) : (
            <>{heroData.title}</>
          )}
        </h1>

        <p className="font-montserrat text-gray-600 text-lg leading-8 mt-6 mb-8">
          {heroData.subtitle}
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative flex-1 flex justify-end items-center w-full xl:w-2/4 md:w-1/2 lg:mt-10">
        {heroData.image && (
          <img 
            src={heroData.image}
            alt="Jetour Car"
            width={1000}
            height={1000}
            className="object-contain"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
