import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Hero, PopularProducts, Comfort, Contact, WhyUs, Faq, Safty, Services, Footer, Nav, Events } from "./sections";
import Models from "./pages/Models";
import More from "./pages/More";
import AllEvents from "./pages/AllEvents";
import EventsDetail from "./pages/EventsDetail";
import Signin from "./pages/Signin";
import ProductDetails from "./pages/ProductDetails";
import SafetyBlog from './blogs/SafetyBlog';
import ComfortBlog from './blogs/ComfortBlog';
import ShowroomBlog from './blogs/ShowroomBlog';
import ContactUs from './pages/ContactUs';
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top by default
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Jetour Wuhu | Premium SUVs, Luxury & High-Performance Cars</title>
        <meta 
          name="description" 
          content="Explore Jetour Wuhu – stylish SUVs, family cars, and high-performance vehicles. Discover Jetour models including X70, X90, T-X, and more. Enjoy advanced safety, premium comfort, fuel efficiency, and cutting-edge technology. Book a test drive, check pricing, and compare with other SUVs." 
        />
        <meta 
          name="keywords" 
          content="
            Jetour Wuhu, Jetour, Jetour SUV, Jetour X70, Jetour X90, Jetour T2, family car, Jetour luxury SUV, Jetour high-performance, comfort car, safety car, Jetour fuel-efficient, Jetour technology, Jetour , Jetour dealership, buy Jetour,car dealer, test drive Jetour, China SUVs, SUV comparison China, new cars China, 2025 Jetour, China car reviews, SUV pricing China, premium SUVs China, luxury cars china, Jetour showroom, automotive china, vehicle china, car deals china, crossover SUV china, Jetour online booking, Jetour models china, Jetour offers, reliable SUVs, advanced car technology, stylish SUV china, chsinese auto market
          " 
        />
      </Helmet>

      <section className=" " id="home">
        <Hero />
      </section>
      <section className="padding-x py-8" id="services">
        <Services />
      </section>
      {/* <section className="bg-pale-blue">
        <PopularProducts />
      </section> */}
      <section className="w-full" id="why-us">
        <WhyUs />
      </section>
      <section className="w-full" id="comfort">
        <Comfort />
      </section>
      <section className="w-full" id="safety">
        <Safty />
      </section>
      {/* <section className="w-full">
        <Events />
      </section> */}
      <section id="faq" className="padding">
        <Faq />
      </section>
      {/* <section className="w-full">
        <Contact />
      </section> */}
    </>
  );
};

const App = () => (
  <Router>
    <main className="relative">
      <Nav />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/models" element={<Models />} />
        <Route path="/signin" element={<Signin />} />
        {/* Add more routes as needed */}
      </Routes>

      <section className="bg-[#363837] padding-x pt-10 pb-8">
        <Footer />
      </section>
    </main>
  </Router>
);

export default App;
