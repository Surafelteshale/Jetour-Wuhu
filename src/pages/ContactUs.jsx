import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState(''); 

  useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on component mount
      }, []);
  

  const mapRef = useRef(null); // Ref to hold the map div

    useEffect(() => {
        if (mapRef.current) { // Check if the div exists
            const map = L.map(mapRef.current, { // Use the ref
                center: [8.995504, 38.761463],
                zoom: 15,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([8.995504,38.761463]).addTo(map)
                .bindPopup('Jetour, Addis Abeba')
                .openPopup();

            return () => { // Cleanup function (crucial!)
                map.remove(); // Remove the map instance
            };
        }
    }, []);


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
    <section className="py-16 px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#363837] font-palanquin">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600 font-montserrat">
          Have questions? Reach out to us for more information about our models or any inquiries you have!
        </p>

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
      <button
        type="submit"
        className="px-8 py-3 bg-[#363837] rounded-lg text-white font-medium font-palanquin hover:bg-gray-800 transition duration-300"
      >
        Submit
      </button>
    </form>

        <div className="mt-20">
            <h3 className="text-4xl font-semibold text-[#363837] font-palanquin">Our Location</h3>
            <h3 className='mt-4 text-lg text-gray-600 font-montserrat mb-8'>Jetour Ethiopia, Addis Ababa</h3>
            <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div> {/* Ref on the map div */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
