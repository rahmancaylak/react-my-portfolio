import React from 'react';
// About Data
import { AboutCardData } from '../../data/AboutCard';
// About Card Component
import AboutCard from '../AboutCard';
// Tailwind Styled Components
import {
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutText,
  CardSection,
} from '../../styles/About';
function About() {
  return (
    <AboutSection id='about'>
      <AboutContainer>
        <AboutTitle>Hakkımda</AboutTitle>
        <AboutText>
          Merhaba, ben Rahman Çaylak. İstanbul Aydın Üniversitesi - Bilgisayar
          Programcılığı bölümünden 2021 yılında mezun oldum. Yazılım alanında
          kendimi geliştirerek öğrendiğim bilgileri, insanlara karşılıksız
          olarak aktarmak istiyorum. Hedefim en iyisi olmak değil, işimi en iyi
          şekilde yapmak.
        </AboutText>
        <CardSection>
          {AboutCardData.map((data, id) => (
            <AboutCard key={id} {...data} />
          ))}
        </CardSection>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
