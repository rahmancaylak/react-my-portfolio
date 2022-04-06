import tw from 'tailwind-styled-components';

export const Section = tw.section`
h-full
bg-rcLightPrimary
dark:bg-rcPrimary
pb-10
pt-2
`;

export const Container = tw.div`
container
mx-auto
`;

export const SocialMediaContainer = tw.div`
text-gray-600
`;

export const Ul = tw.ul`
flex
justify-center
mt-2
`;

export const SocialMedia = tw.li`
ml-2
border
p-3
text-xl
rounded-full
border-gray-600
hover:border-gray-600
hover:bg-gray-600
dark:border-purple-800
dark:hover:border-purple-800
dark:hover:bg-purple-800
hover:text-white
ease-in-out
duration-700
cursor-pointer
`;

export const SocialMediaLink = tw.a`

`;

export const LinkContainer = tw.div`
w-fit
mx-auto
pb-2
mt-5
border-b
border-gray-400
dark:border-neutral-700
text-gray-600
dark:text-neutral-400
font-semibold
`;

export const LinkUl = tw.ul`
flex
`;

export const MenuLink = tw.li`
ml-3
hover:text-black
dark:hover:text-white
cursor-pointer
ease-in
duration-300
`;

export const CopyrightContainer = tw.div`
text-center
text-gray-600
dark:text-neutral-500
mt-2
text-sm
md:text-base
`;

export const Text = tw.p`
`;
export const GithubRepo = tw.a`
hover:text-black
dark:hover:text-neutral-400
ease-in
duration-300
font-semibold
`;
