import React, { useEffect } from 'react';
import showroomHero from '../assets/images/jetour_place.webp'; // Replace with your showroom hero image
import showroomImage1 from '../assets/images/jetour_place2.webp'; 
import showroomImage2 from '../assets/images/Personal_meet.webp';

const ShowroomBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
    }, []);

    return (
        <div className="bg-gray-100 font-montserrat">
            {/* Hero Section */}
            <section className="relative h-[500px] overflow-hidden">
                <img src={showroomHero} alt="Jetour Showroom" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-6xl font-bold mb-4 font-palanquin">Join Us & Upgrade Your Life!</h1>
                        <p className="text-xl mb-8 font-montserrat text-gray-200">Experience the Future of Electric Cars.</p>
                    </div>
                </div>
            </section>

            <div className='px-10'>
                {/* Content Section */}
                <section className="container mx-auto px-6 py-12">
                    {/* Introduction */}
                    <div className="mb-12 mt-20 ">
                        <h2 className="text-3xl font-bold mb-4">Welcome to Our Legacy</h2>
                        <p className="text-lg leading-relaxed">
                            At Jetour, we believe in innovation, elegance, and sustainability. Our showroom is a testament to the future of mobility, featuring state-of-the-art electric vehicles designed to enhance your lifestyle. Step into a world where luxury meets cutting-edge technology.
                        </p>
                    </div>

                    {/* Showroom Highlights */}
                    <div className="mb-28 mt-28">
                        <h2 className="text-4xl font-bold mb-4 text-center">Why Visit Our Showroom?</h2>

                        {/* Luxury Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-14">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Unparalleled Luxury</h3>
                                <p className="text-lg leading-relaxed">
                                    Our showroom offers a premium experience with a sophisticated ambiance, allowing you to explore our latest electric and hybrid models in a relaxing environment.
                                </p>
                            </div>
                        </div>

                        {/* Advanced Technology */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                            <div>
                                <img src={showroomImage1} alt="Advanced Technology" className="rounded-xl w-full h-auto" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">The Best Way to Experience Jetour? Visit Us.</h3>
                                <p className="text-lg leading-relaxed">
                                Our showroom provides the ideal environment to explore the full range of Jetour vehicles and speak with our expert team.  Come see the future of electric mobility today.
                                </p>
                            </div>
                        </div>

                        {/* Customer Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-20">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Personalized Consultation</h3>
                                <p className="text-lg leading-relaxed">
                                    Our expert team is here to guide you through every step, helping you find the perfect vehicle to suit your needs.
                                </p>
                            </div>
                            <div>
                                <img src={showroomImage2} alt="Customer Experience" className="rounded-xl w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Sustainability Commitment */}
                    <div className="mb-20 mt-20">
                        <h2 className="text-3xl font-bold mb-4">Sustainability and the Future</h2>
                        <p className="text-lg leading-relaxed">
                            Jetour is committed to a greener future. Our electric vehicles are designed for efficiency, reducing carbon emissions while offering superior performance.
                        </p>
                    </div>

                    {/* Conclusion */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 mt-20">Visit Us Today!</h2>
                        <p className="text-lg leading-relaxed">
                            Experience the next level of driving with Jetour. Visit our showroom and take a step towards a brighter, more sustainable future.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShowroomBlog;
