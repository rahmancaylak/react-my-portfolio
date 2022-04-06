// Fontawesome Icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
export const SocialMediaData = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub size={26} />,
    url: 'https://github.com/rahmancaylak',
    sidebarClass: 'dark:hover:text-neutral-600 hover:text-black',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedin size={26} />,
    url: 'https://www.linkedin.com/in/rahman-caylak/',
    sidebarClass: 'hover:text-sky-700',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: <FaTwitter size={26} />,
    url: 'https://twitter.com/rahmancaylak',
    sidebarClass: 'hover:text-sky-500',
  },
  {
    id: 4,
    name: 'Instagram',
    icon: <FaInstagram size={26} />,
    url: 'https://instagram.com/rahmancaylak',
    sidebarClass: 'dark:hover:text-purple-500 hover:text-purple-700',
  },
];
