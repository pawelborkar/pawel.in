import { Grid, Text } from '@geist-ui/core';
import { ProjectCard } from '@/components';

const projects = [
  {
    id: 1,
    title: 'CryptoHub',
    description: 'One stop to know all about cryptocurrencies and details.',
    tags: ['ReactJS', 'Ant Design', 'API', 'Redux Toolkit', 'ChartJS'],
    sourceCode: `https://github.com/pawelborkar/cryptohub`,
    url: `https://cryptohub.onrender.com`,
  },
  {
    id: 2,
    title: 'WikiSearch',
    description: "Search functionality implemented using Wikipedia's API.",
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: `https://github.com/pawelborkar/wikisearch`,
    url: `https://wikisearch.onrender.com`,
  },
  {
    id: 3,
    title: 'Doodle',
    description: "Doodle: Drawing pad you'll gonna love.",
    tags: ['ReactJS', 'React Canvas Draw'],
    sourceCode: `https://github.com/pawelborkar/doodle`,
    url: `https://usedoodle.onrender.com`,
  },
  {
    id: 4,
    title: 'Netflix Clone',
    description: 'Netflix Landing Page built in HTML, CSS & JS.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: `https://github.com/pawelborkar/netflix-clone`,
    url: `https://mynetflix.onrender.com`,
  },
  {
    id: 5,
    title: 'JellyFish Theme',
    description: 'JellyFish: Theme your code editor will love',
    tags: ['UI', 'UX', 'JSON'],
    sourceCode: `https://github.com/pawelborkar/vscode-jellyfish`,
    url: `https://marketplace.visualstudio.com/items?itemName=PawelBorkar.jellyfish`,
  },
  {
    id: 6,
    title: 'PWA: Weather App',
    description: 'Progressive WebApp (PWA) Weather APP',
    tags: ['Progressive Web App', 'ReactJS', 'API'],
    sourceCode: `https://github.com/pawelborkar/cryptohub`,
    url: `https://pb-weather-app.netlify.app/`,
  },
];

const Projects = () => {
  return (
    <Grid padding={2}>
      <Text b style={{ letterSpacing: '0.6px' }} h2 marginTop={2}>
        <Text span type='success'>
          P
        </Text>
        <Text span type='warning'>
          r
        </Text>
        <Text span type='secondary'>
          o
        </Text>
        <Text span type='error'>
          j
        </Text>
        <Text span type='success'>
          e
        </Text>
        <Text span type='warning'>
          c
        </Text>
        <Text span type='secondary'>
          t
        </Text>
        <Text span type='error'>
          s
        </Text>
      </Text>
      <Grid style={{ overflow: 'scroll', height: '84vh',}}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
