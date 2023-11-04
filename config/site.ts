// import bootcamper from 'public/assets/bootcamper-logo.png';
import bootcamper from 'public/assets/bootcamper-logo.png';
import cryptoHub from 'public/assets/cryptohub-logo.png';
import jellyfish from 'public/assets/jellyfish.png';
import doodle from 'public/assets/doodle.ico';
import pawel from 'public/assets/pawel.jpeg';
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
      description:
        'CryptoHub: Get all information about cryptocurrencies at one place.',
      url: 'cryptohub.pawel.in',
      git: 'https://github.com/pawelborkar/cryptohub',
      logo: cryptoHub,
    },
    {
      id: '02',
      name: 'WikiSearch',
      description: "Search functionality implemented using Wikipedia's API.",
      url: 'wikisearch.pawel.in',
      git: 'https://github.com/pawelborkar/wikisearch',
      logo: wikisearch,
    },
    {
      id: '03',
      name: 'JellyFish Theme',
      description: 'JellyFish: Theme your code editor will love.',
      url: 'tinyurl.com/je11yfish',
      git: 'https://github.com/pawelborkar/vscode-jellyfish',
      logo: jellyfish,
    },
    {
      id: '04',
      name: 'Bootcamper',
      description: 'Add, Review and Find bootcamps in your country.',
      url: 'api.bootcamper.pawel.in/docs',
      git: 'https://github.com/pawelborkar/bootcamper/docs',
      logo: bootcamper,
    },
    {
      id: '05',
      name: 'Doodle',
      description: "Doodle: Drawing pad you'll gonna love.",
      url: 'pen.pawel.in',
      git: 'https://github.com/pawelborkar/doodle',
      logo: doodle,
    },
    {
      id: '06',
      name: 'My Social Links',
      description:
        'My self made linktree like social links aggregator with added tracking.',
      url: 'hi.pawel.in',
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
    avatarUrl: 'https://media.licdn.com/dms/image/C5603AQEEyqfszoVe5g/profile-displayphoto-shrink_400_400/0/1657829032658?e=1704326400&v=beta&t=XPn71DuPMPXvOrA32CImJgpHgkWv161Ts3jptaNfAZA',
    author: 'Pawel',
    twitter: 'https://x.com/pawelsb',
    username: 'pawelsb',
  },
};
