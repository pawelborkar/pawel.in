import { Button, Divider, Grid, Spacer, Text } from '@geist-ui/core';
import { useAtom } from 'jotai';
import { darkModeToggleAtom } from '@/globalStates';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const About = () => {
  const [isDark] = useAtom(darkModeToggleAtom);
  return (
    <Grid padding={2} height='100vh'>
      <header>
        <Text b style={{ letterSpacing: '0.6px' }} h2 marginTop={2}>
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
      <Grid font={1} style={{ color: isDark ? '#C9D1D9' : '#262626' }}>
        <Text p marginBottom={1}>
          Hi, I&apos;m <Text b>Pawel</Text>.
        </Text>
        <Text p marginBottom={2}>
          I&apos;m currently working as a <Text b>Software Engineer</Text> at
          Konverge AI, where I&apos;m currently working on a product which will
          help developers to manage multiple databases with an ease at a single
          place, take insights, extract data and run AI/ML operations.
        </Text>

        <Divider />
        <Text p>
          As an inquisitive person, I&apos;m always curious to learn something
          new every and as a result of this you will find me reading some or the
          other thing on the internet, reading a book or watching some
          interesting Ted Talk on youtube. I also have a keen interest in human
          pyschology and why people behave the way they do. Apart from this I
          love to write whether it&apos;s a quote, poem, shayari or code.
        </Text>
        <Text>
          In my free time you&apos;ll always find me learning something new
          whether it&apos;s learing to play some musical instruments like
          kalimba, piano or guitar.
        </Text>
        <Divider />
        <Spacer h={1} />
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Link href='https://link.pawel.in/git' target='_blank'>
          <FaGithub />
            {/* <Button
              style={{ minWidth: '20px' }}
              shadow
              type='success-light'
              icon={<FaGithub />}
            >
              GitHub
            </Button> */}
          </Link>
          <Link href='https://link.pawel.in/twitter' target='_blank'>
          <FaTwitter />
            {/* <Button
              style={{ minWidth: '20px' }}
              shadow
              type='success-light'
              icon={<FaTwitter />}
            >
              Twitter
            </Button> */}
          </Link>
          <Link href='https://link.pawel.in/linkedin' target='_blank'>
          <FaLinkedinIn />
            {/* <Button
              style={{ minWidth: '20px' }}
              shadow
              type='success-light'
              icon={<FaLinkedinIn />}
            >
              LinkedIn
            </Button> */}
          </Link>
        </Grid>
        <Spacer h={2} />
      </Grid>
    </Grid>
  );
};

export default About;
