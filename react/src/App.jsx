import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import Portfolio from "./components/Portfolio";
import DropDownMenu from "./components/DropDownMenu";
import OurServicesNew from "./components/OurServicesNew";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerCss, setHeaderCss] = useState("header");
  const SectionRef = useRef(null);

  const handleCss = () => {
    setHeaderCss((prevClass) => (prevClass === "header" ? "headerNew" : "header"));
  };

  const handleChange = () => {
    setIsVisible(!isVisible);
    handleCss();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Alterar o CSS do header
        if (entry.isIntersecting) {
          setHeaderCss("header"); // Altera o estilo do Header
        } else {
          setHeaderCss("headerVisible"); // Volta para o estilo original
        }
      },
      { threshold: 0.5 }
    );

    if (SectionRef.current) {
      observer.observe(SectionRef.current);
    }

    return () => {
      if (SectionRef.current) {
        observer.unobserve(SectionRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <Header handleChange={handleChange} headerCss={headerCss} />
      {isVisible && <DropDownMenu />}
      <Section ref={SectionRef}/>
      <OurServicesNew />
      <Portfolio />
      <AboutUs />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
