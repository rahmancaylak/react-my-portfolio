import React from 'react';
//Tailwind Styled Components
import { Nav, Ul, Li, A } from '../../styles/Header/Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li>
            <A href='#home'>Ana Sayfa</A>
          </Li>
          <Li>
            <A href='#about'>Hakkımda</A>
          </Li>
          <Li>
            <A href='#projects'>Projelerim</A>
          </Li>
          <Li>
            <A href='#blog'>Blog</A>
          </Li>
          <Li>
            <A href='#contact'>İletişim</A>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};

export default Navbar;
