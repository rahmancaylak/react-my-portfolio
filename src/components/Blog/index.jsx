import React from 'react';
//Component
import { Button } from '../../styles/Button';
// FontAwesome Icon
import { FaAngleDoubleRight } from 'react-icons/fa';

// Tailwind Styled Components
import {
  BlogSection,
  BlogContainer,
  BlogTitle,
  CardSection,
} from '../../styles/Blog';

import BlogCard from '../BlogCard';

import { BlogData } from '../../data/Blog';
function Blog() {
  return (
    <BlogSection id='blog'>
      <BlogContainer>
        <BlogTitle>Son Yazılarım</BlogTitle>
        <CardSection>
          {BlogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </CardSection>
        <a
          href='#0'
          className='rounded-full pt-5 w-full bg-transparent ease-in-out duration-500 flex justify-center'
        >
          <Button className='w-2/4rounded-full p-1 hover:bg-neutral-500 w-2/4 ease-in-out duration-500'>
            Daha Fazla{' '}
            <FaAngleDoubleRight style={{ display: 'inline-block' }} />
          </Button>
        </a>
      </BlogContainer>
    </BlogSection>
  );
}

export default Blog;
