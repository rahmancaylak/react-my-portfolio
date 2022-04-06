import tw from 'tailwind-styled-components';

export const Section = tw.section`
bg-rcLightPrimary
dark:bg-rcPrimary
h-full
py-10
`;

export const Container = tw.div`
flex
flex-col
items-center
container
mx-auto
px-0
lg:px-5
xl:px-20
`;

export const Title = tw.h2`
text-3xl
uppercase
font-semibold
text-center
text-gray-600
dark:text-white
`;

export const CardSection = tw.div`
mt-10
gap-y-4
grid
grid-cols-1
md:grid-cols-2
md:gap-x-2
lg:grid-cols-3
lg:gap-y-0
`;
