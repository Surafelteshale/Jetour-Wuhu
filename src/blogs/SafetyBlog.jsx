import React, { useEffect } from 'react';
import perform_test from '../assets/images/perform_test.webp'; // Replace with your hero image
import saftyImage from '../assets/images/safty.webp'; 
import compatable from '../assets/images/compatable.webp';
import Passenger_view from '../assets/images/Passenger_view.webp';
import back_seat from '../assets/images/back_seat.webp';





const SafetyBlog = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
    }, []);

    return (
        <div className="bg-gray-100 font-montserrat"> {/* Overall page background and font */}

            {/* Hero Section */}
            <section className="relative h-[500px] md:h-[600px] lg:h-[500px] overflow-hidden">
                <img src={Passenger_view} alt="Jetour Safety" className="object-cover w-full h-full absolute inset-0" />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-6xl font-bold mb-4 font-palanquin">Jetour ensures everyone's safety:</h1>
                        <p className="text-xl mb-8 font-montserrat text-gray-200">Ensuring a Secure Ride Every Time.</p>
                    </div>
                </div>
            </section>

            <div className='px-10'>

            {/* Content Section */}
            <section className="container mx-auto px-6 py-12">

                {/* Introduction */}
                <div className="mb-12 mt-20">
                    <h2 className="text-3xl font-bold mb-10">Introduction</h2>
                    <p className="text-lg leading-relaxed">
                        Jetour, a brand synonymous with family-friendly SUVs, understands that safety is paramount. In today's world, where roads are busier than ever, ensuring the well-being of every passenger is non-negotiable.  Jetour is committed to providing vehicles equipped with cutting-edge safety features to give you peace of mind on every journey.
                    </p>
                </div>

                {/* Key Safety Features */}
                <div className="mb-28 mt-28">
                    <h2 className="text-4xl font-bold mb-4 text-center">Key Safety Features in Jetour Vehicles</h2>


                    {/* Collision Prevention */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-14">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Collision Prevention</h3>
                            <p className="text-lg leading-relaxed">
                                Our collision prevention systems, such as automatic emergency braking and blind-spot monitoring, act as an extra set of eyes, helping to prevent accidents before they happen.
                            </p>
                        </div>
                    </div>
                    {/* ... (Repeat grid structure for other features: Airbags, Stability Control) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                        <div>
                            <img src={saftyImage} alt="Airbags" className="rounded-xl w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Airbag System</h3>
                            <p className="text-lg leading-relaxed">
                                Jetour vehicles are equipped with multiple airbags strategically placed to provide maximum protection in the event of a collision.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Stability & Traction Control</h3>
                            <p className="text-lg leading-relaxed">
                                Our stability and traction control systems provide enhanced handling and control, especially in challenging road conditions like rain or snow.
                            </p>
                        </div>
                        <div>
                            <img src={compatable} alt="Stability" className="rounded-xl w-full h-auto" />
                        </div>
                    </div>


                </div>

                {/* Technology Enhancements */}
                <div className="mb-12  mt-20">
                    <h2 className="text-3xl font-bold mb-4">Technology Enhancements for Safety</h2>
                    <p className="text-lg leading-relaxed">
                        Jetour is continuously innovating to enhance safety. We utilize smart sensors, cameras, and, where applicable, AI-based monitoring to create an even safer driving experience.
                    </p>
                </div>

                {/* Passenger & Child Safety */}
                <div className="mb-12 mt-20">
                    <h2 className="text-3xl font-bold mb-4">Passenger and Child Safety</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <img src={back_seat} alt="Child Safety" className="rounded-xl w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Child Safety</h3>
                            <p className="text-lg leading-relaxed">
                                Jetour vehicles prioritize child safety with features like ISOFIX child seat anchors and child safety locks, ensuring the little ones are always secure.
                            </p>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed">We also provide safety guidance for long road trips to help families travel safely and comfortably.</p>

                </div>

                {/* Crash Test Ratings */}
                <div className="mb-12 mt-20">
                    <h2 className="text-3xl font-bold mb-4 px-6">Jetour’s Real-World Performance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Performance Test</h3>
                            <p className="text-lg leading-relaxed">
                                Jetour vehicles have received impressive safety ratings from reputable organizations. We also have real-world examples of how our vehicles have protected passengers in accidents.
                            </p>
                        </div>
                        <div>
                            <img src={perform_test} alt="Crash Test" className="rounded-xl w-full h-auto" />
                        </div>
                    </div>
                    {/* ... (Add specific ratings and examples) */}
                </div>

                {/* Conclusion */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                    <p className="text-lg leading-relaxed">
                        At Jetour, safety isn't an option; it's a fundamental principle. We're committed to providing vehicles that protect you and your loved ones on every journey. When choosing your next vehicle, prioritize safety – choose Jetour.
                    </p>
                </div>

            </section>

            </div>
        </div>
    );
};

export default SafetyBlog;