import React from 'react'
import { Link } from 'react-scroll';

const DropDownMenu = () => {

  return (
    
    <div className='DropDownMenuContainer'>
        <Link to="servicos" smooth={true} duration={500}>Nossos serviços</Link>
      <Link to="portfolio" smooth={true} duration={500}>Portfólio</Link>
      <Link to="sobre" smooth={true} duration={500}>Sobre Nós</Link>
      <Link to='inicio'smooth={true} duration={500}>Inicio</Link>
      </div>
  )
}

export default DropDownMenu