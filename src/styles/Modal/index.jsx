import tw from 'tailwind-styled-components';

export const ModalContainer = tw.div`
fixed
text-white
bg-neutral-800
shadow-md
rounded-2xl
w-3/4 h-fit
top-0
bottom-0
my-auto
mx-auto
right-0
left-0
z-40
sm:flex-col
sm:w-full
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
sm:flex-col
`;

export const Left = tw.div`
mr-5
w-4/6
sm:w-full
mt-0
`;

export const Right = tw.div`
w-2/6
sm:w-full
sm:mx-4
sm:mb-4
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
sm:text-lg
font-bold
`;

export const Ul = tw.ul`
text-neutral-500
font-medium
sm:text-sm
`;

export const Li = tw.li`

`;
