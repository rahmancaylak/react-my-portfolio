import React from 'react';
import Photo from '../../assets/Img/rahmancaylak.jpg';
// Fontawesome Icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaAngleDown,
} from 'react-icons/fa';
// Tailwind Styled Components
import {
  HeroSection,
  HeroContainer,
  HeroSidebar,
  HeroContent,
  Ul,
  Li,
  Container,
  Img,
  H1,
  AboutArrow,
} from '../../styles/Hero';
function Hero() {
  return (
    <HeroSection id='home'>
      <HeroContainer>
        <HeroSidebar>
          <Ul>
            <Li>
              <a href='https://github.com/rahmancaylak'>
                <FaGithub className='w-6 h-6 hover:opacity-70 inline' />
              </a>
            </Li>
            <Li>
              <a href='https://www.linkedin.com/in/rahman-caylak/'>
                <FaLinkedin className='w-6 h-6 hover:text-sky-700 inline' />
              </a>
            </Li>
            <Li>
              <a href='https://twitter.com/rahmancaylak'>
                <FaTwitter className='w-6 h-6 hover:text-sky-500 inline' />
              </a>
            </Li>
            <Li>
              <a href='https://instagram.com/rahmancaylak'>
                <FaInstagram className='w-6 h-6 inline hover:text-purple-500' />
              </a>
            </Li>
          </Ul>
        </HeroSidebar>
        <HeroContent>
          <Container>
            <Img
              src={`${Photo}`}
              alt="Rahman Çaylak'ın beyaz bir arkaplanda yüzü açık bir şekilde çekilmiş fotoğrafı."
            ></Img>
            <H1>Rahman Çaylak</H1>
            <AboutArrow href='#about'>
              <FaAngleDown className='w-8 h-8' />
            </AboutArrow>
          </Container>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
