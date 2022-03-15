import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Portfolio Data
import { PortfolioData } from '../../data/Portfolio';
//Component
import PortfolioItem from '../PortfolioItem';

// Tailwind Styled Components
import {
  PortfolioSection,
  PortfolioContainer,
  Title,
  FilterGroup,
  ItemsContainer,
} from '../../styles/Portfolio';

// Tailwind Button Styled Components
import { Button } from '../../styles/Button';

function Portfolio() {
  const [filterData, setFilterData] = useState('All');
  const category = [
    'All',
    ...new Set(PortfolioData.map((data) => data.category)),
  ];

  const filterPortfolio = PortfolioData.filter((data) =>
    filterData === 'All' ? data : data.category === filterData
  );

  const updateClass = (item) => {
    setFilterData(item);
  };

  return (
    <PortfolioSection id='projects'>
      <PortfolioContainer>
        <Title>Çalışmalarım</Title>
        <FilterGroup>
          {category.map((item, index) => (
            <Button
              key={index}
              onClick={() => updateClass(item)}
              $isActive={filterData === item}
            >
              {item}
            </Button>
          ))}
        </FilterGroup>
        <motion.div layout>
          <ItemsContainer>
            {filterPortfolio.map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </ItemsContainer>
        </motion.div>
      </PortfolioContainer>
    </PortfolioSection>
  );
}

export default Portfolio;
