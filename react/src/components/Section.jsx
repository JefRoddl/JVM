import React, { useState } from 'react'

const Section = () => {

  const [backGroundImage, setBackGroundImage] = useState(false)

  const [isVisible, setIsVisible] = useState(true);

  const handleChangeBackground = () => {
    // Primeiro, esconde a imagem atual (fade out)
    setIsVisible(false);

    // Depois de 1.5s (tempo da transição), troca a imagem e faz o fade in
    setTimeout(() => {
      setBackGroundImage(!backGroundImage); // Alterna entre as imagens
      setIsVisible(true); // Reaparece com a nova imagem
    }, 1500); // Tempo da transição (1.5 segundos)
  };

  return (
    <div className={`${backGroundImage ? 'divSection2' : 'divSection'} ${!isVisible ? 'hidden' : ''}`}>
      <h1 className='FraseSection1'>SEMPRE A SUA DISPOSIÇÃO</h1>
      <button className='buttonSeta' onClick={handleChangeBackground}>
        <img className='imgIcone' src='../src/assets/images/seta-direita.png' alt='Seta' />
      </button>
    </div>
  );
};

export default Section