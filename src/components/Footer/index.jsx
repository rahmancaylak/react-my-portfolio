import React from 'react';
// FontAwesome Icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// Tailwind Styled Components
import {
  FooterSection,
  FooterContainer,
  SocialMediaContainer,
  Ul,
  SocialMedia,
  SocialMediaLink,
  LinkContainer,
  LinkUl,
  MenuLink,
  CopyrightContainer,
  Text,
  GithubRepo,
} from '../../styles/Footer';
function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <SocialMediaContainer>
          <Ul>
            <SocialMedia>
              <SocialMediaLink href='#'>
                <FaGithub />
              </SocialMediaLink>
            </SocialMedia>
            <SocialMedia>
              <SocialMediaLink href='#'>
                <FaLinkedin />
              </SocialMediaLink>
            </SocialMedia>
            <SocialMedia>
              <SocialMediaLink href='#'>
                <FaTwitter />
              </SocialMediaLink>
            </SocialMedia>
            <SocialMedia>
              <SocialMediaLink href='#'>
                <FaInstagram />
              </SocialMediaLink>
            </SocialMedia>
          </Ul>
        </SocialMediaContainer>
        <LinkContainer>
          <LinkUl>
            <MenuLink>
              <a href='#home'>Ana Sayfa</a>
            </MenuLink>
            <MenuLink>
              <a href='#about'>Hakkımda</a>
            </MenuLink>
            <MenuLink>
              <a href='#projects'>Projelerim</a>
            </MenuLink>
            <MenuLink>
              <a href='#blog'>Blog</a>
            </MenuLink>
            <MenuLink>
              <a href='#contact'>İletişim</a>
            </MenuLink>
          </LinkUl>
        </LinkContainer>
        <CopyrightContainer>
          <Text>
            2022 designed by Rahman Çaylak -{' '}
            <GithubRepo href='#'>GitHub Repo</GithubRepo>
          </Text>
        </CopyrightContainer>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;
