import React from 'react';
// Tailwind Styled Components
import {
  CardContainer,
  Card,
  CardImg,
  CardTitle,
  CardText,
} from '../../styles/AboutCard';

function AboutCard({ title, text, image, imageAlt }) {
  return (
    <CardContainer>
      <Card>
        <CardImg src={image} alt={imageAlt} />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Card>
    </CardContainer>
  );
}

export default AboutCard;