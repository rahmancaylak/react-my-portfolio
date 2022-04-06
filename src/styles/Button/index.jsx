import tw from 'tailwind-styled-components';

export const Button = tw.button`
${(prop) =>
  prop.$isActive
    ? 'dark:bg-purple-800 bg-gray-600 text-white'
    : 'bg-transparent text-gray-600 dark:text-white'}
mx-1
px-8
py-3
rounded-lg
border-2
border-gray-600
hover:text-white
dark:border-purple-800
hover:bg-gray-600
dark:hover:bg-purple-800
font-semibold
transition
duration-500
`;
