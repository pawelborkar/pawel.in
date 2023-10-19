'use client';
import { Code } from '@nextui-org/react';
import ProjectCard from '@/components/ProjectCard';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl h-screen flex flex-col justify-between items-center">
      <div className="w-full flex justify-start items-center">
        <div>
          <h1 className="font-bold text-2xl mb-8">Hey, I&apos;m Pawel 👋</h1>
          <p>
            I&apos;m a frontend developer, optimist and open source enthusiast.
            Currently I&apos;m learning <Code color="success">FastAPI</Code> and{' '}
            <Code color="warning">SQL</Code>. If not coding then you probably
            find me reading a book or skating.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Link href={'/#projects'}>
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
          </div>
        </Link>
        <div className="w-full flex justify-between flex-wrap">
          {siteConfig.projects.map((item) => (
            <div className=" max-w-xs flex-1 m-3" key={item.id}>
              <ProjectCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
