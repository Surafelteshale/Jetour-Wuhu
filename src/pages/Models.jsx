import React, { useEffect, useState } from 'react';
import forestImage from '../assets/images/forest.webp';
import { jetour_models } from '../constants';
import { Link } from 'react-router-dom';
import { getCarModels } from '../config/firestoreHelpers';
import { Helmet } from "react-helmet";

const Models = () => {

  const [models, setModels] = useState([]);

  useEffect(() => {
      window.scrollTo(0, 0); 

      const fetchModels = async () => {
        try {
          const carData = await getCarModels(); // 🔁 Fetch from Firebase
          setModels(carData);
        } catch (err) {
          console.error("Error fetching models:", err);
        }
      };

      fetchModels();
    }, []);

  return (
    <>
    <Helmet>
        <title>Our Car Models</title>
        <meta
          name="description"
          content="Browse our latest car models, featuring top performance and sleek designs."
        />
        <meta name="keywords" content="car models, new cars, vehicles, Dashing, Jetour, T2, X70Plus, SUV, crossover, sedan, hatchback, electric cars, hybrid cars, luxury cars, sports cars, family cars, fuel efficient cars, best cars 2025, latest car models, car reviews, car comparison, car features, car prices, car specs, Jetour T2 specs, Jetour X70Plus specs, Jetour reviews, Jetour SUV, car dealership, auto show, automotive news, car maintenance, car accessories, car interior, car exterior, car safety, car performance, car engine, car transmission, automatic cars, manual cars, car colors, car trims, car financing, car insurance, vehicle registration, car rental, car leasing, best SUVs, affordable cars, premium cars, Jetour dealers, off-road vehicles, four-wheel drive, all-wheel drive, car technology, infotainment system, car warranty, vehicle service, car parts, car upgrades, new car launches, trending cars, top cars, family SUV, daily commute car, city cars, electric SUV, hybrid SUV, Jetour fans, automotive enthusiasts, Jetour owners" />
      </Helmet>
    
    <div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center font-palanquin">Our Models</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed to 3 columns on large screens */}
            {models.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-3xl overflow-hidden hover:scale-105 transition duration-300"
              >
                <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-7 font-palanquin">{car.name}</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600 font-montserrat">
                    <div>
                      <p className="text-sm text-cyan-blue">Top Speed:</p>
                      <p className="font-medium">{car.topSpeed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-cyan-blue">Power:</p>
                      <p className="font-medium">{car.power}</p>
                    </div>
                    <div>
                      <p className="text-sm text-cyan-blue">Max Torque:</p>
                      <p className="font-medium">{car.maxTorque}</p>
                    </div>
                    <div>
                      <p className="text-sm text-cyan-blue">Displacement:</p>
                      <p className="font-medium">{car.displacement}</p>
                    </div>
                  </div>
                  <Link to={`/product-details/${car.id}`}>
                    <button className="mt-4 px-6 py-2 bg-cyan-blue rounded-lg text-white font-medium hover:bg-gray-800 transition duration-300 font-palanquin"> {/* Added w-full */}
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Jetour Section (below the models) - No Boxes */}
      <section className="py-16 px-10 bg-gray-100"> {/* Added background and vertical padding */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-palanquin">Discover the Jetour Difference</h2>
            <p className="text-xl text-gray-700 font-montserrat mb-10">Experience the perfect blend of style, performance, and innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-6"> {/* Increased gap for more space */}
            <div> {/* No box around text */}
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Refined Luxury</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed"> {/* Added leading-relaxed */}
                Indulge in premium craftsmanship and cutting-edge technology. Every Jetour vehicle is designed with your comfort and enjoyment in mind.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Advanced Safety</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Your safety is our top priority. Our SUVs are equipped with the latest safety features to give you peace of mind on every journey.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Versatile Lineup</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                From city cruisers to rugged adventurers, we offer a diverse range of SUVs to match your lifestyle.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Spacious Interiors</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Travel in comfort and style with generous legroom and ample cargo space for all your needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Performance & Efficiency</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                Experience the thrill of driving without compromising on fuel economy. Our engines deliver a perfect balance of power and efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-palanquin">Exceptional Value</h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                We offer competitive pricing and comprehensive warranties to provide you with outstanding value for your investment.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600 font-montserrat text-sm pb-16">
            * Features and specifications may vary by model. Images are for illustrative purposes only. Please contact your local dealer for details.
          </div>

          <div className="relative w-full overflow-hidden rounded-xl flex items-center justify-center h-[300px] md:h-60"> {/* Responsive height */}
            <div className="absolute inset-0 rounded-md">
              <img
                src={forestImage}
                alt="Forest Background"
                className="object-cover w-full h-full rounded-md"
              />
              <div className="absolute inset-0 bg-[#363837] opacity-90"></div>
            </div>
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white p-4 md:p-0"> {/* Responsive padding */}
              <div className="max-w-3xl mx-auto"> {/* Responsive width for text container */}
                <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 font-palanquin">Models Beyond Expectations</h2> {/* Responsive font size */}
                <p className="text-base md:text-xl font-montserrat">Packed with cutting-edge technology and designed for the modern driver.</p> {/* Responsive font size */}
              </div>
            </div>
            </div>              

          <div className="md:w-1/2 text-center md:text-left pt-16"> {/* Adjust width and alignment */}
            <h2 className="text-3xl font-bold mb-4 font-palanquin">Ready to Explore?</h2>
            <p className="text-gray-700 font-montserrat mb-6 leading-relaxed">
            Have questions or want to learn more about our models?  Contact us today!
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=jetourethiopia@gmail.com&su=Link Up with Jetour&body=I'm interested in connecting with Jetour. Let me know how I can get involved.`}
              target="_blank"  // Open in a new tab
              rel="noopener noreferrer" // Security best practice for _blank links
              className="px-8 py-3 bg-[#363837] rounded-lg text-white font-medium font-palanquin hover:bg-gray-800 transition duration-300"
          >
              Contact Us
          </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Models;