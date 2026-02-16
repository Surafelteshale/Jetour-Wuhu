import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { getCarModels } from "../config/firestoreHelpers";

const PopularProducts = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await getCarModels();
        setCarData(cars);
      } catch (err) {
        console.error("Error fetching car models:", err);
      }
    };
    fetchCars();
  }, []);

  const slides = carData.map(car => (
    <img key={car.id} src={car.img} alt={car.name} className="w-full h-auto" />
  ));

  const carNames = carData.map(car => car.name);
  const carSpecs = carData.map(({ topSpeed, power, maxTorque, displacement }) => ({
    topSpeed,
    power,
    maxTorque,
    displacement,
  }));

  return (
    <section>
      <div className="w-full inset-0 bg-gradient-to-b from-white to-gray-300 padding-x pt-14 py-5">
        <Carousel autoSlide={true} carNames={carNames} carSpecs={carSpecs}>
          {slides}
        </Carousel>
      </div>
    </section>
  );
};

export default PopularProducts;
