import React from 'react';
import logo from "../assets/images/newLogo.png";
import menu from "../assets/images/cardapio.png";

const Header = ({ handleChange, headerCss }) => {
  return (
    <header className={headerCss}>
      <img className='logo' src={logo} alt='logo' />
      <button className='buttonMenu' onClick={handleChange}>
        <img className='menuIcon' src={menu} alt="menu" />
      </button>
    </header>
  );
}

export default Header;