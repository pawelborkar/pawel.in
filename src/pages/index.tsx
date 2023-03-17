import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Grid, Tabs } from '@geist-ui/core';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import styles from '@/styles/Home.module.css';
import {
  About,
  Background,
  Blog,
  Content,
  HomePage,
  Resources,
} from '@/components';
import { useAtom } from 'jotai';
import { darkModeToggleAtom } from '@/globalStates';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

const TabContent = [
  {
    id: 1,
    label: 'Home',
    value: 'homepage',
    component: <HomePage />,
  },
  {
    id: 2,
    label: 'Blog',
    value: 'blog',
    component: <Blog />,
  },
  {
    id: 3,
    label: 'About',
    value: 'about',
    component: <About />,
  },
  {
    id: 4,
    label: 'Content',
    value: 'content',
    component: <Content />,
  },
  {
    id: 5,
    label: 'Projects',
    value: 'projects',
    component: <Resources />,
  },
];

export default function Home() {
  const [isDark, setIsDark] = useAtom(darkModeToggleAtom);
  const toggle = (e: React.BaseSyntheticEvent) => {
    setIsDark(!isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  };

  return (
    <>
      <Head>
        <title>Pawel Borkar</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={styles.main}
        style={{
          backgroundColor: isDark ? '#191128' : '#fff6ea',
          transition: '1.2s',
        }}
      >
        <Background />
        <div className={styles.app}>
          <Tabs
            style={{
              width: '100%',
              padding: '2rem',
            }}
            font={'20px'}
            initialValue='html'
            hideBorder
            leftSpace={0}
          >
            {TabContent.map((Tab) => {
              return (
                <Tabs.Item key={Tab.id} label={Tab.label} value={Tab.value}>
                  {Tab.component}
                </Tabs.Item>
              );
            })}
          </Tabs>
        </div>
        <Grid style={{ cursor: 'pointer', padding: '2rem' }} onClick={toggle}>
          {isDark ? (
            <BsSun fontSize={24} />
          ) : (
            <BsMoonStarsFill fontSize={18} style={{ color: '#000' }} />
          )}
        </Grid>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
