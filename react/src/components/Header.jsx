import React from 'react'
import logo from "../assets/images/logo1.png"
import menu from "../assets/images/cardapio.png"

const Header = () => {
  return (
  <header className='header'>
     <img className='logo' src={logo} alt='logo' />
     <img className='menuIcon' src={menu} alt="menu" />
  </header>
  )
}

export default Header