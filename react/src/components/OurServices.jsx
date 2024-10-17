import React from 'react'

import iconeDescarga from "/src/assets/images/iconeDescarga.png"
import iconeConferente from "/src/assets/images/iconeConferente.png"
import iconeLimpeza from "/src/assets/images/iconeLimpeza.png"

const OurServices = () => {
  return (
    <div className='containerServices'>
        <h1 className='h1Services'>Conheça nossos serviços</h1>
        <section className='cargaDescarga'>
            <img className='iconeDescarga' src={iconeDescarga} alt="" />
            <p className='textServiceDescarga'>Carga e descarga rápida e segura, realizada por profissionais especializados para garantir eficiência no processo</p>
        </section>
        <section className='conferente'>
            <p className='textServiceConferente'>Oferecemos mão de obra especializada para o serviço de conferência, garantindo precisão e controle rigoroso de mercadorias</p>
            <img className='iconeConferente' src={iconeConferente} alt="" />
        </section>
        <section className='limpeza'>
            <img className='iconeDescarga' src={iconeLimpeza} alt="" />
            <p className='textServiceDescarga'>serviços de limpeza empresarial com equipe treinada e dedicada, garantindo ambientes sempre limpos e organizados</p>
        </section>
    </div>
  )
}

export default OurServices