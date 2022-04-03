import React from 'react';
import CTA from './CTA';
import './header.css';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () =>{
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rutik Gagare</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={me} alt="not found" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;