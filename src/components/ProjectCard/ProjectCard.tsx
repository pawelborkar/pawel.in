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
  
    <Card
      hoverable
      shadow
      style={{
        backgroundColor: '#ffff',
        maxWidth:'600px',
        margin:'8px 8px 12px 0px',
        minWidth: '290px'
      }}
    >
      <Text h4 my={0}>
        {title}
      </Text>
      <Text>{description}</Text>
      <Spacer h={0.5} />
      <Grid>
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            
            style={{
              borderRadius: '6px',
              color: '#ffffff',
              backgroundColor: '#1E1E5D',
              boxShadow: '0 4px 14px 0 rgba(0,0,0,.3)',
            }}
            invert
            marginRight={0.6}
            marginTop={0.2}
          >
            {tag}
          </Tag>
        ))}
      </Grid>
      <Spacer />
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Link href={sourceCode} target='_blank'>
          <Button
            icon={<FaGithub color='#fff' />}
            width={0.8}
            style={{
              border: 'none',
              color: '#ffffff',
              backgroundColor: '#0070f3',
              boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
              minWidth:'100px'
            }}
          >
            Code
          </Button>
        </Link>
        <Spacer h={1} />
        <Link href={url} target='_blank'>
          <Button
            width={0.8}
            icon={<FaGlobe color='#fff' />}
            style={{
              border: 'none',
              backgroundColor: '#ff0090',
              color: '#ffffff',
              boxShadow: '0 4px 8px 0 #f49ac2 ',
              minWidth:'100px'
            }}
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
