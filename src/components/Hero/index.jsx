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
  H1,
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
        <H1>{`${ProfileData.name} ${ProfileData.surname}`}</H1>
        <h2 className='mt-2 text-neutral-600 font-medium text-lg'>
          Jr. Frontend Developer
        </h2>
        <AboutArrow href='#about'>
          <FaAngleDown className='w-8 h-8' />
        </AboutArrow>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
