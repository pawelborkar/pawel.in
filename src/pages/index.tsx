import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Grid, Tabs } from '@geist-ui/core';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import {
  About,
  Background,
  Blog,
  Footer,
  HomePage,
  Projects,
} from '@/components';
import { useAtom } from 'jotai';
import { darkModeToggleAtom } from '@/globalStates';
import styles from '@/styles/Home.module.css';

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
    id: 5,
    label: 'Projects',
    value: 'projects',
    component: <Projects />,
  },
  {
    id: 3,
    label: 'About',
    value: 'about',
    component: <About />,
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
        <meta name='description' content='Pawel is a Frontend Engineer from India. He has a passion for design and great user experience. His passion for a great UI can be seen in his JellyFish Theme for vscode which has more than 200K+ installs on vscode marketplace.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='https://res.cloudinary.com/practicaldev/image/fetch/s--dG92fpoQ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/618537/3cd782cd-1a3a-4926-9eb6-1e55fba23a61.jpg' />
      </Head>
      <main
        className={styles.main}
        style={{
          transition: '1.2s',
        }}
      >
        <Background />
        <div className={styles.app}>
          <Tabs style={{ width: '96vw' }} initialValue='1' leftSpace={0}>
            {TabContent.map((Tab) => {
              return (
                <Tabs.Item
                  key={Tab.id}
                  label={Tab.label}
                  value={Tab.id.toString()}
                  style={{ padding:'24px',}}
                >
                  {Tab.component}
                </Tabs.Item>
              );
            })}
          </Tabs>
          {/* <Grid
            style={{ cursor: 'pointer', padding: '2rem', width: '4vw' }}
            onClick={toggle}
          >
            {isDark ? (
              <BsSun fontSize={24} />
            ) : (
              <BsMoonStarsFill fontSize={18} style={{ color: '#000' }} />
            )}
          </Grid> */}
        </div>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
