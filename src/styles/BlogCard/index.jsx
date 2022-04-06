import tw from 'tailwind-styled-components';

export const Container = tw.div`
shadow-xl
rounded-3xl
border
border-gray-400
dark:border-rcBorder
mx-10
md:mx-2
`;

export const BlogLink = tw.a`
hover:opacity-80
`;

export const CardImg = tw.img`
rounded-3xl
rounded-b-none
`;

export const CardBody = tw.div`
dark:text-white
px-4
`;

export const Category = tw.h4`
mt-2
text-sm
font-semibold
`;

export const SubDate = tw.span`
text-gray-600
`;

export const CardTitle = tw.h3`
hover:text-neutral-700
dark:hover:text-neutral-300
mt-2
font-semibold
text-lg	
`;

export const CardText = tw.p`
text-md
mt-4
break-words
text-gray-600
dark:text-neutral-500
`;

export const CardAuthor = tw.div`
my-4
flex
items-center
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
font-bold
`;

export const AuthorTitle = tw.p`
dark:text-neutral-500
`;
