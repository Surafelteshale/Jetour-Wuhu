import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, PopularProducts, Comfort, Contact, Faq, Safty, Services, Footer, Nav, Events } from "./sections";
import Models from "./pages/Models";
import More from "./pages/More";
import AllEvents from "./pages/AllEvents";
import EventsDetail from "./pages/EventsDetail";
import ProductDetails from "./pages/ProductDetails";
import SafetyBlog from './blogs/SafetyBlog';
import ComfortBlog from './blogs/ComfortBlog';
import ShowroomBlog from './blogs/ShowroomBlog';
import ContactUs from './pages/ContactUs';
import { Helmet } from "react-helmet";

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Jetour Ethiopia | Premium SUVs, Luxury & High-Performance Cars</title>
              <meta 
                name="description" 
                content="Explore Jetour Ethiopia – stylish SUVs, family cars, and high-performance vehicles. Discover Jetour models including X70, X90, T-X, and more. Enjoy advanced safety, premium comfort, fuel efficiency, and cutting-edge technology. Book a test drive, check pricing, visit our showroom in Addis Ababa, and compare with other SUVs in Ethiopia." 
              />
              <meta 
                name="keywords" 
                content="
                  Jetour Ethiopia, Jetour, Jetour SUV, Jetour X70, Jetour X90, Jetour T2, family car, Jetour luxury SUV, Jetour high-performance, comfort car, safety car, Jetour fuel-efficient, Jetour technology, Jetour Addis Ababa, Jetour dealership, buy Jetour, Ethiopia car dealer, test drive Jetour, Ethiopian SUVs, SUV comparison Ethiopia, new cars Ethiopia, 2025 Jetour, Ethiopian car reviews, SUV pricing Ethiopia, premium SUVs Ethiopia, luxury cars Ethiopia, Jetour showroom, automotive Ethiopia, vehicle Ethiopia, car deals Ethiopia, crossover SUV Ethiopia, Jetour online booking, Jetour models Ethiopia, Jetour offers, reliable SUVs, advanced car technology, stylish SUV Ethiopia, Ethiopian auto market
                " 
              />
            </Helmet>


            <section className="xl:padding-1 wide:padding-r ">
              <Hero />
            </section>
            <section className="padding-x py-8">
              <Services />
            </section>
            <section className="bg-pale-blue">
              <PopularProducts />
            </section>
            <section className="w-full">
              <Comfort />
            </section>
            <section className="w-full">
              <Safty />
            </section>
            {/* <section className="w-full">
              <Events />
            </section> */}
            <section className="padding">
              <Faq />
            </section>
            <section className="w-full">
              <Contact />
            </section>
          </>
        } />
        
        <Route path="/models" element={<Models />} />
        <Route path="/more" element={<More />} />
        <Route path="/product-details/:modelName" element={<ProductDetails />} />
        <Route path="/blogs/SafetyBlog" element={<SafetyBlog />} />
        <Route path="/blogs/ComfortBlog" element={<ComfortBlog />} />
        <Route path="/blogs/ShowroomBlog" element={<ShowroomBlog />} />
        <Route path="/pages/ContactUs" element={<ContactUs />} />
        {/* <Route path="/all-events" element={<AllEvents />} /> */}
        <Route path="/events-detail" element={<EventsDetail />} />
        

      </Routes>

      <section className="bg-[#363837] padding-x pt-10 pb-8">
        <Footer />
      </section>
    </main>
  </Router>
);

export default App;
