import tw from 'tailwind-styled-components';

export const CardContainer = tw.div`
my-5
mx-5
lg:w-3/12
md:mr-2
md:w-4/12
sm:w-11/12
rounded-3xl
border
shadow-xl
border-customBorderColor
`;

export const Card = tw.div`
flex
flex-col
justify-center
items-center
`;

export const BlogLink = tw.a`
hover:opacity-80
`;
export const CardImg = tw.img`
rounded-b-none
rounded-3xl
`;

export const CardBody = tw.div`
pr-4
pl-4
`;

export const Category = tw.h4`
text-white
mt-2
font-medium
text-sm	
`;

export const SubDate = tw.span`
text-neutral-500
`;

export const CardTitle = tw.h3`
leading-5
text-white
hover:text-neutral-300
mt-2
font-medium
text-lg	
`;

export const CardText = tw.p`
text-sm	
mt-4
w-12/12
text-neutral-500
font-medium
break-words
`;

export const CardAuthor = tw.div`
mt-4
flex
items-center
mb-4
`;

export const AuthorImg = tw.img`
h-14
w-14
rounded-full
`;

export const AuthorDetail = tw.div`
ml-4
`;

export const AuthorName = tw.p`
text-white
font-medium
`;

export const AuthorTitle = tw.p`
text-neutral-500
font-medium
`;
