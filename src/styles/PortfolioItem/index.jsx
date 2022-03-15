import tw from 'tailwind-styled-components';

export const Container = tw.div`
overflow-hidden
z-10
items-center
flex
flex-col
transition 
hover:scale-125 
hover:z-20
ease-in-out 
duration-700 
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
md:opacity-0 
hover:opacity-100
`;

export const Title = tw.h3`
break-words
w-10/12
text-center
text-white
font-medium
mb-5
`;

export const Description = tw.p`
flex
justiy-center
items-center
`;
