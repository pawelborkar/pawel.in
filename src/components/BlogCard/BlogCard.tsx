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
      type={isDark ? 'secondary' : 'default'}
      style={{
        margin:'8px 8px 16px 0px',
        background: '#ffffff',
        maxWidth: '600px',
        minWidth: '340px',
        padding: '0px',
      }}
      // style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover' }}
    >
      {/* <Image src={imageSrc} alt={title} /> */}
      <Text h4 my={0}>
        {title}
      </Text>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          // border:'1px solid salmon'
        }}
      >
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
        <Grid>
          <Text>{publishedDate}</Text>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BlogCard;
