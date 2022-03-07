import tw from 'tailwind-styled-components';

export const AboutSection = tw.section`
bg-customSecondary
h-full
`;

export const AboutContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const AboutTitle = tw.h2`
mt-10
text-3xl
text-white
uppercase
font-medium
`;

export const AboutText = tw.p`
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
