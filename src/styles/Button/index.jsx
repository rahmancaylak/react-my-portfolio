import tw from 'tailwind-styled-components';

export const Button = tw.button`
${(prop) => (prop.$isActive ? 'bg-purple-800' : 'bg-transparent')}
text-white
border-2
border-purple-800
px-4
py-3
mr-3
rounded
hover:bg-purple-800
transition
duration-500
`;
