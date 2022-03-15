import tw from 'tailwind-styled-components';

export const BlogSection = tw.section`
bg-customPrimary
h-full
pb-10
`;

export const BlogContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const BlogTitle = tw.h2`
mt-10
text-3xl
text-white
uppercase
font-medium
`;

export const BlogText = tw.p`
mt-6
text-neutral-500 
font-medium
w-4/5
`;
export const CardSection = tw.div`
flex
flex-wrap
justify-center
w-full
mx-auto
mt-12
`;
