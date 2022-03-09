import React from 'react';
// Tailwind Styled Components
import {
  CardContainer,
  Card,
  BlogLink,
  CardImg,
  CardBody,
  CardTitle,
  Category,
  SubDate,
  CardText,
  CardAuthor,
  AuthorImg,
  AuthorDetail,
  AuthorName,
  AuthorTitle,
} from '../../styles/BlogCard';

const BlogCard = ({
  title,
  thumbnail,
  description,
  category,
  date,
  authorName,
  authorImg,
  authorTitle,
}) => {
  return (
    <CardContainer>
      <Card>
        <BlogLink href='#'>
          <CardImg src={`${thumbnail}`} />
        </BlogLink>
        <CardBody>
          <Category>
            {category.join(', ')} — <SubDate>{date}</SubDate>
          </Category>
          <BlogLink href='#'>
            <CardTitle>{title}</CardTitle>
          </BlogLink>
          <CardText>{description}</CardText>
          <CardAuthor>
            <AuthorImg src={`${authorImg}`} alt={`${authorName}`} />
            <AuthorDetail>
              <AuthorName>{authorName}</AuthorName>
              <AuthorTitle>{authorTitle}</AuthorTitle>
            </AuthorDetail>
          </CardAuthor>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default BlogCard;
