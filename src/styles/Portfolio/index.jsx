import tw from 'tailwind-styled-components';

export const Section = tw.section`
bg-rcLightSecondary
dark:bg-rcSecondary
h-full
pb-20
`;

export const Container = tw.div`
flex
justify-center
flex-col
items-center
`;

export const Title = tw.h2`
mt-10
text-3xl
text-gray-600
dark:text-white
uppercase
font-semibold
`;

export const FilterGroup = tw.div`
flex
flex-col
justify-center
w-4/6
my-10
md:flex-row
`;

export const ItemsContainer = tw.div`
gap-4
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
`;
