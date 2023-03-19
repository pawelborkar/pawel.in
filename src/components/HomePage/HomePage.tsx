import { Grid, Image, Text } from '@geist-ui/core';
import { useAtom } from 'jotai';
import { darkModeToggleAtom } from '@/globalStates';
import { Inter } from 'next/font/google';
import { style } from './homepage.css';
const inter = Inter({ subsets: ['latin'] });
const HomePage = () => {
  const [isDark] = useAtom(darkModeToggleAtom);
  return (
    <Grid style={style.container}>
      <Grid style={{ width:'60%' }}>
        <Grid style={{ fontWeight: 500 }}>
          <Text b style={{ letterSpacing: '0.6px' }} font={2}>
            <Text span style={{ backgroundColor: '#ffbe0b', color: '#000000' }}>
              P
            </Text>
            <Text span type='warning'>
              A
            </Text>
            <Text span type='success'>
              W
            </Text>
            <Text span type='error'>
              E
            </Text>
            <Text span style={{ color: '#ee82ee', paddingRight: '1.5rem' }}>
              L
            </Text>
            {/* <Text/> */}
            <Text span style={{ backgroundColor: '#9bf6ff', color: '#000000' }}>
              B
            </Text>
            <Text span type='warning'>
              O
            </Text>
            <Text span type='success'>
              R
            </Text>
            <Text span type='error'>
              K
            </Text>
            <Text span style={{ color: '#ee82ee' }}>
              A
            </Text>
            <Text span type='warning'>
              R
            </Text>
          </Text>
        </Grid>
        <Grid style={{ color: isDark ? '#C9D1D9' : '#262626' }}>
          <Text font={1} marginRight={4}>
            Hi, I&apos;m Pawel. I&apos;m a Software Engineer at Konverge AI
            where I&apos;m currently working on a product which will help
            developers to manage multiple databases with an ease at a single
            place, take insights, extract data and run AI/ML operations.
          </Text>
        </Grid>
      </Grid>
      <Grid
        width='40%'
        height='200px'
        style={{
          // border: '2px solid salmon',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={style.img}
          src='https://res.cloudinary.com/itspawel/image/upload/v1678921578/pawel-borkar.jpg'
          alt="Pawel's profile picture"
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
