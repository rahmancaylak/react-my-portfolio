//Component
import { Button } from '../../styles/Button';
import BlogCard from '../BlogCard';
// FontAwesome Icon
import { FaAngleDoubleRight } from 'react-icons/fa';
// Tailwind Styled Components
import { Section, Container, Title, CardSection } from '../../styles/Blog';
// Data
import { BlogData } from '../../data/Blog';

export default function Blog() {
  return (
    <Section id='blog'>
      <Container>
        <Title>Son Yazılarım</Title>
        <CardSection>
          {BlogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </CardSection>
        <Button className='rounded-full p-1 hover:bg-gray-600 w-2/4 ease-in-out duration-500 mt-10'>
          Daha Fazla <FaAngleDoubleRight className='inline' />
        </Button>
      </Container>
    </Section>
  );
}
