export type TSkills = {
  name: string;
  img: string;
  width: number;
}[];
export type TEducation = {
  universityName: string;
  faculty: string;
  degree: string;
  startData: string;
  endDate: string;
  grade: String;
  img?: string;
  specialization: string;
  descrp: string;
}[];

export type TExperience = {
  companyName: string;
  position: string;
  startData: string;
  endDate: string;
  skills: string[];
  descrp: string;
  img: string;
  worktype: string;
  location: string;
  tasks: string[];
  link: string;
}[]

export const skills: TSkills = [
  {
    name: "html",
    img: "/images/html.png",
    width: 100,
  },
  {
    name: "css",
    img: "/images/CSS.png",
    width: 100,
  },
  {
    name: "javascript",
    img: "/images/Js.png",
    width: 100,
  },
  {
    name: "typescript",
    img: "/images/TS.svg",
    width: 100,
  },
  {
    name: "react js",
    img: "/images/React.png",
    width: 100,
  },
  {
    name: "next js",
    img: "/images/next.png",
    width: 100,
  },
  {
    name: "ext js",
    img: "/images/extJs.jpg",
    width: 100,
  },
  {
    name: "material ui",
    img: "/images/mui.svg",
    width: 100,
  },
  {
    name: "react query",
    img: "/images/reactquery.svg",
    width: 100,
  },
  {
    name: "recoil",
    img: "/images/recoil.png",
    width: 100,
  },
  {
    name: "redux",
    img: "/images/redux.svg",
    width: 100,
  },
  {
    name: "react router",
    img: "/images/ReactRouter.png",
    width: 100,
  },
  {
    name: "tailwind css",
    img: "/images/Tailwind.svg",
    width: 100,
  },
  {
    name: "graph ql",
    img: "/images/GraphQl.png",
    width: 100,
  },
  {
    name: "git",
    img: "/images/git.jpg",
    width: 100,
  },
  {
    name: "gitlab",
    img: "/images/gitlab.svg",
    width: 100,
  },
  {
    name: "github",
    img: "/images/github.png",
    width: 100,
  },
  {
    name: "figma",
    img: "/images/Figma.png",
    width: 100,
  },
];

export const education:TEducation = [
  {
    universityName: "Damascus",
    faculty: "Information Technology Engineering",
    degree: "Bachelor",
    startData: "2016",
    endDate: "2021",
    grade: "76.23%",
    img: "/images/ITE.jpg",
    specialization: "AI",
    descrp: "I graduated with a bachelor's degree in information technology engineering at Damascus university, syria. I completed 10 semesters and have a degree of 76.23% and a CGPA of 8.02. I taken courses in Data Structures, Algorithms, Object-Oriented Programming languages (C++,Java), Database (MySQL), Operating Systems, Computer Networks, Mathematics and Statistics, AI (machine learning, deep learning, natural language processing). I worked on various group projects in my college."

  }
]

export const experience:TExperience = [
  {
    companyName: 'EcoMundo',
    position: 'Frontend Web Developer',
    startData: 'Feb 2022',
    endDate: 'Oct 2023',
    worktype: 'Remotely',
    location: 'Issy-les-Moulineaux, Île-de-France, France',
    img: '/images/EcoMundo.jpg',
    descrp: 'A Firm contains 51-200 employees around the world that provides expert services and software tools to their clients in the areas of Chemicals/Toxicology and Regulations.',
    link: 'https://en.ecomundo.eu',
    tasks: [
      'Discussed and reviewed specifications and mockups with the development team.',
      'Developed and implemented highly responsive user interfaces using React.js and Ext.js framework.',
      'Worked on migrating applications user interfaces from Ext.js framework to React.js library.',
      'Played a role in Code review and refactoring the code.',
      'Debugged and fixed bugs of the applications.',
      'Presented product demos to the client.'
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Ext JS',
      'React Query',
      'Recoil',
      'React Router',
      'Material UI',
      'Graph QL',
      'Agile',
      'Git',
      'Gitlab'
    ]
   
  }
]