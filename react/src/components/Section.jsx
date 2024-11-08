import React, { useState, forwardRef } from 'react'

const Section = forwardRef((props, ref) => {

  const [backGroundImage, setBackGroundImage] = useState(false)

  const [isVisible, setIsVisible] = useState(true);

  const [frase, setFrase] = useState("MÃO DE OBRA SOB DEMANDA")

  const handleChangeBackground = () => {
    
    setIsVisible(false);

    
    setTimeout(() => {
      setBackGroundImage(!backGroundImage);
      setFrase(backGroundImage ? "MÃO DE OBRA SOB DEMANDA" : "SERVIÇOS PERSONALIZADOS PARA VOCÊ")
      setIsVisible(true); 
    }, 700); 
  };

  

  return (
    <div ref={ref} id='inicio' className={`${backGroundImage ? 'divSection2' : 'divSection'} ${!isVisible ? 'hidden' : ''}`}>
      <h1 className='FraseSection1'>{frase}</h1>
      <button className='buttonSeta' onClick={handleChangeBackground}>
      </button>

      <button className='buttonSetaLeft' onClick={handleChangeBackground}>

      </button>
    </div>
  );
});

export default Section