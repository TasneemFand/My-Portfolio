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
  descrp?: string;
  img: string;
  worktype: string;
  location: string;
  tasks: string[];
  link?: string;
}[];

export type TProject = {
  projectName: string;
  Date?: string;
  skills: string[];
  descrp: string;
  img: string[];
  codeLink?: string;
  liveLink?: string;
  projectType?: string;
  MyWorks?: string[];
  excerpt?: string;
}[];

export const skills: TSkills = [
  {
    name: "react js",
    img: "/images/React.webp",
    width: 100,
  },
  {
    name: "next js",
    img: "/images/next.webp",
    width: 100,
  },
  {
    name: "javascript",
    img: "/images/Js.webp",
    width: 100,
  },
  {
    name: "typescript",
    img: "/images/TS.webp",
    width: 100,
  },
  {
    name: "Prisma",
    img: "/images/prisma.webp",
    width: 100,
  },
  {
    name: "MongoDB",
    img: "/images/mongoDB.webp",
    width: 100,
  },
  {
    name: "Express",
    img: "/images/express.webp",
    width: 100,
  },
  {
    name: "react router",
    img: "/images/ReactRouter.webp",
    width: 100,
  },
  {
    name: "react query",
    img: "/images/reactquery.webp",
    width: 100,
  },
  {
    name: "recoil",
    img: "/images/recoil.webp",
    width: 100,
  },
  {
    name: "redux",
    img: "/images/redux.webp",
    width: 100,
  },
  {
    name: "graph ql",
    img: "/images/GraphQl.webp",
    width: 100,
  },
  {
    name: "html",
    img: "/images/html.webp",
    width: 100,
  },
  {
    name: "css",
    img: "/images/CSS.webp",
    width: 100,
  },
  {
    name: "tailwind css",
    img: "/images/Tailwind.webp",
    width: 100,
  },
  {
    name: "ext js",
    img: "/images/extJs.webp",
    width: 100,
  },
  {
    name: "material ui",
    img: "/images/mui.webp",
    width: 100,
  },
  {
    name: "git",
    img: "/images/git.webp",
    width: 100,
  },
  {
    name: "gitlab",
    img: "/images/gitlab.webp",
    width: 100,
  },
  {
    name: "github",
    img: "/images/github.webp",
    width: 100,
  },
  {
    name: "figma",
    img: "/images/Figma.webp",
    width: 100,
  },
];

export const education: TEducation = [
  {
    universityName: "Damascus",
    faculty: "Information Technology Engineering",
    degree: "Bachelor",
    startData: "2016",
    endDate: "2021",
    grade: "76.23%",
    img: "/images/ITE.webp",
    specialization: "AI",
    descrp:
      "I graduated with a bachelor's degree in information technology engineering at Damascus university, syria. I completed 10 semesters and have a degree of 76.23% and a CGPA of 8.02. I taken courses in Data Structures, Algorithms, Object-Oriented Programming languages (C++,Java), Database (MySQL), Operating Systems, Computer Networks, Mathematics and Statistics, AI (machine learning, deep learning, natural language processing). I worked on various group projects in my college.",
  },
];

export const experience: TExperience = [
  {
    companyName: "L-one Systems",
    position: "JavaScript Developer",
    startData: "Jul 2024",
    endDate: "Oct 2-24",
    worktype: "On-site",
    location: "Damascus, Syria",
    img: "",
    descrp:
      "A Firm specializing in outsourcing services that combine quality and cost-efficiency, headquartered in Darmstadt, Hessen, Germany, with an office in Damascus.",
    link: "https://l-one.software/kennenlernen",
    tasks: [
      "Communicated with the client to handle his requests, and provided daily updates to ensure transparency and customer satisfaction.",
      "Worked on the migration of the client’s application from JavaScript to TypeScript, improving type safety and reducing runtime errors.",
      "Performed in-depth debugging, analyzing code and tracking down errors.",
      "Efficiently handled and improved legacy codebases, even in environments with limited documentation.",
      "Identified and resolved critical issues.",
    ],
    skills: [
      "Frontend Development",
      "JavaScript",
      "TypeScript",
      "Debugging",
      "Bug Tracking",
      "Agile",
      "Git",
    ],
  },
  {
    companyName: "CUBE Media",
    position: "Senior Frontend Developer",
    startData: "Jan 2024",
    endDate: "Jun 2-24",
    worktype: "On-site",
    location: "Damascus, Syria",
    img: "/images/cube_media_team_logo.jpg",
    descrp:
      "A startup IT company leading major projects located in Istanbul and Damascus.",
    link: "https://www.linkedin.com/company/cube-media-team",
    tasks: [
      "Architected the frontend for a medium-to large-scale SaaS application.",
      "Researched and selected the most suitable libraries.",
      "Developed responsive user interfaces using React, HTML, MUI, CSS, ensuring scalability.",
      "Created demo APIs to present realistic data to the client during demos.",
      "Collaborated closely with the designer and product owner to align the product with both user and business needs.",
      "Created clean, generic components to establish a robust foundation for future growth.",
    ],
    skills: [
      "Frontend Development",
      "React",
      "TypeScript",
      "React Router",
      "React Query",
      "Reach hook Form",
      "Html",
      "CSS",
      "Material-ui",
      "Material React Table",
      "Agile",
      "Git",
      "Microsoft Azure",
      "Ensure performance",
      "Responsive Web Design",
    ],
  },
  {
    companyName: "EcoMundo",
    position: "Frontend Web Developer",
    startData: "Nov 2021",
    endDate: "Oct 2023",
    worktype: "Remotely",
    location: "Issy-les-Moulineaux, Île-de-France, France",
    img: "/images/EcoMundo.webp",
    descrp:
      "A Firm contains 51-200 employees around the world that provides expert services and software tools to their clients in the areas of Chemicals/Toxicology and Regulations.",
    link: "https://en.ecomundo.eu",
    tasks: [
      "Discussed and reviewed specifications and mockups with the development team.",
      "Developed and implemented highly responsive user interfaces using React.js and Ext.js framework.",
      "Worked on migrating applications user interfaces from Ext.js framework to React.js library.",
      "Played a role in Code review and refactoring the code.",
      "Debugged and fixed bugs of the applications.",
      "Presented product demos to the client.",
    ],
    skills: [
      "React JS",
      "JavaScript",
      "TypeScript",
      "Ext JS",
      "React Router",
      "React Query",
      "Recoil",
      "HTML",
      "CSS",
      "Material UI",
      "Graph QL",
      "Agile",
      "Git",
      "Gitlab",
    ],
  },
];

export const projects: TProject = [
  {
    projectName: "COSMETIC Factory",
    projectType: "Associated with EcoMundo",
    excerpt:
      "COSMETIC Factory is an AI-powered cloud software solution for the cosmetic industry dedicated to providing expert supports at every stage of development.",
    descrp:
      "COSMETIC Factory is an AI-powered cloud software solution for the cosmetic industry dedicated to providing expert supports at every stage of development. It ensures the centralization of all aspects of the launch of a given cosmetic product. Everything from the conceptualization of your formulas to the creation of your regulatory documents and the global launch of your finished products is organized coherently within a single platform.",
    Date: "Apr 2022",
    MyWorks: [
      "Worked on migrating the app from EXT js to React js.",
      "Developed new features.",
      "Fixed bugs in the app.",
    ],
    img: ["/images/cosmeticFactory.webp"],
    liveLink: "https://ecomundo.eu/tout-en-un/cosmetic-factory",
    skills: [
      "Html",
      "Css",
      "Javascript",
      "Typescript",
      "Reactjs",
      "Extjs",
      "Mui",
      "React-query",
      "Recoil",
      "React-router",
      "Graph-Ql",
      "SQl",
    ],
  },
  {
    projectName: "LMS Platform",
    descrp:
      "A Fully responsive and authenticated web application with a student dashboard and teacher mode.",
    skills: [
      "Nextjs",
      "Typescript",
      "clerk auth",
      "Html",
      "Css",
      "Shadcn-ui",
      "TailwindCSS",
      "Prisma",
      "mongodb",
      "Stripe",
      "Mux video player",
    ],
    codeLink: "https://github.com/TasneemFand/LMS-Platform",
    MyWorks: [
      "Worked on creating responsive user interfaces.",
      "Implemented user authentication.",
      "Implemented backend APIs with prisma.",
      "Developed the student dashboard, where user can browse courses, purchase, complete the chapters of course.",
      "Developed Teacher mode, where teacher can create new courses and new chapters, publish the courses.",
    ],
    liveLink: "https://lms-platform-six-zeta.vercel.app/",
    Date: "Jan 2024 -  Feb 2024 ",
    img: ["/images/lms1.png", "/images/lms.png"],
  },
  {
    projectName: "Travel UI/UX Website",
    descrp: "A Fully Responsive UI/UX Website",
    img: ["/images/travelWebsite.png", "/images/travelWebsite.png"],
    skills: [
      "reactjs",
      "Tailwind css",
      "Html5",
      "Flexbox",
      "CSSGrid",
      "mobile-design",
      "large-screens-design",
    ],
    codeLink: "https://github.com/TasneemFand/Travel_app_UI-UX",
    liveLink: "https://travel-app-ui-ux-flax.vercel.app/",
    MyWorks: [
      "Worked on creating responsive user interface.",
      "Implemented Figma design to code.",
      "Optimized responsive images",
      "Displayed the wbsite on mobile and large screens",
    ],
    Date: "Dec 2023",
  },
  {
    projectName: "Real estate web app",
    descrp:
      "A fully authenticated MERN Web dashboard for the agent and all properties.",
    skills: [
      "Reactjs",
      "Express",
      "Mongoose",
      "NodeJs",
      "Typescript",
      "React Router",
      "React Query",
      "Html",
      "Css",
      "TailwindCSS",
      "Shadcn-ui",
      "Zustand",
    ],
    img: [
      "/images/realEstate.png",
      "/images/realestate-1.png",
      "/images/realEstate-0.png",
      "/images/realestate-3.png",
      "/images/realestate-4.png",
      "/images/realestate-5.png",
      "/images/realestate-6.png",
      "/images/realestate-7.png",
    ],
    codeLink: "https://github.com/TasneemFand/Real-Estate-Web-App",
    MyWorks: [
      "Worked on creating responsive user interfaces with light/dark mode.",
      "Implemented user authentication.",
      "Implemented backend APIs with express and mongoose.",
      "Filtering the properties.",
      "Implemented the pagination of properties table.",
      "Creation of new property.",
      "Displying property details.",
      "supporting Multilingual.",
    ],
    Date: "Nov 2023 - Dec 2023 ",
  },
  {
    projectName: "Kanban task management web app",
    descrp:
      "A fully authenticated Web task manager app where you can create boards, add tasks to each board and manage them.",
    skills: [
      "Html",
      "Css",
      "Typescript",
      "Nextjs",
      "Next Auth",
      "TailwindCSS",
      "Shadcn-ui",
      "Zustand",
      "Prisma",
      "mongodb",
      "react-hot-toast",
      "react-hook-form",
    ],
    img: [
      "/images/kanban.png",
      "/images/kanban.png",
      "/images/kanban-0.jpeg",
      "/images/kanban-1.jpeg",
      "/images/kanban-2.jpeg",
      "/images/kanban-3.jpeg",
      "/images/kanban-4.jpeg",
      "/images/kanban-5.jpeg",
      "/images/kanban-6.jpeg",
    ],
    codeLink: "https://github.com/TasneemFand/Kanban-task-management-web-app",
    MyWorks: [
      "Worked on creating responsive user dashboard interface with light/dark mode.",
      "Implemented user authentication using Next Auth.",
      "Implemented backend APIs with prisma and MongoDB database.",
      "Implemented creation, edition and deletion of boards and tasks.",
      "Implemented edition the status of the task and marking of its subtasks as done.",
    ],
    Date: "Oct 2023 - Nov 2023 ",
  },
  {
    projectName: "Multimedia messaging App",
    descrp:
      "A voice, video, and text Real-time fully authenticated Web chat app where you can belong to groups and channels spend time with friends.",
    skills: [
      "Html",
      "Css",
      "Typescript",
      "Nextjs",
      "Socket.io",
      "Clerk",
      "TailwindCSS",
      "Shadcn-ui",
      "React-Query",
      "Zustand",
      "Prisma",
      "SQLite",
      "LiveKit",
      "Next-themes",
      "uploadThing",
    ],
    img: [
      "/images/chatApp.webp",
      "/images/multimedia-0.png",
      "/images/multimedia-1.png",
      "/images/multimedia-2.png",
      "/images/multimedia-3.png",
      "/images/multimedia-4.png",
      "/images/multimedia-5.png",
      "/images/multimedia-6.png",
      "/images/multimedia-7.png",
    ],
    codeLink: "https://github.com/TasneemFand/Multimedia-messaging-platform",
    MyWorks: [
      "Worked on creating responsive user dashboard interfaces with light/dark mode.",
      "Implemented user authentication using Clerk OAuth2.",
      "Implemented backend APIs with prisma and SQLite database.",
      "Implemented real time chat using socket.io.",
      "Implemented real time audio and video rooms using LiveKit.",
      "Optimized app performance and data fetching using React Query.",
    ],
    Date: "Aug 2023 - Oct 2023 ",
  },
  {
    projectName: "Amazon App Dashboard",
    excerpt:
      "A Simple web dashboard, it allows clients to view dashboard content, view categories and their items for purchasing.",
    descrp:
      "A Simple web dashboard created with next js, material ui for styling and firebase for backend and authentication. it allows clients to view dashboard content, view categories and their items for purchasing.",
    img: ["/images/AmazonDashboard.webp", "/images/Amazon.png"],
    codeLink: "https://github.com/TasneemFand/Amazon-app",
    Date: "Oct 2022 - Nov 2022",
    MyWorks: [
      "Worked on creating responsive user dashboard interface with a sidebar that contains categories.",
      "Developed server-side rendered dashboard products page and product details page.",
      "Built a search bar for searching products by name or category.",
      "Implemented realtime database with firebase.",
      "Implemented authentication with firebase-auth.",
    ],
    skills: [
      "Html",
      "Css",
      "typescript",
      "Nextjs",
      "material-ui",
      "firebase",
      "ReactContextAPI",
    ],
  },
  {
    projectName: "Blogger",
    excerpt: "A fully responsive Blogger Web App",
    descrp:
      "A fully responsive Blogger Web App created with next js, Tailwind CSS for styling and GraphCMS which is a headless content management system based on GraphQL to manage the blogs content with hygraph platform. The app allows clients to view blogger content posts and full markdown articles based on categories, interacting with it by adding comments and showing the most common and recent posts.",
    img: ["/images/bloggr.webp", "/images/blog-0.png"],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "Nextjs",
      "TailwindCSS",
      "GraphCMS",
      "Graph-Ql",
      "ReactContextAPI",
    ],
    MyWorks: [
      "Worked on creating responsive user interfaces with light/dark mode.",
      "Implemented backend GraphQl API requests with GraphCMS.",
      "Developed pre-rendered pages with Static Generation in Next js.",
      "Rendered markdown content.",
    ],
    codeLink: "https://github.com/TasneemFand/Blogger",
    Date: "June 2022 - Aug 2022",
  },
  {
    projectName: "Travel Advisor",
    descrp:
      "A Simple travel website created with React js, Mapbox map that work in react leaflet, Geolocation. where users can search and filter places (restaurants, hotels and attractions) based on location and see the results on the map.",
    codeLink: "https://github.com/TasneemFand/Travel-Advisor",
    Date: "Sep 2021",
    img: ["/images/travel.webp", "/images/travelAdvisor.png"],
    MyWorks: [
      "Worked on creating responsive user interface with a searchbar.",
      "Developed map with Geolocation.",
      "Built searching for places around the current location and displayed the info of each place in a list.",
      "Implemented Fetching restaurants, hotels and attractions from APIs.",
    ],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "reactjs",
      "react-leaflet",
      "material-ui",
      "axios",
    ],
  },
  {
    projectName: "loopstudios landing page",
    descrp:
      "A fully responsive design to code challenge from Frontend Mentor challenges.",
    img: ["/images/loopstudios.webp", "/images/loopstudios.webp"],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "reactjs",
      "material-ui",
      "Flexbox",
      "CSSGrid",
      "mobile-design",
    ],
    codeLink: "https://github.com/TasneemFand/loopstudios-landing-page",
    Date: "Dec 2021",
  },
  {
    projectName: "Blogr landing page ",
    descrp:
      "A fully responsive design to code challenge from Frontend Mentor challenges.",
    img: ["/images/blogr_preview.webp", "/images/blogr_preview.webp"],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "reactjs",
      "material-ui",
      "Flexbox",
      "CSSGrid",
      "mobile-design",
    ],
    codeLink: "https://github.com/TasneemFand/Blogr-LandingPage",
    Date: "Dec 2021",
  },
  {
    projectName: "Shortly URL shortening API Challenge",
    descrp:
      "A fully responsive design to code challenge from Frontend Mentor challenges. it allows users to Shorten any valid URL and See a list of their shortened links.",
    img: ["/images/shorten.webp", "/images/shorten.webp"],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "reactjs",
      "material-ui",
      "Flexbox",
      "CSSGrid",
      "mobile-design",
    ],
    codeLink: "https://github.com/TasneemFand/url-shortening-api-master",
    Date: "Nov 2021",
  },
  {
    projectName: "sunnyside agency landing page",
    descrp:
      "A fully responsive design to code challenge from Frontend Mentor challenges.",
    img: ["/images/sunnyside.webp", "/images/sunnyside.webp"],
    skills: [
      "Html",
      "Css",
      "javaScript",
      "reactjs",
      "material-ui",
      "Flexbox",
      "CSSGrid",
      "mobile-design",
    ],
    codeLink: "https://github.com/TasneemFand/sunnyside-agency-landing-page",
    Date: "Nov 2021",
  },
];
