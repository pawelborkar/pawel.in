import { Button, Card, Grid, Spacer, Tag, Text } from '@geist-ui/core';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
interface IProjectProps {
  title: string;
  description: string;
  tags: string[];
  sourceCode: string;
  url: string;
}
const ProjectCard = ({
  title,
  description,
  tags,
  sourceCode,
  url,
}: IProjectProps) => {
  return (
    <Card shadow marginBottom={1} style={{ backgroundColor: '#f9b5ac' }}>
      <Text h4 my={0}>
        {title}
      </Text>
      <Text>{description}</Text>
      <Spacer h={0.5} />
      <Grid>
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            style={{ backgroundColor: '#3d405b  ' }}
            invert
            margin={0.5}
          >
            {tag}
          </Tag>
        ))}
      </Grid>
      <Spacer />
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href={sourceCode} target='_blank'>
          <Button
            icon={<FaGithub />}
            style={{ backgroundColor: '#f9f7f3' }}
            scale={0.85}
          >
            Code
          </Button>
        </Link>
        <Spacer h={1} />
        <Link href={url} target='_blank'>
          <Button
            icon={<FaGlobe />}
            style={{ backgroundColor: '#f9f7f3' }}
            scale={0.85}
          >
            Visit
          </Button>
        </Link>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
