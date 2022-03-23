import tours_thumbnail from '../assets/Img/tours-portfolio-thumbnail.webp';
import tabs_thumbnail from '../assets/Img/tabs-portfolio-thumbnail.webp';
import baconIpsum_thumbnail from '../assets/Img/bacon-ipsum-portfolio-thumbnail.webp';
import groceryBud_thumbnail from '../assets/Img/grocery-bud-portfolio-thumbnail.webp';
import accordion_thumbnail from '../assets/Img/accordion-portfolio-thumbnail.webp';
import foodMenu_thumbnail from '../assets/Img/food-menu-portfolio-thumbnail.webp';
// FontAwesome
import { FaLink, FaExpandAlt } from 'react-icons/fa';

export const PortfolioData = [
  {
    id: 1,
    title: 'Tours',
    url: 'https://rahmancaylak-tours.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      { id: 2, name: 'Axios', link: 'https://www.npmjs.com/package/axios' },
      {
        id: 3,
        name: 'API',
        link: 'https://course-api.com/react-tours-project',
      },
      { id: 4, name: 'Chakra UI', link: 'https://chakra-ui.com/' },
    ],
    repoUrl: 'https://github.com/rahmancaylak/React-Projects/tree/master/tours',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/tours/tours-output.gif?raw=true',
    thumbnail: `${tours_thumbnail}`,
  },
  {
    id: 2,
    title: 'Tabs',
    url: 'https://rahmancaylak-tabs.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      { id: 2, name: 'Axios', link: 'https://www.npmjs.com/package/axios' },
      {
        id: 3,
        name: 'API',
        link: 'https://course-api.com/react-tabs-project',
      },
    ],
    repoUrl: 'https://github.com/rahmancaylak/React-Projects/tree/master/tabs',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/tabs/tabs-output.gif?raw=true',
    thumbnail: `${tabs_thumbnail}`,
  },
  {
    id: 3,
    title: 'Bacon Ipsum',
    url: 'https://rahmancaylak-bacon-ipsum.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      { id: 2, name: 'Axios', link: 'https://www.npmjs.com/package/axios' },
      {
        id: 3,
        name: 'API',
        link: 'https://baconipsum.com/json-api/',
      },
    ],
    repoUrl:
      'https://github.com/rahmancaylak/React-Projects/tree/master/bacon-ipsum',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/bacon-ipsum/bacon-ipsum-output.gif?raw=true',
    thumbnail: `${baconIpsum_thumbnail}`,
  },
  {
    id: 4,
    title: 'Grocery Bud',
    url: 'https://rahmancaylak-grocery-bud.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      {
        id: 2,
        name: 'Local Storage',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
      },
    ],
    repoUrl:
      'https://github.com/rahmancaylak/React-Projects/tree/master/grocery-bud',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/grocery-bud/grocery-bud-output.gif?raw=true',
    thumbnail: `${groceryBud_thumbnail}`,
  },
  {
    id: 5,
    title: 'Accordion',
    url: 'https://rahmancaylak-accordion.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      {
        id: 2,
        name: 'Custom Data',
        link: 'https://github.com/rahmancaylak/React-Projects/blob/master/accordion/src/data.js',
      },
    ],
    repoUrl:
      'https://github.com/rahmancaylak/React-Projects/tree/master/accordion',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/accordion/accordion-output.gif?raw=true',
    thumbnail: `${accordion_thumbnail}`,
  },
  {
    id: 6,
    title: 'Food Menu',
    url: 'https://rahmancaylak-food-menu.netlify.app/',
    urlIcon: <FaLink />,
    iconDetail: <FaExpandAlt />,
    category: 'React',
    usedTechnology: [
      { id: 1, name: 'React v17.0.2 (useState, useEffect)', link: '' },
      {
        id: 2,
        name: 'Custom Data',
        link: 'https://github.com/rahmancaylak/React-Projects/blob/master/food-menu/src/data.js',
      },
    ],
    repoUrl:
      'https://github.com/rahmancaylak/React-Projects/tree/master/food-menu',
    output:
      'https://github.com/rahmancaylak/React-Projects/raw/master/food-menu/food-menu-output.gif?raw=true',
    thumbnail: `${foodMenu_thumbnail}`,
  },
];
