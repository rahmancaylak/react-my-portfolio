import portfolio1 from '../assets/Img/portfolio-1.webp';
import portfolio2 from '../assets/Img/portfolio-2.webp';
import portfolio3 from '../assets/Img/portfolio-3.webp';
import portfolio4 from '../assets/Img/portfolio-4.webp';
import portfolio5 from '../assets/Img/portfolio-5.webp';
import portfolio6 from '../assets/Img/portfolio-6.webp';
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
        name: 'API Link',
        link: 'https://course-api.com/react-tours-project',
      },
      { id: 4, name: 'Chakra UI', link: 'https://chakra-ui.com/' },
    ],
    repoUrl: 'https://github.com/rahmancaylak/React-Projects/tree/master/tours',
    imgUrl: `${portfolio1}`,
  },
  {
    id: 2,
    title: 'Tabs',
    url: '',
    description: 'Description2',
    category: 'React',
    imgUrl: `${portfolio2}`,
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3',
    category: 'HTML/CSS',
    imgUrl: `${portfolio3}`,
  },
  {
    id: 4,
    title: 'Title4',
    description: 'Description4',
    category: 'React',
    imgUrl: `${portfolio4}`,
  },
  {
    id: 5,
    title: 'Title5',
    description: 'Description5',
    category: 'JavaScript',
    imgUrl: `${portfolio5}`,
  },
  {
    id: 6,
    title: 'Title6',
    description: 'Description6',
    category: 'HTML/CSS',
    imgUrl: `${portfolio6}`,
  },
];
