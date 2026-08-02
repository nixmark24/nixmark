import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompanyProfile from "./components/CompanyProfile";
export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Services />
  <About />
  <Portfolio />
  <CompanyProfile />
  <Testimonials />
  <Contact />
  <Footer />
</>
);
}