//Tailwind Styled Components
import { Navbar, Nav, NavItem, NavLink } from '../../styles/Header/Menu';

export default function Menu() {
  return (
    <>
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink href='#home'>Ana Sayfa</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#projects'>Projelerim</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#blog'>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact'>İletişim</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}
