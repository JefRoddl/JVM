import React, { useState } from 'react'

const Section = () => {

  const [backGroundImage, setBackGroundImage] = useState(false)

  const [isVisible, setIsVisible] = useState(true);

  const [frase, setFrase] = useState("SEMPRE A SUA DISPOSIÇÃO")

  const handleChangeBackground = () => {
    
    setIsVisible(false);

    
    setTimeout(() => {
      setBackGroundImage(!backGroundImage);
      setFrase(backGroundImage ? "SEMPRE A SUA DISPOSIÇÃO" : "SERVIÇOS PERSONALIZADOS PARA SUA DEMANDA")
      setIsVisible(true); 
    }, 700); 
  };

  return (
    <div className={`${backGroundImage ? 'divSection2' : 'divSection'} ${!isVisible ? 'hidden' : ''}`}>
      <h1 className='FraseSection1'>{frase}</h1>
      <button className='buttonSeta' onClick={handleChangeBackground}>
        
      </button>
    </div>
  );
};

export default Section