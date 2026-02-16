import { socialMedia } from "../constants";
import { headerLogo } from '../assets/images';
import { jetour_models } from "../constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarModels, getSocialMediaIcons, getContactInfo } from "../config/firestoreHelpers";

const Footer = () => {
  const [carModels, setCarModels] = useState([]);
  const [socials, setSocials] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const models = await getCarModels();
        setCarModels(models);
      } catch (error) {
        console.error("Error fetching car models:", error);
      }
    };

    fetchModels();
  }, []);

  useEffect(() => {
    const fetchContact = async () => {
      const contactInfo = await getContactInfo();
      setContact(contactInfo);
    };
    fetchContact();
  }, []);

  useEffect(() => {
    const fetchIcons = async () => {
      const icons = await getSocialMediaIcons();
      setSocials(icons);
    };

    fetchIcons();
  }, []);

  return (
    <footer className="max-w-7xl mx-auto text-white px-6 py-7"> {/* Added py-12 for consistent padding */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 gap-8 md:gap-6"> {/* Changed to flex-col md:flex-row and added gap */}
        {/* Logo and Brand Name */}
        <div className="w-full md:w-auto text-center md:text-left"> {/* Added w-full md:w-auto */}
          <a href="/">
            <img src={headerLogo} alt="Jetour Logo" className="w-[160px] h-[70px] mx-auto md:mx-0" /> {/* Added md:mx-0 */}
          </a>
        </div>

        {/* Models Section */}
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-gray-300">
          {carModels.map((model) => (
            <Link
              key={model.id}
              to={`/product-details/${model.name}`}
              className="hover:text-white transition duration-300"
            >
              {model.name}
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 text-center"> {/* Added mt-8 */}
        <h3 className="text-xl font-semibold font-palanquin">About Jetour Ethiopia</h3>
        <p className="text-gray-400 mt-2 max-w-3xl mx-auto font-montserrat">
          Jetour is more than just a car brand; it's a symbol of adventure, innovation, and luxury. With a rich heritage in automotive excellence, Jetour vehicles are designed to deliver top-tier performance and comfort.
        </p>
      </div>

      {/* Contact and Social Media Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6"> {/* Changed to flex-col md:flex-row and added gap */}
      
      {/* Contact Information */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-xl font-semibold font-palanquin">Contact Us</h3>
        <p className="text-gray-400 mt-2 font-montserrat">Have questions? Reach out to us:</p>
        <p className="text-gray-300 font-montserrat">
          Email: {contact.email} | Phone: {contact.phone}
        </p>
        <p className="text-gray-400 font-montserrat">{contact.location}</p>
      </div>


      {/* Social Media Section */}
      <div className="w-full md:w-auto text-center md:text-right">
        <h3 className="text-xl font-semibold font-palanquin">Join Us</h3>
        <p className="text-gray-400 mt-1 font-montserrat">
          Stay connected with us on social media for the latest updates
        </p>
        <div className="flex justify-center md:justify-end gap-6 mt-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img src={social.src} alt={social.alt} className="w-8 h-8 filter invert" />
            </a>
          ))}
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;