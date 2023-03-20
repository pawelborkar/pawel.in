import { useAtom } from 'jotai';
import { Card, Grid, Image, Text } from '@geist-ui/core';
import { darkModeToggleAtom } from '@/globalStates';

interface IBlogDetails {
  id: number;
  title: string;
  cover_image: string;
  published_at: string;
}

const BlogCard = ({
  id,
  title,
  cover_image: imageSrc,
  published_at: publishedDate,
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
      <Image src={imageSrc} alt={title} />
      <Text h4 my={0}>
        {title}
      </Text>
      <Grid>
        <Text>{publishedDate}</Text>
      </Grid>
    </Card>
  );
};

export default BlogCard;
