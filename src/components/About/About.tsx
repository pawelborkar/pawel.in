import { Text } from '@geist-ui/core';
import React from 'react';

const About = () => {
  return (
    <>
      {/* 
    1. Header
    2. Intro para
    3. Divider
    4. A brief intro
    5. footer with social links
    
    */}
      <header>
        <Text b i style={{ letterSpacing: '0.6px' }} h2>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum fugiat officia quam dolorem obcaecati, cum, unde et odio sequi nesciunt ipsa libero! Deleniti quod architecto repellendus blanditiis eius labore?</p>
    </>
  );
};

export default About;
