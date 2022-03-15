import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
my-5
mx-5
md:mr-2
md:w-4/12
sm:w-11/12
rounded-3xl
border
shadow-xl
border-customBorderColor
`;

export const Card = tw.div`
p-5
flex
flex-col
justify-center
items-center
`;

export const CardImg = tw.img`
`;

export const CardTitle = tw.h3`
text-white
mt-5
font-medium
text-xl
`;
export const CardText = tw.p`
mt-2
w-9/12
text-center
text-neutral-500
font-medium
break-words
`;
