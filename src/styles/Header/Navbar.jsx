import tw from 'tailwind-styled-components';

export const Nav = tw.nav`
sm:flex-col 
md:flex-row 
md:py-0
`;

export const Ul = tw.ul`
sm:hidden
`;

export const Li = tw.li`
sm:block 
md:inline
ml-4
`;

export const A = tw.a`
hover:border-white 
hover:border-b-2
`;
