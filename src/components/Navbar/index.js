import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Haris</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}; //kada kliknemo NavIcon onda ce trigerovati ce toggle

export default Navbar;
