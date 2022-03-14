import React from 'react';
import { ProfileData } from '../../data/MyProfile';
import { SocialMediaData } from '../../data/SocialMedia';
// Fontawesome Icons
import { FaAngleDown } from 'react-icons/fa';
// Tailwind Styled Components
import {
  HeroSection,
  HeroSidebar,
  HeroContent,
  Ul,
  Li,
  Img,
  Title,
  SubText,
  AboutArrow,
} from '../../styles/Hero';
function Hero() {
  return (
    <HeroSection id='home'>
      <HeroSidebar>
        <Ul>
          {SocialMediaData.map((socialMedia) => (
            <Li key={socialMedia.id}>
              <a href={socialMedia.url} className={socialMedia.sidebarClass}>
                {socialMedia.icon}
              </a>
            </Li>
          ))}
        </Ul>
      </HeroSidebar>
      <HeroContent>
        <Img src={`${ProfileData.image}`} alt={ProfileData.imageAlt}></Img>
        <Title>
          Merhaba, ben {`${ProfileData.name} ${ProfileData.surname}`}.
        </Title>
        <SubText>
          HTML, CSS, JavaScript ve React gibi Front-End teknolojilerini
          öğrenmekteyim. Yaptığım projeleri{' '}
          <a href='#projects' className='text-white hover:underline'>
            Projelerim
          </a>{' '}
          başlığından inceleyebilir ya da{' '}
          <a
            href='https://github.com/rahmancaylak'
            className='text-white hover:underline'
          >
            GitHub
          </a>{' '}
          hesabımdan direkt kodlara erişebilirsiniz.
        </SubText>
        <AboutArrow href='#projects'>
          <FaAngleDown className='w-8 h-8' />
        </AboutArrow>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
