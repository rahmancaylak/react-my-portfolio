//Tailwind Styled Components
import { Section, Container } from '../../styles/Header/';
// Header Components
import Menu from './Menu';
import DarkMode from './DarkMode';
import Logo from './Logo';

export default function Header() {
  return (
    <Section>
      <Container>
        <Logo />
        <Menu />
        <DarkMode />
      </Container>
    </Section>
  );
}
