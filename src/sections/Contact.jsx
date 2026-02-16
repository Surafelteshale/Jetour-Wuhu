import comfortImage from '../assets/images/forest.webp';
import { Link } from 'react-router-dom';

const Contact = () => {

  const handleContactClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=jetourethiopia@gmail.com&su=Connecting with Jetour&body=I'm interested in connecting with Jetour. Please let me know how I can get involved.`, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="relative h-60 w-full">
      <div className="absolute inset-0">
        <img
          src={comfortImage}
          alt="Forest Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-cyan-blue opacity-90"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-semibold leading-tight font-palanquin pb-1">
            LET'S CONNECT
          </h1>
          <p className="text-xl mb-8 text-gray-300 font-montserrat">
            Email us and find you the best
          </p>
          {/* <Link to="/pages/ContactUs">  */}
            <button
              className="px-8 py-3 bg-[#363837] rounded-lg text-white font-medium font-palanquin hover:bg-gray-800 transition duration-300"
              onClick={handleContactClick} // Added onClick handler
            >
              CONTACT US
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;