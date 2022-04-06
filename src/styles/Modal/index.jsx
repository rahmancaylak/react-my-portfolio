import tw from 'tailwind-styled-components';

export const Section = tw.div`
bg-gray-700
bg-opacity-90
h-full
w-full
fixed
top-0
left-0
z-50
flex
justify-center
items-center
mx-auto
my-auto
`;

export const Container = tw.div`
h-fit
relative
text-white
bg-neutral-800
shadow-md
rounded-2xl
flex-col
lg:flex-row
lg:w-10/12
w-full
`;

export const Close = tw.button`
absolute
top-0
right-0
mt-2
mr-2
text-neutral-600
text-2xl
hover:text-red-500
transition
duration-500
`;

export const Content = tw.div`
flex
justify-center
flex-col
md:flex-row
`;

export const Left = tw.div`
mr-5
md:w-4/6
w-full
mt-0
`;

export const Right = tw.div`
md:w-2/6
w-full
mx-4
mb-4
flex
item-center
flex-col
justify-center
`;

export const Title = tw.h3`
mt-2
text-purple-500
text-center
mb-2
text-lg
font-bold
`;

export const Ul = tw.ul`
text-neutral-500
font-medium
text-sm
md:text-base
`;

export const Li = tw.li`

`;
