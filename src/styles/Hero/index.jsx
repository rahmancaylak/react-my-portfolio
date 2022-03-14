import tw from 'tailwind-styled-components';

export const HeroSection = tw.section`
flex
flex-row
text-white 
bg-customPrimary
`;

export const HeroSidebar = tw.div`
px-5
py-6
mt-10
`;

export const Ul = tw.ul`
social-media-sidebar
`;

export const Li = tw.li`
text-2xl
py-5
`;

export const HeroContent = tw.div`
flex
flex-col
items-center
w-full
`;

export const Img = tw.img`
hover:bg-gradient-to-r
hover:from-indigo-500 
hover:to-pink-500
ease-in duration-300
hover:p-1
rounded-full
md:h-64
md:w-64
sm:h-40
sm:w-40
mt-10
`;

export const Title = tw.h1`
text-center
text-2xl
font-medium
mt-5
`;

export const SubText = tw.h2`
mt-4
text-neutral-600
text-center
font-medium
text-lg
lg:mx-60
md:mx-28
sm:mx-2
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
`;
