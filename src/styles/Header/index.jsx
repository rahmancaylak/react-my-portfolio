import tw from 'tailwind-styled-components';

export const Section = tw.header`
flex
pt-3
px-4
h-30
bg-rcLightPrimary
dark:bg-rcPrimary
border-b
border-slate-400
dark:border-rcBorder
md:h-20
md:pt-0
`;

export const Container = tw.div`
w-full
flex
flex-col
items-center
md:flex-row
md:justify-between
`;
