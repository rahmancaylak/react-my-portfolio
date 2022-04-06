import tw from 'tailwind-styled-components';

export const Section = tw.section`
flex
dark:bg-rcPrimary
bg-rcLightPrimary
`;

export const Container = tw.div`
container
mx-auto
flex
flex-row
mt-10
`;

export const Sidebar = tw.div`
px-3
md:px-0
`;

export const Nav = tw.ul`
text-gray-600
dark:text-white
`;

export const NavItem = tw.li`
text-2xl
py-5
`;

export const NavLink = tw.a`
`;

export const Content = tw.div`
flex
flex-col
items-center
gap-y-3
`;

export const Img = tw.img`
hover:bg-gradient-to-r
hover:from-indigo-500 
hover:to-pink-500
ease-in
duration-300
hover:p-1
rounded-full
h-40
w-40
md:h-64
md:w-64
`;

export const Title = tw.h1`
text-2xl
font-semibold
dark:text-white
`;

export const SubText = tw.h2`
text-gray-600
dark:text-neutral-500
text-center
text-lg
mx-2
lg:mx-40
`;

export const ProjectLink = tw.a`
hover:underline
font-semibold
text-black
dark:text-white
`;

export const GithubLink = tw.a`
hover:underline
font-semibold
text-black
dark:text-white
`;

export const AboutArrow = tw.a`
my-6
animate-bounce 
p-2 
w-10 
h-10 
shadow-lg 
rounded-full 
flex 
items-center
justify-center
dark:text-white
text-gray-600
`;
