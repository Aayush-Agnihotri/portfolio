import { WorkDataInterface } from "./WorkAccordion";
import { faUserDoctor, faMobileScreenButton, faRobot, faComputer } from "@fortawesome/free-solid-svg-icons";

export const WorkData: WorkDataInterface[] = [
  {
    company: "Johnson & Johnson",
    role: "Software Engineer Intern",
    date: "2019 - Present",
    details: [
      "Developed ChatGPT-like AI chatbot using React and Django with 10k+ users, achieving annual savings of $20k+ through process automation",
      "Applied NLP algorithms to create text-based vector embeddings, optimizing document similarity search by 70%",
      "Integrated vector databases to store documents alongside single sign-on and SQL databases through Microsoft Azure"
    ],
    icon: faUserDoctor
  },
  {
    company: "Cornell AppDev",
    role: "Backend Developer",
    date: "September 2023 - Present",
    details: [
      "Developing new features and backend architecture for various mobile apps with 11k+ daily users using TypeScript, Python, and GraphQL",
      "Collaborating with iOS, Android, Design, and Marketing teams in agile development to create and maintain apps",
      "CS 1998 (Backend Development) TA, teaching server architecture, database design, deployment, and authentication"
    ],
    icon: faMobileScreenButton
  },
  {
    company: "Cornell Nexus",
    role: "Software Engineer",
    date: "September 2022 - December 2023",
    details: [
      "Spearheaded design and implementation of a full-stack GUI application in React and Node.js with Express, enabling transmission of robot state",
      "Coordinated with an 8-member team to build robot field visualization software in Python using Numpy",
      "Simulated traversal algorithms and finite-state machine paths to optimize robot navigation strategies"
    ],
    icon: faRobot
  },
  {
    company: "Aziton",
    role: "Full Stack Software Engineer",
    date: "June 2019 - May 2023",
    details: [
      "Designed, developed, and deployed web applications addressing community needs, achieving 1.2+ million page views and generating $1,000+ in profits",
      "Integrated search engine optimization techniques, resulting in a 400% increase in organic website traffic"
    ],
    icon: faComputer
  }
];