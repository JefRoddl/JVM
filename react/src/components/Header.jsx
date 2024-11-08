import {useRef, useState, useEffect} from 'react';
import logo from "../assets/images/newLogo.png";
import menu from "../assets/images/cardapio.png";
import { Link } from 'react-scroll';

const Header = ({handleChange, headerCss }) => {
  return (
    <header className={headerCss}>
      <img className='logo' src={logo} alt='logo' />
      <button className='buttonMenu' onClick={handleChange}>
        <img className='menuIcon' src={menu} alt="menu" />
      </button>

      <Link to="servicos" className='servicosHeader' smooth={true} duration={500} offset={-window.innerHeight / 10}>Nossos serviços</Link>
      <Link to="portfolio" className='portfolioHeader' smooth={true} duration={500} offset={-window.innerHeight / 10}>Portfólio</Link>
      <Link to="sobre" className='sobreHeader' smooth={true} duration={500} offset={-window.innerHeight / 11}>Sobre Nós</Link>
      <Link to='inicio' className='inicioHeader' smooth={true} duration={500}>Inicio</Link>

    </header>
  );
}

export default Header;