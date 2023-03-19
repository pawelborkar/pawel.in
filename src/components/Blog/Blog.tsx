import { Grid, Text } from '@geist-ui/core';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useId, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<Array<null>>([]);

  // const URL = `https://dev.to/api/articles?username=pb​`;
  const fetchBlogs = async () => {
    const options = {
      method: 'GET',
      url: 'https://dev.to/api/articles',
      params: { username: 'pb' },
    };

    axios
      .request(options)
      .then(function (response) {
        setBlogPosts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, [blogPosts]);

  return (
    <>
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
        {blogPosts.map((blog: any) => (
          <Link href={blog?.url} key={blog?.id} target='_blank'>
            <BlogCard props={blog} />
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Blog;
