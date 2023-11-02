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
      label: 'Blog',
      href: '/#blog',
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
      label: 'Blog',
      href: '/#blog',
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
      url: 'https://cryptohub.pawel.in',
      git: 'https://github.com/pawelborkar/cryptohub',
      logo: 'https://cryptohub.onrender.com/static/media/ring.9e4924c0aeaa54287fae.png',
    },
    {
      id: '02',
      name: 'WikiSearch',
      description: "Search functionality implemented using Wikipedia's API.",
      url: 'https://wikisearch.pawel.in',
      git: 'https://github.com/pawelborkar/wikisearch',
      logo: 'https://raw.githubusercontent.com/pawelborkar/wikisearch/master/assets/wiki-logo.png',
    },
    {
      id: '03',
      name: 'JellyFish Theme',
      description: 'JellyFish: Theme your code editor will love.',
      url: 'https://tinyurl.com/je11yfish',
      git: 'https://github.com/pawelborkar/vscode-jellyfish',
      logo: 'https://raw.githubusercontent.com/pawelborkar/vscode-JellyFish/star/assets/jellyfish.png',
    },
    {
      id: '04',
      name: 'Bootcamper',
      description: 'Add, Review and Find bootcamps in your country.',
      url: 'https://api.bootcamper.pawel.in/docs',
      git: 'https://github.com/pawelborkar/bootcamper/docs',
      logo: 'https://cdn.dribbble.com/users/606206/screenshots/2034939/b-logo-round-light-dribbble_1x.png',
    },
    {
      id: '05',
      name: 'Doodle',
      description: "Doodle: Drawing pad you'll gonna love.",
      url: 'https://pen.pawel.in',
      git: 'https://github.com/pawelborkar/doodle',
      logo: 'https://pen.pawel.in/favicon.ico',
    },
    {
      id: '06',
      name: 'My Social Links',
      description:
        'My self made linktree like social links aggregator with added tracking.',
      url: 'https://hi.pawel.in',
      git: 'https://github.com/pawelborkar/links.pawel.in',
      logo: 'https://github.com/pawelborkar/links.pawel.in/raw/master/assets/Screenshot.png',
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
      'https://res.cloudinary.com/practicaldev/image/fetch/s--zYp6OJGZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/618537/3cd782cd-1a3a-4926-9eb6-1e55fba23a61.jpg',
    author: 'Pawel',
    twitter: 'https://x.com/pawelsb',
    username: 'pawelsb',
  },
};
