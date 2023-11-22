import bootcamper from 'public/assets/bootcamper-logo.png';
import cryptoHub from 'public/assets/cryptohub-logo.png';
import jellyfish from 'public/assets/jellyfish.png';
import doodle from 'public/assets/doodle.ico';
import socialLinks from 'public/assets/links-pawel.png';
import wikisearch from 'public/assets/wiki-logo.png';

export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: 'Pawel Borkar',
  description:
    'Pawel is a Software Engineer from India. He has a passion for design and great user experience. His passion for a great UI can be seen in his JellyFish Theme for vscode which has more than 250K+ installs on vscode marketplace.',
  navItems: [
    {
      label: 'Projects',
      href: '/#projects',
    },
    {
      label: 'Blogs',
      href: '/#blogs',
    },
    {
      label: 'Diaries',
      href: '/diaries',
    },
  ],
  navMenuItems: [
    {
      label: 'Projects',
      href: '/#projects',
    },
    {
      label: 'Blogs',
      href: '/#blogs',
    },
    {
      label: 'Diaries',
      href: '/diaries',
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/pawelborkar/',
    github: 'https://github.com/pawelborkar',
    twitter: 'https://twitter.com/pawelsb',
  },
  projects: [
    {
      id: '01',
      name: 'CryptoHub',
      description: 'CryptoHub: Get all information about cryptocurrencies at one place.',
      url: 'go.pawel.in/cryptohub',
      git: 'https://github.com/pawelborkar/cryptohub',
      logo: cryptoHub,
    },
    {
      id: '02',
      name: 'WikiSearch',
      description: "Search functionality implemented using Wikipedia's API.",
      url: 'go.pawel.in/wikisearch',
      git: 'https://github.com/pawelborkar/wikisearch',
      logo: wikisearch,
    },
    {
      id: '03',
      name: 'JellyFish Theme',
      description: 'JellyFish: Theme your code editor will love.',
      url: 'go.pawel.in/jellyfish',
      git: 'https://github.com/pawelborkar/vscode-jellyfish',
      logo: jellyfish,
    },
    {
      id: '04',
      name: 'Bootcamper',
      description: 'Add, Review and Find bootcamps in your country.',
      url: 'go.pawel.in/bootcamper',
      git: 'https://github.com/pawelborkar/bootcamper/docs',
      logo: bootcamper,
    },
    {
      id: '05',
      name: 'Doodle',
      description: "Doodle: Drawing pad you'll gonna love.",
      url: 'go.pawel.in/doodle',
      git: 'https://github.com/pawelborkar/doodle',
      logo: doodle,
    },
    {
      id: '06',
      name: 'My Social Links',
      description: 'My self made linktree like social links aggregator with added tracking.',
      url: 'go.pawel.in/social',
      git: 'https://github.com/pawelborkar/links.pawel.in',
      logo: socialLinks,
    },
  ],
  blogs: [
    {
      id: '01',
      title: 'Git Squash Simplified',
      url: 'https://dev.to/pb/git-squash-simplified-3ba1',
    },
    {
      id: '02',
      title: 'Linked List Simplified: Part 1',
      url: 'https://dev.to/pb/linked-list-simplified-part-1-2ian',
    },
    {
      id: '03',
      title: 'Open Source Programs for Students to participate',
      url: 'https://dev.to/pb/open-source-programs-for-students-to-participate-55gm',
    },
    {
      id: '04',
      title: 'Vim Shortcuts to get you started as a Beginner',
      url: 'https://dev.to/pb/vim-shortcuts-to-get-you-started-as-a-beginner-4ga0',
    },
  ],
  blogDetails: {
    avatarUrl:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--dG92fpoQ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/618537/3cd782cd-1a3a-4926-9eb6-1e55fba23a61.jpg',
    author: 'Pawel',
    twitter: 'https://x.com/pawelsb',
    username: 'pawelsb',
  },
};
