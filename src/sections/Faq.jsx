import Accordian, { AccordianItem } from "../components/Accordian";
import comfortAdventure from "../assets/images/comfort_adventure.webp";

const Faq = () => {
  const faqItems = [
    {
      id: "faq-1",
      question: "What is Jetour Wuhu?",
      answer:
        "Jetour Wuhu is a modern automotive platform designed to help customers explore, compare, and understand the latest Jetour vehicles. We bring pricing, specifications, features, and highlights together in one clear and visual experience.",
    },
    {
      id: "faq-2",
      question: "Can I compare different Jetour models?",
      answer:
        "Yes. Jetour Wuhu allows you to compare multiple Jetour models, trims, and key features side by side, making it easier to find the vehicle that fits your needs and budget.",
    },
    {
      id: "faq-3",
      question: "Are the prices shown transparent and up to date?",
      answer:
        "We aim to provide clear and transparent pricing information based on available data. Prices may vary depending on trims, options, and market conditions, and final confirmation is provided during the quotation process.",
    },
    {
      id: "faq-4",
      question: "How do I request a quotation?",
      answer:
        "You can request a quotation directly through Jetour Wuhu by selecting your preferred model and submitting a short, structured form. Our team will follow up with the relevant details as quickly as possible.",
    },
    {
      id: "faq-5",
      question: "Does Jetour Wuhu provide ownership and feature details?",
      answer:
        "Yes. Beyond pricing, we help you understand vehicle features, technology, and ownership considerations so you can make informed and confident decisions.",
    },
  ];

  const handleOnChange = (value) => {
    console.log("Selected FAQ:", value);
  };

  return (
    <section className="flex flex-col items-center justify-center padding max-container">
      <h1 className="text-4xl px-10 pb-10 font-montserrat font-bold">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={comfortAdventure}
            alt="Jetour comfort and adventure"
            className="max-w-full h-auto rounded-2xl shadow-3xl"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="md:w-1/2 w-full">
          <Accordian
            className="w-full max-w-lg font-montserrat border border-gray-200 rounded-lg overflow-hidden"
            onChange={handleOnChange}
          >
            {faqItems.map((item) => (
              <AccordianItem
                key={item.id}
                value={item.id}
                trigger={item.question}
              >
                {item.answer}
              </AccordianItem>
            ))}
          </Accordian>
        </div>

      </div>
    </section>
  );
};

export default Faq;
