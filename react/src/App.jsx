
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Section from "./components/Section"
import OurServices from "./components/OurServices"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Whatsapp from "./components/Whatsapp"
import Portfolio from "./components/Portfolio"
import DropDownMenu from "./components/DropDownMenu"


function App() {

  
  return (
    <div className="container">
      <Header />
      <DropDownMenu />
      <Section />
      <OurServices />
      <Portfolio />
      <AboutUs />
      <Whatsapp />
      <Footer />
    </div>


  )


    
  
}

export default App
