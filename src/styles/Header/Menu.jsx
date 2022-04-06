import tw from 'tailwind-styled-components';

export const Navbar = tw.nav`
`;

export const Nav = tw.ul`
inline-flex
`;

export const NavItem = tw.li`
block 
md:inline
ml-4
`;

export const NavLink = tw.a`
text-gray-600
font-semibold
dark:text-white
dark:hover:border-white
hover:border-gray-600
hover:border-b-2
rounded
focus:outline
focus:outline-2
focus:outline-offset-8
focus:outline-purple-800
`;
