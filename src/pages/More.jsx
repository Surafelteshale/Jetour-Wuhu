import {useState} from 'react';
import safetyImage from '../assets/images/safty.webp';
import HeroCar from '../assets/images/jetour_bg.webp';
import modern from '../assets/images/Modern.webp';
import performance from '../assets/images/performance.webp';
import sustainable from '../assets/images/sustainable.webp';
import adventure from '../assets/images/adventure.webp';
import jetour_place from '../assets/images/jetour_place.webp';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";


const More = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name ||!formData.email ||!formData.message) {
        setAlertMessage(' Please fill all the fields.');
        setAlertType('error');
        return;
    };

    try {
      const subject = `${formData.name} is trying contacting`;
      const body = formData.message;

      const YOUR_EMAILJS_USER_ID = "kXT7nT_YgjuwDKGpm";
      const YOUR_EMAILJS_SERVICE_ID = "service_ey01pu9";
      const YOUR_EMAILJS_TEMPLATE_ID = "template_1cvhqgm";

      emailjs.init(YOUR_EMAILJS_USER_ID); // Initialize EmailJS - This is crucial!

      const templateParams = {
          from_name: formData.name, // Use formData.name
          from_email: formData.email, // Use formData.email
          to_name: 'Jetour Ethiopia',
          message: formData.message, // Use formData.message
      };

      emailjs.send(
          YOUR_EMAILJS_SERVICE_ID,
          YOUR_EMAILJS_TEMPLATE_ID,
          templateParams
      ).then((response) => {
          console.log('Email sent successfully!', response); // Correct placement of console.log
          setAlertMessage('Message sent successfully!');
          setAlertType('success'); // Now this will work
          setFormData({ name: '', email: '', message: '' });
      });

  } catch (error) {
        //... (your error handling code)
        console.error('Error sending email', error);
          setAlertMessage('Error sending message. Please try again later.');
          setAlertType('error'); // Now this will work
    }
  };

  return (
    <>
    <Helmet>
        <title>More About Us</title>
        <meta
          name="description"
          content="Learn more about our company, our values, and our mission."
        />
        <meta name="keywords" content="about us, company info" />
      </Helmet>
    
    <div className="bg-gray-100"> {/* Main container with background and padding */}

      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden"> {/* Hero Section */}
        <img src={HeroCar} alt="Hero Car" className="object-cover w-full h-full absolute inset-0" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-6xl font-bold mb-4 font-palanquin">Explore More with Jetour</h1>
            <p className="text-xl mb-8 font-montserrat text-gray-200">Discover our story, mission, and commitment to excellence.</p>
          </div>
        </div>
      </section>

      {/* Latest Section */}
      <section className="bg-gradient-to-b from-white to-gray-200 py-16 ">
        <div className="max-w-7xl mx-auto text-center pt-10 px-10">
          <h2 className="text-4xl font-semibold text-[#363837]">Why Jetour?</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our offer and mission, designed to elevate your driving experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={modern} alt="Model 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
                <h3 className="text-2xl font-semibold text-white">Modern</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={sustainable} alt="Model 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
                <h3 className="text-2xl font-semibold text-white">Sustainable</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={performance} alt="Model 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center">
                <h3 className="text-2xl font-semibold text-white">Performance</h3>
              </div>
            </div>
            {/* Add more models here */}
          </div>
        </div>
      </section>

      

      <div className="max-w-7xl mx-auto px-6 py-20"> {/* Content container */}

        {/* About Us Section */}
        <section className="mb-8 py-14 p-28">
          <h2 className="text-3xl font-bold mb-4 font-palanquin">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grid layout for responsiveness */}
            <div>
              {/* <img src={jetourLogo} alt="Jetour Logo" className="w-48 mb-4" /> */}
              <p className="text-gray-700 font-montserrat">
                Jetour is more than just a car brand; it's a symbol of adventure, innovation, and luxury. With a rich heritage in automotive excellence, Jetour vehicles are designed to deliver top-tier performance and comfort. We are committed to providing exceptional customer service and building long-lasting relationships with our clients.
              </p>
            </div>
            <div>
            <h2 className="text-3xl font-bold mb-4 font-palanquin"><br/><br/><br/>Our Mission</h2>  
            <p className="text-gray-700 font-montserrat">
            Our mission is to empower people to explore the world with confidence and style. We believe that driving should be an enjoyable experience, and we strive to create vehicles that are both reliable and exciting to drive.  We are constantly innovating and improving our vehicles to meet the evolving needs of our customers.
            </p>
            </div>
          </div>
        </section>

        {/* Blog Section (Example) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 font-palanquin pb-3">Insights and Discoveries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid for blog posts */}
  
            <Link to="/blogs/ShowroomBlog"> 
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full"> {/* Blog post card */}
                <div className="flex-grow"> {/* Ensures content takes up equal space */}
                  <h3 className="text-xl font-semibold mb-2 font-palanquin">Join Us & Update Your Life Today!</h3>
                  <p className="text-gray-700 font-montserrat">A look at the latest trends in the showroom we have.</p>
                </div>
                <img src={jetour_place} alt="Safety" className="mt-4 w-full rounded-md"/>
              </div>
            </Link>

            <Link to="/blogs/SafetyBlog"> 
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full cursor-pointer"> 
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 font-palanquin">Jetour's Commitment to Safety</h3>
                  <p className="text-gray-700 font-montserrat">Learn about the advanced safety features that make Jetour vehicles so safe.</p>
                </div>
                <img src={safetyImage} alt="Safety" className="mt-4 w-full rounded-md" />
              </div>
            </Link>

            <Link to="/blogs/ComfortBlog">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 font-palanquin">Adventure Awaits</h3>
                  <p className="text-gray-700 font-montserrat">Explore the world in a Jetour vehicle and experience the thrill of adventure.</p>
                </div>
                <img src={adventure} alt="Adventure" className="mt-4 w-full rounded-md"/>
              </div>
            </Link>

          </div>

        </section>

        {/* Contact Us Section */}
        <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#363837] font-palanquin">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 font-montserrat">Have questions? Reach out to us for more information about our models or any inquiries you have!</p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto">
          {alertMessage && (
                <div
                    className={`bg-${alertType === 'success' ? 'green' : 'red'}-100 border border-${alertType === 'success' ? 'green' : 'red'}-400 text-${alertType === 'success' ? 'green' : 'red'}-700 px-4 py-3 rounded relative mb-4`}
                    role="alert"
                >
                    <strong className="font-bold">{alertType === 'success' ? 'Success! ' : 'Error!'}</strong>
                    <span className="block sm:inline">{alertMessage}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setAlertMessage(null)}>
                        <svg
                            className={`fill-current h-6 w-6 text-${alertType === 'success' ? 'green' : 'red'}-500`}
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-.849-.348L10 11.871l-3.5 3.028a1.2 1.2 0 1 1-1.697-1.697l3.5-3.028-3.5-3.028a1.2 1.2 0 0 1 1.697-1.697l3.5 3.028 3.5-3.028a1.2 1.2 0 0 1 1.697 1.697l-3.5 3.028 3.5 3.028a1.2 1.2 0 0 1-.849.348z" />
                        </svg>
                    </span>
                </div>
            )}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#363837] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#363837] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#363837] focus:outline-none"
                rows="5"
              />
            </div>
            <button type="submit" className="px-8 py-3 bg-[#363837] rounded-lg text-white font-medium font-palanquin hover:bg-gray-800 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </section>
      </div>
    </div>
    </>
  );
};

export default More;