import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { getJetourComfort } from "../config/firestoreHelpers";

const Comfort = () => {
  const [data, setData] = useState({
    image: "",
    tagline: "",
    title1: "",
    title2: "",
    description: "",
    blog_link: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const comfortData = await getJetourComfort();
      setData(comfortData);
    };

    fetchData();
  }, []);

  const formattedDescription = data.description
    ? data.description.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <div className="flex h-screen w-full">
      {/* Left Image */}
      <div className="w-1/2 bg-black">
        {data.image && (
          <img
            src={data.image}
            alt="Jetour Comfort Interior"
            className="object-cover h-full w-full"
          />
        )}
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 sm:w-1/2 bg-black bg-opacity-85 flex flex-col justify-center items-start text-white px-6 sm:px-20 md:px-14 py-6 md:py-5 sm:py-0">
        <div className="text-base mb-4 font-palanquin">{data.tagline}</div>
        <div className="text-4xl font-bold mb-1 tracking-wide font-montserrat">
          {data.title1}
        </div>
        <div className="text-4xl font-bold mb-12 font-montserrat">
          {data.title2}
        </div>
        <div className="text-base leading-relaxed mb-16 font-palanquin">
          {formattedDescription}
        </div>
        {data.blog_link && (
          <Link to={data.blog_link}>
            <Button
              label="Read More"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Comfort;
