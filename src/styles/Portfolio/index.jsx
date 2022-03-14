import tw from 'tailwind-styled-components';

export const PortfolioSection = tw.section`
bg-customSecondary
h-full
`;

export const PortfolioContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const Title = tw.h2`
mt-10
text-3xl
text-white
uppercase
font-medium
`;

export const FilterGroup = tw.div`
flex
justify-center
sm:flex
sm:flex-col
sm:w-4/6
mt-10
mb-10
`;

export const ItemsContainer = tw.div`
grid
lg:grid-cols-3
gap-4
mb-20
sm:grid-cols-1
md:grid-cols-2
`;
