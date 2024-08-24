import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const links = [
  {
    id: 1,
    name: "Home",
    submenu: false,
    linkTo: ""
  },
  {
    id: 2,
    name: "Blog",
    submenu: false,
    linkTo: "blog"
  },
  {
    id: 3,
    name: "Chat",
    submenu: false,
    linkTo: "chat"
  },
  {
    id: 4,
    name: "Tutorials",
    submenu: true,
    linkTo: "tutorials",
    sublinks: [
      {
        id: 1,
        Head: "C",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/tutorials/c/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/tutorials/c/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/tutorials/c/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/tutorials/c/advance",
          },
        ],
      },
      {
        id: 'Tutorials_2',
        Head: "CPP",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/tutorials/cpp/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/tutorials/cpp/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/tutorials/cpp/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/tutorials/cpp/advance",
          },
          {
            id: 5,
            name: "Development",
            link: "/tutorials/cpp/development",
          },
        ],
      },
      {
        id: 3,
        Head: "Java",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/tutorials/java/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/tutorials/java/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/tutorials/java/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/tutorials/java/advance",
          },
          {
            id: 5,
            name: "Web Development",
            link: "/tutorials/java/development",
          },
        ],
      },

    ],
  },
  {
    id: 5,
    name: "Exercises",
    submenu: true,
    linkTo: 'exercises',
    sublinks: [
      {
        id: 1,
        Head: "C",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/exercises/c/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/exercises/c/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/exercises/c/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/exercises/c/advance",
          },
        ],
      },
      {
        id: 'Tutorials_2',
        Head: "CPP",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/exercises/cpp/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/exercises/cpp/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/exercises/cpp/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/exercises/cpp/advance",
          },
          {
            id: 5,
            name: "Development",
            link: "/exercises/cpp/development",
          },
        ],
      },
      {
        id: 3,
        Head: "Java",
        sublink: [
          {
            id: 1,
            name: "Introduction",
            link: "/exercises/java/introduction",
          },
          {
            id: 2,
            name: "Exercise",
            link: "/exercises/java/exercise",
          },
          {
            id: 3,
            name: "Questions",
            link: "/exercises/java/questions",
          },
          {
            id: 4,
            name: "Advance",
            link: "/exercises/java/advance",
          },
          {
            id: 5,
            name: "Web Development",
            link: "/exercises/java/development",
          },
        ],
      },

    ],
  },
];

export const darkBtn = [
  {
    id: 'light',
    icon: 'sunny',
    text: 'light',
  },
  {
    id: 'dark',
    icon: 'moon',
    text: 'dark',
  },
  {
    id: 'system',
    icon: 'desktop-outline',
    text: 'system',
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    id: 1,
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    id: 2,
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    content: "It is usually people in the money business, finance, and international trade that are really rich.",
    id: 3,
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        id: 1,
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        id: 2,
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        id: 3,
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        id: 4,
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        id: 5,
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        id: 1,
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        id: 1,
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        id: 1,
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        id: 1,
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        id: 1,
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        id: 1,
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        id: 1,
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];