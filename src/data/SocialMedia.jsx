// Fontawesome Icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
console.log(FaGithub(`className='test'`));
export const SocialMediaData = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/rahmancaylak',
    sidebarClass: 'hover:text-neutral-400',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/rahman-caylak/',
    sidebarClass: 'hover:text-sky-700',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com/rahmancaylak',
    sidebarClass: 'hover:text-sky-500',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com/rahmancaylak',
    sidebarClass: 'w-6 h-6 inline hover:text-purple-500',
  },
];
