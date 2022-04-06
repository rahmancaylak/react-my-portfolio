import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Tailwind Styled Components
import {
  Container,
  Item,
  Title,
  Description,
} from '../../styles/PortfolioItem';
import { Button } from '../../styles/Modal/Button';
//Component
import Modal from '../Modal';

export default function PortfolioItems({ ...data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
      >
        <Container
          style={{
            backgroundImage: `url(${data.thumbnail})`,
          }}
        >
          <Item>
            <Title>
              {data.title} - {data.category}
            </Title>
            <Description>
              <a href={data.url}>
                <Button>{data.urlIcon}</Button>
              </a>
              <Button onClick={() => setShowModal(true)}>
                {data.iconDetail}
              </Button>
            </Description>
          </Item>
        </Container>
        {showModal && <Modal setShowModal={setShowModal} {...data} />}
      </motion.div>
    </>
  );
}
