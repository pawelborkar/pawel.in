'use client';
import React from 'react';
import Link from 'next/link';
import { Avatar, Button, Card, CardHeader } from '@nextui-org/react';
import { siteConfig } from '@/config/site';
import { TBlog } from '@/types';

const BlogCard = ({ ...blog }: TBlog) => {
  return (
    <Card className="w-80">
      <CardHeader>
        <div className="w-full flex flex-col gap-4 pl-1">
          <h4 className="font-bold text-medium">{blog.title}</h4>
          <div className="flex gap-24">
            <div className="flex gap-4">
              <Avatar
                radius="full"
                size="sm"
                src={siteConfig.blogDetails.avatarUrl}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {siteConfig.blogDetails.author}
                </h4>
                <Link
                  aria-label="twitter"
                  href={siteConfig.blogDetails.twitter}
                >
                  <h5 className="text-small tracking-tight text-default-400">
                    {siteConfig.blogDetails.username}
                  </h5>
                </Link>
              </div>
            </div>
            <Link aria-label="read blog" target="blank" href={blog.url}>
              <Button color="primary" radius="full" size="sm">
                Read
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
export default BlogCard;
