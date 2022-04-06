import tw from 'tailwind-styled-components';

export const Section = tw.section`
bg-rcLightSecondary
dark:bg-rcSecondary
h-full
pt-10
`;

export const Container = tw.div`
container
mx-auto
`;

export const Title = tw.h2`
text-3xl
text-gray-600
font-semibold
dark:text-white
text-center
uppercase
`;

export const Form = tw.form`
mt-14
flex
flex-col
mx-10
lg:mx-40
`;

export const FormGroup = tw.div`
md:grid
md:grid-cols-2
gap-4
flex
flex-col
`;

export const InputGroup = tw.div`

`;

export const Label = tw.label`
block
text-md
font-semibold
dark:text-slate-300 
mb-3
`;

export const Input = tw.input`
px-5 
py-3
w-full	
rounded-full
text-sm
md:text-md
bg-rcLightInput
dark:bg-rcInput
shadow-sm
dark:text-white
border-slate-300 
placeholder-neutral-500
focus:outline-none 
focus:ring-2
focus:border-gray-600
focus:ring-gray-600
dark:focus:border-purple-800
dark:focus:ring-purple-800
invalid:border-pink-500
invalid:text-pink-600
focus:invalid:border-pink-500
focus:invalid:ring-pink-500
dark:invalid:border-pink-500
dark:invalid:text-pink-600
dark:focus:invalid:border-pink-500
dark:focus:invalid:ring-pink-500
transition
duration-500
`;

export const TextArea = tw.textarea`
w-full
text-sm
md:text-md
px-5
py-5
rounded-3xl
bg-rcLightInput
dark:bg-rcInput
shadow-sm 
dark:text-white
border-slate-300 
focus:outline-none 
focus:ring-2
focus:border-gray-600
focus:ring-gray-600
dark:focus:border-purple-800
dark:focus:ring-purple-800
invalid:border-pink-500
invalid:text-pink-600
focus:invalid:border-pink-500
focus:invalid:ring-pink-500
dark:invalid:border-pink-500
dark:invalid:text-pink-600
dark:focus:invalid:border-pink-500
dark:focus:invalid:ring-pink-500
transition
duration-500
`;

export const ButtonGroup = tw.div`
mt-6
text-right
mb-10
flex
justify-end
`;

export const Button = tw.div`
flex
items-center
justify-center
w-32
bg-sky-500
text-md
hover:bg-sky-700
py-3
leading-5
rounded-md
font-semibold
text-white
`;
