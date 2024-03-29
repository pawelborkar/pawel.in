'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody, Divider, Link } from '@nextui-org/react';
import { TProject } from '@/types';
import { GithubIcon } from './icons';

const ProjectCard = ({ ...project }: TProject) => {
  return (
    <Card className="w-80 bg-white/10 backdrop shadow-lg">
      <CardHeader className="flex justify-around items-center">
        <div className="flex justify-around items-center">
          <Image
            alt="nextui logo"
            height={40}
            className="rounded"
            src={project.logo}
            width={40}
          />
          <div className="flex flex-col ml-4">
            <p className="text-md">{project.name}</p>
            <Link
              color="warning"
              isExternal
              showAnchorIcon
              href={`https://${project.url}`}
              className="text-small cursor-pointer text-default-500"
            >
              {project.url}
            </Link>
          </div>
        </div>
        <div>
          <Link
            className="text-small cursor-pointer text-default-500"
            isExternal
            href={project.git}
          >
            <GithubIcon />
          </Link>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{project.description}</p>
      </CardBody>
      <Divider />
    </Card>
  );
};
export default ProjectCard;
