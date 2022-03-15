import tw from 'tailwind-styled-components';

export const FooterSection = tw.section`
pt-2
bg-customPrimary
h-full
pb-10
`;

export const FooterContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const SocialMediaContainer = tw.div`
text-neutral-500
justify-center
items-center
`;

export const Ul = tw.ul`
flex
mt-2
`;

export const SocialMedia = tw.li`
ml-2
border
p-3
text-xl
rounded-full
border-neutral-500
hover:border-neutral-500
hover:bg-neutral-500
hover:text-white
ease-in-out
duration-700
cursor-pointer
`;

export const SocialMediaLink = tw.a`

`;

export const LinkContainer = tw.div`
border-b
pb-5
border-neutral-700
mt-5
text-neutral-400
justify-center
items-center
`;

export const LinkUl = tw.ul`
flex
`;

export const MenuLink = tw.li`
ml-3
hover:text-white
cursor-pointer
ease-in
duration-300
font-medium
`;

export const CopyrightContainer = tw.div`
flex
text-neutral-500
mt-2
sm:text-sm
`;

export const Text = tw.p`
`;
export const GithubRepo = tw.a`
hover:text-neutral-400
ease-in
duration-300
`;
