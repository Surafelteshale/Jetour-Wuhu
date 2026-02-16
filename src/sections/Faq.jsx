import React, { useEffect, useState } from "react";
import Accordian, { AccordianItem } from "../components/Accordian";
import { getJetourFaq } from "../config/firestoreHelpers";

const Faq = () => {
  const [faqData, setFaqData] = useState({
    image: "",
    faqItems: [],
  });

  useEffect(() => {
    const fetchFaqData = async () => {
      const data = await getJetourFaq();
      setFaqData(data);
    };
    fetchFaqData();
  }, []);

  const handleOnChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl px-10 pb-10 font-montserrat font-bold">FAQ</h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-0">
        {/* Image Section */}
        <div className="md:w-1/2 p-4">
          {faqData.image && (
            <img
              src={faqData.image}
              alt="Jetour Car"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="md:w-1/2 p-4">
          <Accordian
            className="max-w-lg font-montserrat w-full md:w-auto"
            onChange={handleOnChange}
          >
            {faqData.faqItems.map((item) => (
              <AccordianItem key={item.id} value={item.id} trigger={item.question}>
                {item.answer}
              </AccordianItem>
            ))}
          </Accordian>
        </div>
      </div>
    </div>
  );
};

export default Faq;
