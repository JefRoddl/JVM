import React from 'react'
import { Link } from 'react-scroll';

const DropDownMenu = () => {

  return (
    
    <div className='DropDownMenuContainer'>
        <Link to="servicos" smooth={true} duration={500} offset={-window.innerHeight / 8.5}>Nossos serviços</Link>
      <Link to="portfolio" smooth={true} duration={500} offset={-window.innerHeight / 5}>Portfólio</Link>
      <Link to="sobre" smooth={true} duration={500} offset={-window.innerHeight / 9}>Sobre Nós</Link>
      <Link to='inicio'smooth={true} duration={500}>Inicio</Link>
      </div>
  )
}

export default DropDownMenu