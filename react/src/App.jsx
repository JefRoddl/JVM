import { useState } from "react";
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

  const handleCss = () => {
    setHeaderCss((prevClass) => (prevClass === "header" ? "headerNew" : "header"));
  }

  const handleChange = () => {
    setIsVisible(!isVisible);
    handleCss();  // Chama a função para mudar a classe do header
  }

  return (
    <div className="container">
      {/* Passa a classe dinamicamente para o Header */}
      <Header handleChange={handleChange} headerCss={headerCss} />
      {isVisible && <DropDownMenu />}
      <Section />
      <OurServicesNew />
      <Portfolio />
      <AboutUs />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
