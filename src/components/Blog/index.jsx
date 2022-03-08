import React from 'react';
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
        <button className='text-neutral-500 hover:text-white rounded-full p-1 hover:bg-neutral-500 w-2/4 bg-transparent	border border-customBorderColor ease-in-out duration-500'>
          Read More <FaAngleDoubleRight style={{ display: 'inline-block' }} />
        </button>
      </BlogContainer>
    </BlogSection>
  );
}

export default Blog;
