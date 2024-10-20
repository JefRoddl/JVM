import React, { useState, useEffect, useRef } from 'react';
import alvo from "/src/assets/images/alvo.png";
import lampada from "/src/assets/images/lampada.png";
import unidas from "/src/assets/images/unidas.png";

const AboutUs = () => {
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isValoresVisible, setIsValoresVisible] = useState(false);

  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valoresRef = useRef(null);

  useEffect(() => {
    // Observer para a seção Missão
    const missionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsMissionVisible(true);
          missionObserver.disconnect();
        }
      },
      { threshold: 0.5 } // A seção Missão aparece quando 50% dela está visível
    );

    if (missionRef.current) {
      missionObserver.observe(missionRef.current);
    }

    // Observer para a seção Visão
    const visionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisionVisible(true);
          visionObserver.disconnect();
        }
      },
      { threshold: 0.5 } // A seção Visão aparece quando 50% dela está visível
    );

    if (visionRef.current) {
      visionObserver.observe(visionRef.current);
    }

    // Observer para a seção Valores
    const valoresObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsValoresVisible(true);
          valoresObserver.disconnect();
        }
      },
      { threshold: 0.5 } // A seção Valores aparece quando 50% dela está visível
    );

    if (valoresRef.current) {
      valoresObserver.observe(valoresRef.current);
    }

    // Limpar observers quando o componente desmontar
    return () => {
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (valoresRef.current) valoresObserver.unobserve(valoresRef.current);
    };
  }, []);

  return (
    <section className='containerAboutUs'>
      <h1 className='h1About'>Sobre a JVM</h1>

      <section ref={missionRef} className={`sectionMission ${isMissionVisible ? "slideUp" : ""}`}>
        <img src={alvo} alt="" className='alvo' />
        <h1>MISSÃO</h1>
      </section>
      <p className={`missionP ${isMissionVisible ? "slideUp" : ""}`}>
        A missão da JVM é fornecer serviços de mão de obra especializada com excelência, garantindo agilidade, segurança e eficiência em cada operação.
      </p>

      <section ref={visionRef} className={`sectionVision ${isVisionVisible ? "slideUp" : ""}`}>
        <img src={lampada} alt="" className='lampada' />
        <h1>VISÃO</h1>
      </section>
      <p className={`visionP ${isVisionVisible ? "slideUp" : ""}`}>
        Nossa visão é liderar o mercado de terceirização de serviços, sendo referência em eficiência, confiabilidade e excelência.
      </p>

      <section ref={valoresRef} className={`sectionValores ${isValoresVisible ? "slideUp" : ""}`}>
        <img src={unidas} alt="" className='unidas' />
        <h1>VALORES</h1>
      </section>
      <p className={`valoresP ${isValoresVisible ? "slideUp" : ""}`}>
      valorizamos o compromisso com a qualidade, a responsabilidade em cada serviço e a integridade em todas as nossas ações.
      </p>
    </section>
  );
};

export default AboutUs;