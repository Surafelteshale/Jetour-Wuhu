import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Get URL parameters
import { jetour_models, Dashing, T2, X50, X70_PLUS, Dashing_colors, T2_colors, X70_PLUS_colors, X50_colors } from "../constants";
import { getCarModels } from "../config/firestoreHelpers";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
    const { modelName } = useParams();
    const [model, setModel] = useState(null);
    // const model = jetour_models.find((car) => car.customerName === modelName);
    const [selectedColor, setSelectedColor] = useState("black");
    const [carModels, setCarModels] = useState([]);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const [alternativeImages, setAlternativeImages] = useState([]);
    // const [displayedImage, setDisplayedImage] = useState(Dashing_colors[0].image);;

    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [currentColors, setCurrentColors] = useState([]);
    const [recommendedModels, setRecommendedModels] = useState([]);


    // useEffect(() => {    

    //     window.scrollTo(0, 0);

    //     const fetchAlternativeImages = async () => {
    //       switch (modelName) { // Use a switch statement for cleaner logic
    //           case "Dashing":
    //               setAlternativeImages(Dashing);
    //               setCurrentColors(Dashing_colors);
    //               break;
    //           case "T2":
    //               setAlternativeImages(T2);
    //               setCurrentColors(T2_colors);
    //               break;
    //           case "X50":
    //               setAlternativeImages(X50);
    //               setCurrentColors(X50_colors);
    //               break;
    //           case "X70 PLUS":
    //               setAlternativeImages(X70_PLUS);
    //               setCurrentColors(X70_PLUS_colors);
    //               break;
    //           default: // For all other models
    //               const images = [];
    //               for (let i = 1; i <= 4; i++) {
    //                   const imagePath = `/models/${modelName}${i}.webp`;
    //                   images.push(imagePath); // Store the path directly
    //               }
    //               setAlternativeImages(images);
    //               break;
    //       }
    //   };

    //     if (model) {
    //         fetchAlternativeImages();
    //         setDisplayedImage(model.imgURL);
    //     } else {
    //         setAlternativeImages([]);
    //     }
    // }, [modelName, selectedColor, model]);
    useEffect(() => {
    const fetchModels = async () => {
      const models = await getCarModels();
      setCarModels(models);
      const selectedModel = models.find((car) => car.name === modelName);
      setModel(selectedModel);

      if (selectedModel) {
        setCurrentColors(selectedModel.colorOptions || []);
        // setAlternativeImages(selectedModel.colorOptions.map(opt => opt.imageURL)); // optional
        setAlternativeImages(selectedModel.modelImages || []);
      }
      const recommendations = models.filter(car => car.name !== modelName);
      setRecommendedModels(recommendations);
    };

    fetchModels();
    window.scrollTo(0, 0);
  }, [modelName]);

    const handleImageClick = (image) => {
        setFullScreenImage(image);
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
        setFullScreenImage(null);
    };

    // const recommendedModels = jetour_models.filter(
    //     (car) => car.customerName !== modelName
    // );

    if (!model) {
        return <div className="text-center text-red-500 text-xl mt-10">Model not found.</div>;
    }

  return (
    <>
    <Helmet>
      <title>{model.name} | Jetour Ethiopia</title>
      <meta
        name="description"
        content={`Explore the ${model.name} from Jetour Ethiopia. ${model.description || "Discover premium design, comfort, and performance."}`}
      />
      <meta
        name="keywords"
        content={`Jetour ${model.name}, Jetour Ethiopia, SUV, ${model.name} features, ${model.name} price`}
      />
      <meta property="og:title" content={`${model.name} | Jetour Ethiopia`} />
      <meta property="og:description" content={`Explore the ${model.name} and book a test drive today.`} />
      <meta property="og:image" content={model.img} />
      <meta property="og:url" content={`https://jetouret.com/product-details/${model.name}`} />
    </Helmet>
    
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative w-full overflow-hidden rounded-xl">
        <img
                src={currentColors[selectedColorIndex]?.imageURL || model.img} // Now displayedImage is always correct
                alt={model?.name}
                className="object-cover w-full h-auto md:h-auto rounded-xl"
            />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">{model.name}</h1>
          <p className="text-gray-700 text-lg mb-6">Discover the power, speed, and performance of {model.name}.</p>

          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="text-sm text-cyan-blue">Top Speed:</p>
              <p className="font-medium">{model.topSpeed}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Power:</p>
              <p className="font-medium">{model.power}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Max Torque:</p>
              <p className="font-medium">{model.maxTorque}</p>
            </div>
            <div>
              <p className="text-sm text-cyan-blue">Displacement:</p>
              <p className="font-medium">{model.displacement}</p>
            </div>
          </div>
          <button
            onClick={() => {
              const gmailLink = `https://mail.google.com/mail/?view=cm&to=jetourethiopia@gmail.com&su=Inquiry about ${model.customerName}&body=I am interested in the ${model.customerName}. Please provide more information.`;
              window.open(gmailLink, "_blank");
            }}
            className="mt-6 px-6 mr-40 py-3 bg-cyan-blue rounded-lg text-white font-medium hover:bg-gray-800 transition duration-300 sm:w-auto sm:mr-40"
          >
            Contact Us for More Info
          </button>

        </div>
      </div>

      {/* Color Selection
      <div className="mt-12 flex justify-center space-x-4">
          {[
              { color: "black", bg: "bg-black" },
              {
                  color: modelName === "X70 PLUS" ? "red" : (modelName === "X50" || modelName === "Dashing" ? "cyan" : "yellow"),
                  bg: modelName === "X70 PLUS" ? "bg-red-500" : (modelName === "X50" || modelName === "Dashing" ? "bg-cyan-200" : "bg-yellow-500"),
              },
              {
                  color: modelName === "X70 PLUS" ? "lightblue" : "grey",
                  bg: modelName === "X70 PLUS" ? "bg-blue-900" : "bg-gray-500",
              },
              {
                color: modelName === "X70 PLUS" ? "deepblue" : (modelName === "Dashing" ? "red" : "silver"),
                bg: modelName === "X70 PLUS" ? "bg-blue-800" : (modelName === "Dashing" ? "bg-red-500" : "bg-gray-200"),
              },
              { color: "white", bg: "bg-white border border-gray-300" },
          ].map(({ color, bg }, index) => ( // Get the index here
              <button
                  key={color}
                  className={`shadow-lg w-10 h-10 rounded-full ${bg} ${currentColors[selectedColorIndex].color === color ? "ring-4 ring-cyan-blue" : ""}`} // Use selectedColorIndex to get color and compare
                  onClick={() => {
                      setSelectedColorIndex(index); // Set the index on click
                  }}
              />
          ))}
      </div> */}
      {/* Color Selection */}
      <div className="mt-12 flex justify-center space-x-4">
        {currentColors.map((colorOption, index) => (
          <button
            key={colorOption.color}
            className={`shadow-lg w-10 h-10 rounded-full ${colorOption.bg  || 'bg-gray-400'} ${selectedColorIndex === index ? "ring-4 ring-cyan-blue" : ""}`}
            onClick={() => setSelectedColorIndex(index)}
          />
        ))}
      </div>



      {/* Description Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-black font-palanquin mb-4">About {model.name}</h2>
        <p className="text-base text-[#363837] font-montserrat leading-relaxed">{model.description}</p>
      </div>

      {/* Three-Photo Creative Layout */}
      {/* Dynamic Image Layout */}
      <div className="mt-16">
        {alternativeImages.length > 0 ? (
          <div
            className={`grid gap-6 ${
              alternativeImages.length === 1
                ? 'grid-cols-1'
                : alternativeImages.length === 2
                ? 'grid-cols-2'
                : alternativeImages.length === 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {alternativeImages.map((image, index) => {
              const spanClass =
                alternativeImages.length === 3 && index === 0 ? 'md:col-span-2' : '';

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl cursor-pointer ${spanClass}`}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`${modelName} Image ${index + 1}`}
                    className="object-cover w-full h-64 rounded-xl transition duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No alternative images available for {modelName} yet.</p>
        )}
      </div>


        {/* {alternativeImages.length > 1 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alternativeImages.slice(0, 1).map((image, index) => (
                <div key={`bottom-${index}`} className="relative overflow-hidden rounded-xl cursor-pointer md:col-span-2 lg:col-span-2" onClick={() => handleImageClick(image)}>
                    <img
                        src={image}
                        alt={`${modelName} Bottom Image ${index + 1}`}
                        className="object-cover w-full h-64 rounded-xl transition duration-300 hover:scale-105"
                    />
                </div>
            ))}
            {alternativeImages.slice(1, 2).map((image, index) => (
                <div key={`bottom-${index + 1}`} className="relative overflow-hidden rounded-xl cursor-pointer md:col-span-1 lg:col-span-2" onClick={() => handleImageClick(image)}>
                    <img
                        src={image}
                        alt={`${modelName} Bottom Image ${index + 2}`}
                        className="object-cover w-full h-64 rounded-xl transition duration-300 hover:scale-105"
                    />
                </div>))}
            </div>
        )} */}
                  
      {/* Full-screen overlay */}
      {isFullScreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center cursor-pointer"
          onClick={closeFullScreen} // Close on overlay click
        >
          <img
            src={fullScreenImage}
            alt="Full Screen Image"
            className="max-w-full max-h-full" // Maintain aspect ratio
          />
        </div>
      )}

      {/* Our Other Models (Recommendations) */}
      {recommendedModels.length > 0 && ( // Conditionally render if there are recommendations
          <div className="mt-24">
              <h2 className="text-3xl font-semibold text-black font-palanquin mb-4">Our Other Models</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recommendedModels.map((car) => (
                      <div
                          key={car.id}
                          className="bg-white rounded-xl shadow-3xl overflow-hidden hover:scale-105 transition duration-300"
                      >
                          <img
                              src={car.img}
                              alt={car.name}
                              className="w-full h-48 object-cover"
                              loading="lazy"
                          />
                          <div className="p-6">
                              <h2 className="text-2xl font-semibold mb-7 font-palanquin">
                                  {car.name}
                              </h2>
                              <div className="grid grid-cols-2 gap-4 text-gray-600 font-montserrat">
                                  {/* ... (stats grid) */}
                              </div>
                              <Link to={`/product-details/${car.name}`}>
                                  <button className="mt-4 px-6 py-2 bg-cyan-blue rounded-lg text-white font-medium hover:bg-gray-800 transition duration-300 font-palanquin">
                                      Learn More
                                  </button>
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )}

      <div className="text-center md:text-left pt-16 w-full"> 
          <h2 className="text-3xl font-bold mb-4 font-palanquin">Ready to Know More about Our Models?</h2>
          <p className="text-gray-700 font-montserrat mb-6 leading-relaxed">
              Jetour vehicles represent a harmonious blend of cutting-edge technology, sophisticated design, and exceptional performance, catering to the modern driver's diverse needs.
               Each model is meticulously crafted to deliver an unparalleled driving experience, seamlessly integrating advanced features, comfortable interiors, and powerful engines. <br/>
               Whether navigating bustling city streets or embarking on adventurous journeys, a Jetour vehicle empowers you to embrace the road with confidence and style.
          </p>
          <p className="text-gray-700 font-montserrat mb-6 leading-relaxed">
            From sleek sedans to versatile SUVs, the Jetour lineup offers a range of options to suit individual preferences and lifestyles.  Each vehicle embodies a commitment to quality, innovation, and driver-centric design.  Jetour models are engineered to provide not just transportation, but a truly enjoyable and connected driving experience, enhancing every journey with a perfect balance of comfort, performance, and advanced technology. 
          </p>
      </div>

      <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-xl pt-16 mt-16"> {/* Rounded corners */}
      
        <div className="absolute inset-0 bg-[#363837]"></div> {/* Darker gradient */}

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto py-16 md:py-24">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-palanquin leading-tight mb-6 sm:mb-8">
                      Models Beyond <span className="text-cyan-400">Expectations</span>
                  </h2>
                  <p className="text-sm sm:text-base font-montserrat leading-relaxed max-w-2xl mx-auto">
                      Experience the future of driving with Jetour's innovative models, seamlessly blending cutting-edge technology, unparalleled performance, and sophisticated design. Each vehicle is crafted to elevate your driving experience, providing a perfect balance of comfort, style, and capability.
                  </p>
                  <div className="mt-12 sm:mt-16">
                      <Link to="/models">
                          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition duration-300">
                              Explore Our Models
                          </button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>                    
    </div>
    </>
  );
};

export default ProductDetails;
