import { Divider, Text } from '@geist-ui/core';

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
      <Text p marginBottom={1}>
        Hi, I&apos;m Pawel.
      </Text>
      <Text p marginBottom={2}>
        I&apos;m currently working as a <Text b>Software Engineer</Text> at
        Konverge AI, where I&apos;m currently working on a product which will
        help developers to manage multiple databases with an ease at a single
        place, take insights, extract data and run AI/ML operations.
      </Text>
      <Divider />
    </>
  );
};

export default About;
