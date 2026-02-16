import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 5000, carNames = [], carSpecs = [] }) => {
    const [curr, setCurr] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next, slides.length]); // Add dependencies

    const handleCheckModel = () => {
        navigate(`/product-details/${carNames[curr]}`);
    };

    return (
        <div className="overflow-hidden relative w-full mx-auto">
            {/* Car slides */}
            <div className="flex relative z-20 transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            {/* Car Model Title */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-center px-4 z-10 w-full">
                <h1 className="text-2xl sm:text-4xl font-bold text-black font-montserrat ">{carNames[curr]}</h1>
            </div>

            {/* Navigation buttons and additional content */}
            <div className="absolute inset-0 flex items-center justify-between p-4 sm:p-6 z-30">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-[#363837] hover:bg-slate-200 mr-10">
                    <ChevronLeft size={20} className="sm:size-10"/>
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-[#363837] hover:bg-slate-200">
                    <ChevronRight size={20} className="sm:size-10"/>
                </button>
            </div>

            <div className="absolute bottom-6 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {carNames.map((_, i) => (
                    <div 
                        key={i} 
                        className={`transition-all w-3 h-3 bg-white rounded-full 
                        ${curr === i ? "p-2" : "bg-opacity-50"} 
                        max-md:w-2 max-md:h-2 max-md:p-1
                        `}
                    ></div>
                    ))}
                </div>
            </div>


            <div className="absolute bottom-16 w-full px-4 sm:px-8 text-center z-30 max-lg:hidden mb-2"> {/* Adjusted position and added z-index */}
                <button onClick={handleCheckModel} className="bg-[#363837] hover:bg-black text-white px-6 py-3 rounded-lg shadow-lg">
                    Check Model
                </button>
            </div>

            <div className="absolute bottom-10 w-full px-4 sm:px-8 sm:py-10 max-lg:hidden text-center flex justify-between text-[#363837]">
                <div>
                    <p className="text-xs sm:text-sm text-cyan-blue">TOP SPEED</p>
                    <p className="text-sm sm:text-xl font-bold">{carSpecs[curr]?.topSpeed || "-"}</p>
                </div>
                <div className="mr-28">
                    <p className="text-xs sm:text-sm text-cyan-blue">POWER (PS)</p>
                    <p className="text-sm sm:text-xl font-bold">{carSpecs[curr]?.power || "-"}</p>
                </div>
                <div className="ml-28">
                    <p className="text-xs sm:text-sm text-cyan-blue">MAX. TORQUE</p>
                    <p className="text-sm sm:text-xl font-bold">{carSpecs[curr]?.maxTorque || "-"}</p>
                </div>
                <div>
                    <p className="text-xs sm:text-sm text-cyan-blue">DISPLACEMENT</p>
                    <p className="text-sm sm:text-xl font-bold">{carSpecs[curr]?.displacement || "-"}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;