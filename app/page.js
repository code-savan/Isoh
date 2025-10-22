import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <WhyChoose /> */}
        <Team />
        <Testimonials />
        <CaseStudies />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
