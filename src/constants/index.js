import projects1 from "../assets/kauth_card.png";
import projects2 from "../assets/cabeza_card.png";
import projects3 from "../assets/alarma_card.png";

import techstack1 from "../assets/html.svg";
import techstack2 from "../assets/js.svg";
import techstack3 from "../assets/css.svg"
import techstack4 from "../assets/nodejs.svg"
import techstack5 from "../assets/reactjs.svg"
import techstack6 from "../assets/next.svg"
import techstack7 from "../assets/vue.svg"
import techstack8 from "../assets/nuxt.svg"
import techstack9 from "../assets/tailwind.svg"
import techstack10 from "../assets/flutter.svg"
import techstack11 from "../assets/python.svg"
import techstack12 from "../assets/techstack_more.svg"

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#techstack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Mark Buduan,passionate about creating interactive digital solutions that bring ideas to life. I'm always eager to learn and seek new challenges.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/src/assets/Buduan_Resume.pdf",
};

export const PROJECTS = [
  {
    name: "KAuth",
    description: "Counterfeit Banknote Detection Application (Thesis)",
    image: projects1,
    link: "https://github.com/moroccanmint/counterfeit-detector-app",
  },
  {
    name: "CABEZA",
    description: "Gemstones and Crystals Showcase Website",
    image: projects2,
    link: "https://cabeza.ph",
  },
  {
    name: "ALARMA",
    description: "Flood Alert System and Alternative Route Finder",
    image: projects3,
    link: "https://alarma.onrender.com",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Hi, I'm Mark, a passionate web developer and a Computer Science graduate. My journey in development has led me to explore various front-end technologies, including React, Next.js, Tailwind, Nuxt, and Vue. I've also dabbled in content management systems like Sanity, giving me a broader perspective on building dynamic and scalable web applications.",
    "Beyond web development, I've worked with Flutter and contributed to KAuth, a banknote counterfeit detection app, showcasing my ability to work on mobile solutions. Additionally, I’ve had the opportunity to take on commissions, including projects for real business clients like CABEZA, which strengthened my ability to deliver results in a professional setting.",
    "While I have a strong interest in front-end design, I’m also eager to expand my skills in back-end development and other areas of development, continuously pushing myself to grow as a full-stack developer."
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — 2025",
    title: "Full Stack Developer Intern at IT Squarehub",
    location: "Clark Freeport Zone",
    description: [
      "Developed and maintained user interfaces for websites and web applications.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Learned about the latest technologies and frameworks in the industry.",
    ],
  },
  {
    yearRange: "2021 — 2025",
    title: "Bachelor of Science in Computer Science",
    location: "Holy Angel University",
    description: [
      "Consistent President's Lister from 1st year to 4th year.",
      "Attended hackathons and participated in coding competitions.",
      "Attended classes in Blockchain, Cloud Computing, Cybersecurity, Modeling and Simulation.",
    ],
  },
  {
    yearRange: "2018 — 2020",
    title: "Science, Technology, Engineering, and Mathematics (STEM) High School",
    location: "Holy Angel University",
    description: [
      "Attended classes in Multimedia Arts and Web Programming",
      "Graduated with Honors",
      "Graphic design projects and Video Editing projects",
    ],
  },
];

export const TECHSTACK = [
  {
    name: "HTML",
    image: techstack1,
  },
  {
    name: "JavaScript",
    image: techstack2,
  },
  {
    name: "CSS",
    image: techstack3,
  },
  {
    name: "Node.js",
    image: techstack4,
  },
  {
    name: "React",
    image: techstack5,
  },
  {
    name: "Next.js",
    image: techstack6,
  },
  {
    name: "Vue",
    image: techstack7,
  },
  {
    name: "Nuxt",
    image: techstack8,
  },
  {
    name: "Tailwind",
    image: techstack9,
  },
  {
    name: "Flutter",
    image: techstack10,
  },
  {
    name: "Python",
    image: techstack11,
  },
  {
    name: "Learning More",
    image: techstack12,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "mjlbuduan@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/moroccanmint",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-buduan-4660a4337/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Mark Buduan. All rights reserved.`,
};
