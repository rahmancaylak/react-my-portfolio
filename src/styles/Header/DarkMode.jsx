import tw from 'tailwind-styled-components';

export const Label = tw.label`
items-center
mb-5
md:mb-0
`;

export const ToggleContain = tw.div`
relative
flex
items-center
cursor-pointer
`;

export const ToggleBg = tw.div`
${(props) =>
  props.$toggled ? 'bg-gray-800 duration-1000' : 'bg-gray-300 duration-1000'}
block
w-10
h-6
rounded-full
z-50
`;

export const ToggleInput = tw.input`
sr-only
focus:not-sr-only
focus:absolute
focus:w-full
focus:z-5
focus:outline
focus:outline-2
focus:outline-offset-8
focus:outline-purple-800
`;

export const Toggle = tw.div`
${(props) =>
  props.$toggled ? 'translate-x-full duration-1000' : 'duration-1000'}
dot
absolute
left-1
top-1
w-4
h-4
rounded-full
transition
z-50
`;
