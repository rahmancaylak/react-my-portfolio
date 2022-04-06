// Data
import { ProfileData } from '../../data/MyProfile';
import { SocialMediaData } from '../../data/SocialMedia';
// Fontawesome Icons
import { FaAngleDown } from 'react-icons/fa';
// Tailwind Styled Components
import {
  Section,
  Container,
  Sidebar,
  Content,
  Nav,
  NavItem,
  NavLink,
  Img,
  Title,
  SubText,
  ProjectLink,
  GithubLink,
  AboutArrow,
} from '../../styles/Hero';

export default function Hero() {
  return (
    <Section id='home'>
      <Container>
        <Sidebar>
          <Nav>
            {SocialMediaData.map((socialMedia) => (
              <NavItem key={socialMedia.id}>
                <NavLink
                  href={socialMedia.url}
                  className={socialMedia.sidebarClass}
                >
                  {socialMedia.icon}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Sidebar>
        <Content>
          <Img src={`${ProfileData.image}`} alt={ProfileData.imageAlt}></Img>
          <Title>
            Merhaba, ben {`${ProfileData.name} ${ProfileData.surname}`}.
          </Title>
          <SubText>
            HTML, CSS, JavaScript ve React gibi Front-End teknolojilerini
            öğrenmekteyim. Yaptığım projeleri{' '}
            <ProjectLink href='#projects'>Projelerim</ProjectLink> başlığından
            inceleyebilir ya da{' '}
            <GithubLink href='https://github.com/rahmancaylak'>
              GitHub
            </GithubLink>{' '}
            hesabımdan direkt kodlara erişebilirsiniz.
          </SubText>
          <AboutArrow href='#projects'>
            <FaAngleDown size={26} />
          </AboutArrow>
        </Content>
      </Container>
    </Section>
  );
}
