import tw from 'tailwind-styled-components';

export const HeroSection = tw.section`
dark
mx-auto 
grid 
h-screen 
text-white 
bg-customPrimary
`;

export const HeroContainer = tw.div`
grid 
grid-cols-3 
gap-4
`;

export const HeroSidebar = tw.div`
px-5
py-6
mt-10
`;

export const Ul = tw.ul`
`;

export const Li = tw.li`
py-5
`;

export const HeroContent = tw.div`
justify-center
flex 
`;

export const Container = tw.div`
flex
flex-col
items-center
my-16
`;

export const Img = tw.img`
rounded-full
md:h-64
md:w-64
sm:h-40
sm:w-40
`;

export const H1 = tw.h1`
text-center
text-4xl
uppercase
font-medium
mt-5
`;

export const AboutArrow = tw.a`
mb-auto
mt-16
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
