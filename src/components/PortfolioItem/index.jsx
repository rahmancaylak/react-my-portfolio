import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Tailwind Styled Components
import {
  Container,
  Item,
  Title,
  Description,
} from '../../styles/PortfolioItem';
//Component
import Modal from '../Modal';
import { Button } from '../../styles/Button';
function PortfolioItems({ ...data }) {
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
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.imgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
          }}
        >
          <Item>
            <Title>
              {data.title} - {data.category}
            </Title>
            <Title>React</Title>
            <Description>
              <a href={data.url}>
                <Button className='p-0 m-0 hover:scale-125'>
                  {data.urlIcon}
                </Button>
              </a>
              <Button
                onClick={() => setShowModal(true)}
                className='p-0 m-0 hover:scale-125'
              >
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

export default PortfolioItems;
