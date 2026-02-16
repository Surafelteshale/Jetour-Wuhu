import React, { useEffect } from 'react';
import safetyHero from '../assets/images/Steering.webp'; // Keep the image for now
import saftyImage from '../assets/images/comfort_adventure.webp'; 
import compatable from '../assets/images/compatable.webp';
import Infotainment from '../assets/images/Infotainment.webp';



const ComfortBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-100 font-montserrat">

            <section className="relative h-[500px] overflow-hidden">
                <img src={safetyHero} alt="Jetour Comfort and Adventure" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-6xl font-bold mb-4 font-palanquin">Jetour Comfort & Adventure:</h1>
                        <p className="text-xl mb-8 font-montserrat text-gray-200">Luxury Meets Exploration.</p>
                    </div>
                </div>
            </section>

            <div className='px-10'>
            <section className="container mx-auto px-6 py-12">
                <div className="mb-12 mt-20">
                    <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                    <p className="text-lg leading-relaxed">
                        Jetour vehicles are designed not just for travel but for experience. Whether you seek a smooth, luxurious ride for long drives or an adventurous escape into the wild, Jetour combines comfort and capability to elevate every journey.
                    </p>
                </div>

                <div className="mb-28 mt-20">
                    <h2 className="text-4xl font-bold mb-4 text-center">Unmatched Comfort & Features</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-14">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Plush Interior & Seating</h3>
                            <p className="text-lg leading-relaxed">
                                Jetour’s premium leather seats, advanced climate control, and spacious cabin ensure a first-class experience for drivers and passengers alike.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                        <div>
                            <img src={Infotainment} alt="Luxury Seats" className="rounded-xl w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Advanced Infotainment</h3>
                            <p className="text-lg leading-relaxed">
                                Enjoy cutting-edge infotainment systems, seamless smartphone integration, and a high-quality sound experience tailored for road trips.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 mt-20">
                    <h2 className="text-3xl font-bold mb-4">Adventure-Ready Capabilities</h2>
                    <p className="text-lg leading-relaxed">
                        Whether cruising on highways or conquering rugged terrains, Jetour’s all-terrain capabilities and durable engineering make it the perfect partner for adventure enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Smooth Suspension System</h3>
                        <p className="text-lg leading-relaxed">
                            Designed to absorb shocks and provide a smooth ride, Jetour’s adaptive suspension system ensures maximum comfort on any terrain.
                        </p>
                    </div>
                    <div>
                        <img src={compatable} alt="Adventure Mode" className="rounded-xl w-full h-auto" />
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 px-6">Jetour’s Performance in the Wild</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Real Adventure Stories</h3>
                            <p className="text-lg leading-relaxed">
                                Experience testimonials from travelers who have pushed Jetour’s capabilities to the limit on road trips, off-road adventures, and beyond.
                            </p>
                        </div>
                        <div>
                            <img src={saftyImage} alt="Adventure Drive" className="rounded-xl w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                    <p className="text-lg leading-relaxed">
                        With a perfect blend of luxury and ruggedness, Jetour provides an exceptional driving experience for both comfort seekers and adventure lovers. Whether it’s a smooth city ride or an off-road escapade, Jetour is built to take you there.
                    </p>
                </div>
            </section>
            </div>
        </div>
    );
};

export default ComfortBlog;
