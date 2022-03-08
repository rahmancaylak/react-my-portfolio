import tw from 'tailwind-styled-components';

export const PortfolioSection = tw.section`
bg-customPrimary
h-full
`;

export const PortfolioContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const PortfolioTitle = tw.h2`
mt-10
text-3xl
text-white
uppercase
font-medium
`;

export const PortfolioText = tw.p`
mt-6
text-neutral-500 
font-medium
w-4/5
`;

export const FilterGroup = tw.div`
mt-5
mb-5
`;

export const FilterButton = tw.button`
px-12
py-2
text-white
rounded-lg
bg-sky-600
hover:bg-sky-700 mr-2
`;

export const ItemsContainer = tw.div`
grid
lg:grid-cols-3
gap-4
mb-20
sm:grid-cols-1
md:grid-cols-2
`;
