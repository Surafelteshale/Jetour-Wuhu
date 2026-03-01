import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Hero, PopularProducts, Comfort, Contact, WhyUs, Faq, Safty, Services, Footer, Nav, Events } from "./sections";
import Models from "./pages/Models";
import Signin from "./pages/Signin";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { AuthProvider, useAuth  } from "./context/AuthContext";

// --- LANDING PAGE COMPONENT ---
const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Jetour Wuhu | Premium SUVs, Luxury & High-Performance Cars</title>
        <meta name="description" content="Explore Jetour Wuhu..." />
      </Helmet>

      <section id="home"><Hero /></section>
      <section className="padding-x py-8" id="services"><Services /></section>
      <section className="w-full" id="why-us"><WhyUs /></section>
      <section className="w-full" id="comfort"><Comfort /></section>
      <section className="w-full" id="safety"><Safty /></section>
      <section id="faq" className="padding"><Faq /></section>
    </>
  );
};

// --- LAYOUT WRAPPER ---
// This component sits inside the Router so it can use useLocation()
const LayoutWrapper = () => {
  const location = useLocation();
  
  // Logic lives here now!
  const hideNavAndFooter = ["/signin", "/models"].includes(location.pathname);

  return (
    <main className="relative">
      {/* Conditionally render Nav */}
      {!hideNavAndFooter && <Nav />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/models" element={<Models />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      {/* Conditionally render Footer */}
      {!hideNavAndFooter && (
        <section className="bg-black/70">
          <Footer />
        </section>
      )}
    </main>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => (
  <AuthProvider>
    <Router>
      <LayoutWrapper />
    </Router>
  </AuthProvider>
);

export default App;