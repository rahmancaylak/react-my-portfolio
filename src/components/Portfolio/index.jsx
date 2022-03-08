import React, { useState } from 'react';
import { motion } from 'framer-motion';
// About Data
import { PortfolioData } from '../../data/Portfolio';
//Component
import PortfolioItem from '../PortfolioItem';

// Tailwind Styled Components
import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioTitle,
  PortfolioText,
  FilterGroup,
  FilterButton,
  ItemsContainer,
} from '../../styles/Portfolio';

function Portfolio() {
  const [filterData, setFilterData] = useState('All');
  const category = [
    'All',
    ...new Set(PortfolioData.map((data) => data.category)),
  ];

  const filterPortfolio = PortfolioData.filter((data) =>
    filterData === 'All' ? data : data.category === filterData
  );

  return (
    <PortfolioSection id='projects'>
      <PortfolioContainer>
        <PortfolioTitle>Çalışmalarım</PortfolioTitle>
        <PortfolioText>Lorem ipsum dolor sit amet</PortfolioText>
        <FilterGroup>
          {category.map((item, index) => (
            <FilterButton key={index} onClick={() => setFilterData(item)}>
              {item}
            </FilterButton>
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
