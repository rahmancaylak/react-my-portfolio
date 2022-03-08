import React from 'react';
import { motion } from 'framer-motion';
// Tailwind Styled Components
import {
  Container,
  Item,
  Title,
  Description,
} from '../../styles/PortfolioItem';

function PortfolioItems({ title, description, imgUrl }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Container
        style={{
          background: `url(${imgUrl}) no-repeat 50% 50% / cover`,
          objectFit: 'cover',
        }}
      >
        <Item>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Item>
      </Container>
    </motion.div>
  );
}

export default PortfolioItems;
