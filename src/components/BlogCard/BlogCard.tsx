import { darkModeToggleAtom } from '@/globalStates';
import { Card, Grid, Image, Text } from '@geist-ui/core';
import { useAtom } from 'jotai';
import React from 'react';

const BlogCard = (props: any) => {
  const {
    id,
    title,
    cover_image: imageSrc,
    published_at: publishedDate,
  } = props.props;
  const [isDark] = useAtom(darkModeToggleAtom);
  return (
    <Card
      hoverable
      shadow
      key={id}
      marginBottom={1}
      type={isDark ? 'secondary' : 'default'}
    >
      <Image src={imageSrc} alt={title} />
      <Text h4 my={0}>
        {title}
      </Text>
      <Grid>
        <Text>{publishedDate}</Text>
        {/* <Text>{description}</Text> */}
      </Grid>
    </Card>
  );
};

export default BlogCard;
