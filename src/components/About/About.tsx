import { Divider, Grid, Text } from '@geist-ui/core';
import { useAtom } from 'jotai';
import { darkModeToggleAtom } from '@/globalStates';
const About = () => {
  const [isDark] = useAtom(darkModeToggleAtom);
  return (
    <>
      <header>
        <Text b style={{ letterSpacing: '0.6px' }} h2 marginTop={4}>
          <Text span type='success'>
            A
          </Text>
          <Text span type='warning'>
            b
          </Text>
          <Text span type='secondary'>
            o
          </Text>
          <Text span type='error'>
            u
          </Text>
          <Text span style={{ color: '#ee82ee' }}>
            t
          </Text>
        </Text>
      </header>
      <Grid style={{ color: isDark ? '#C9D1D9' : '#262626' }}>
        <Text p marginBottom={1}>
          Hi, I&apos;m <Text b>Pawel</Text>.
        </Text>
        <Text p marginBottom={2}>
          I&apos;m currently working as a <Text b>Software Engineer</Text> at
          Konverge AI, where I&apos;m currently working on a product which will
          help developers to manage multiple databases with an ease at a single
          place, take insights, extract data and run AI/ML operations.
        </Text>
      </Grid>

      <Divider />
    </>
  );
};

export default About;
