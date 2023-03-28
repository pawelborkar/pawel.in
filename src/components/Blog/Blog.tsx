import { useEffect, useState } from 'react';
import { Grid, Text } from '@geist-ui/core';
import Link from 'next/link';
import { BlogCard } from '@/components';
import { BlogPosts } from './BlogList';
export interface IBlogDetails {
  id: number;
  title: string;
  cover_image: string;
  url: string;
  readable_publish_date: string;
}

const Blog = () => {
  return (
    <Grid padding={2}>
      <Text b style={{ letterSpacing: '0.6px' }} h2 marginTop={2}>
        <Text span type='success'>
          B
        </Text>
        <Text span type='warning'>
          l
        </Text>
        <Text span type='secondary'>
          o
        </Text>
        <Text span type='error'>
          g
        </Text>
      </Text>
      <Grid style={{ overflow: 'scroll', height: '80vh' }}>
        {BlogPosts.map((blog: IBlogDetails) => (
          <Link href={blog?.url} key={blog?.id} target='_blank'>
            <BlogCard {...blog} />
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default Blog;
