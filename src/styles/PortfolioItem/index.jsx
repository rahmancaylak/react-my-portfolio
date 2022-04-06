import tw from 'tailwind-styled-components';

export const Container = tw.div`
transition
hover:scale-125
ease-in-out 
duration-700
border-4
rounded-lg
border-gray-600
dark:border-purple-600
bg-cover
bg-no-repeat
object-cover
`;

export const Item = tw.div`
w-72
h-72
ease-in-out 
duration-1000 
m-auto 
flex 
flex-col 
justify-center 
items-center
hover:opacity-100
md:opacity-0
`;

export const Title = tw.h3`
break-words
w-10/12
text-center
text-white
bg-gray-600
dark:bg-purple-800
rounded-lg
mb-5
`;

export const Description = tw.p`
flex
justiy-center
items-center
gap-x-4
`;
