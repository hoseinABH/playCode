import React from 'react';
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavMenu,
  NavLink,
  Bars,
} from './Navbar.style';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../assets/images/logo.svg')} alt="logo" />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/starwars">Starwars</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
