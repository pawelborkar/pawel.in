import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  git: string;
  logo: string;
};

export type TBlog = {
  id: string;
  title: string;
  url: string;
};
