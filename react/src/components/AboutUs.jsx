import React, { useState, useEffect, useRef } from 'react';
import alvo from "/src/assets/images/alvo.png";
import lampada from "/src/assets/images/lampada.png"

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Define como visível quando o elemento está no viewport
          observer.disconnect(); // Desconecta o observer após a primeira vez
        }
      },
      { threshold: 0.5 } // Muda para 10% de visibilidade
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observa o elemento
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpa a observação
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className='containerAboutUs'>
      <h1 className='h1About'>Sobre a JVM</h1>


      <section className={`sectionMission ${isVisible ? "slideUp" : ""}`}>
        <img src={alvo} alt="" className='alvo' />
        <h1>MISSÃO</h1>
      </section>
      <p className={`missionP ${isVisible ? "slideUp" : ""}`}>
        A missão da JVM é fornecer serviços de mão de obra especializada com excelência, garantindo agilidade, segurança e eficiência em cada operação.
      </p>


      <section className={`sectionVision ${isVisible ? "slideUp" : ""}`}>
        <img src={lampada} alt="" className='lampada' />
        <h1>VISÃO</h1>
      </section>
      <p className={`visionP ${isVisible ? "slideUp" : ""}`}>
        A missão da JVM é fornecer serviços de mão de obra especializada com excelência, garantindo agilidade, segurança e eficiência em cada operação.
      </p>


    </section>
  );
};

export default AboutUs;