import React from 'react';
//Tailwind Styled Components
import { HeaderContainer } from '../../styles/Header/';
// Header Components
import Navbar from './Navbar';
import DarkMode from './DarkMode';
import Logo from './Logo';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
      <DarkMode />
    </HeaderContainer>
  );
};

export default Header;
