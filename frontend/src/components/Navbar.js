// Contains the navigation bar.

import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>HealthApp</h1>
      <div>
        <NavLink to="hero" smooth={true} duration={500}>Home</NavLink>
        <NavLink to="features" smooth={true} duration={500}>Features</NavLink>
        <NavLink to="visualization" smooth={true} duration={500}>Visualization</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
