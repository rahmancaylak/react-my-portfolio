import React from 'react';
// FontAwesome Icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// Tailwind Styled Components
import {
  Section,
  Container,
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

export default function Footer() {
  return (
    <Section>
      <Container>
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
            <GithubRepo href='https://github.com/rahmancaylak/react-my-portfolio'>
              GitHub Repo
            </GithubRepo>
            <br />
            Ücretsiz kullanabilirsiniz.
          </Text>
        </CopyrightContainer>
      </Container>
    </Section>
  );
}
