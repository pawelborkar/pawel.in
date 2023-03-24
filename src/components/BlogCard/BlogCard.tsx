import { useAtom } from 'jotai';
import { Button, Card, Grid, Image, Text } from '@geist-ui/core';
import { darkModeToggleAtom } from '@/globalStates';
import { IBlogDetails } from '../Blog/Blog';
import Link from 'next/link';

const BlogCard = ({
  id,
  title,
  url,
  cover_image: imageSrc,
  readable_publish_date: publishedDate,
}: IBlogDetails) => {
  const [isDark] = useAtom(darkModeToggleAtom);
  return (
    <Card
      hoverable
      shadow
      key={id}
      marginBottom={1}
      type={isDark ? 'secondary' : 'default'}
    >
      {/* <Image src={imageSrc} alt={title} /> */}
      <Text h4 my={0}>
        {title}
      </Text>
      <Grid>
        <Text>Published On: {publishedDate}</Text>
      </Grid>
      <Grid>
        <Link href={url}>
          <Button
            style={{
              border: 'none',
              color: '#ffffff',
              backgroundColor: '#0070f3',
              boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
            }}
          >
            Read
          </Button>
        </Link>
      </Grid>
    </Card>
  );
};

export default BlogCard;
