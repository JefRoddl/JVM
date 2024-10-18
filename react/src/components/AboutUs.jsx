import React from 'react'
import alvo from "/src/assets/images/alvo.png"

const AboutUs = () => {
  return (
    <section className='containerAboutUs'>
        <h1 className='h1About'>Sobre a JVM</h1>
        <section className='sectionMission'>
            <img src={alvo} alt="" className='alvo'/>
            <h1>MISSÃO</h1>
        </section>
        <p>A missão da JVM é fornecer serviços de mão de obra especializada com excelência, garantindo agilidade, segurança e eficiência em cada operação</p>
        
    </section>
  )
}

export default AboutUs