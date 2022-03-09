import tw from 'tailwind-styled-components';

export const ContactSection = tw.section`
pt-2
bg-customPrimary
h-full
`;

export const ContactContainer = tw.div`
flex
justify-center
flex-col
items-center
`;

export const ContactTitle = tw.h2`
mt-10
text-3xl
text-white
uppercase
font-medium
`;

export const Form = tw.form`
mt-14
flex
flex-col
w-2/3
`;

export const FormGroup = tw.div`
grid
grid-cols-2
gap-4
sm:flex
sm:flex-col
`;

export const InputGroup = tw.div`

`;

export const Label = tw.label`
block
text-md
font-medium
text-slate-300 
mb-3
`;

export const Input = tw.input`
px-5 
py-3
bg-customInputColor
shadow-sm 
text-white
border-slate-300 
placeholder-neutral-500  
disabled:bg-slate-50 
disabled:text-slate-500 
disabled:border-slate-200 
focus:outline-none 
focus:border-sky-500 
focus:ring-sky-500 
block 
w-full	
rounded-full
sm:text-sm 
focus:ring-1 
invalid:border-pink-500 
invalid:text-pink-600 
focus:invalid:border-pink-500 
focus:invalid:ring-pink-500 
disabled:shadow-none
`;

export const TextArea = tw.textarea`
px-5
py-5
rounded-3xl
bg-customInputColor
shadow-sm 
text-white
border-slate-300 
placeholder-slate-400  
disabled:bg-slate-50 
disabled:text-slate-500 
disabled:border-slate-200 
focus:outline-none 
focus:border-sky-500 
focus:ring-sky-500 
block 
w-full	
sm:text-sm 
focus:ring-1 
invalid:border-pink-500 
invalid:text-pink-600 
focus:invalid:border-pink-500 
focus:invalid:ring-pink-500 
disabled:shadow-none
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
