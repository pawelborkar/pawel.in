import { Grid, Tabs } from '@geist-ui/core';
import React from 'react';
import styles from '@/styles/Home.module.css';

const Content = () => {
  return (
    <Grid>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem
      iste porro? Similique quo culpa mollitia quas, nobis, quod quidem officia
      ratione voluptatem numquam nam repudiandae recusandae eaque iusto
      expedita!
    </Grid>
    // <Tabs initialValue='1' className={styles.app}>
    //   <Tabs.Item label='Pawel Diaries' value='1'>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, incidunt
    //     ad. Autem, obcaecati. Consectetur iure modi dolores libero! Quaerat
    //     aperiam dolor officiis aut sequi, omnis at quisquam voluptatem impedit
    //     sapiente.
    //   </Tabs.Item>
    //   <Tabs.Item label='Pawel Poetries' value='2'>
    //     Pawel Poetries
    //   </Tabs.Item>
    //   <Tabs.Item label='Pawel Shayaris' value='3'>
    //     Pawel Shayaris
    //   </Tabs.Item>
    //   <Tabs.Item label='Pawel' value='4'>
    //     Pawel
    //   </Tabs.Item>
    // </Tabs>
  );
};

export default Content;
