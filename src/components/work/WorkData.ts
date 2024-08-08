import { WorkDataInterface } from "./WorkAccordion";
import { faClapperboard, faUserDoctor, faMobileScreenButton, faRobot, faComputer } from "@fortawesome/free-solid-svg-icons";

export const WorkData: WorkDataInterface[] = [
  {
    company: "Cornell AppDev",
    role: "Backend Lead & Course Instructor",
    date: "September 2023 - Present",
    details: [
      "Lead all backend development for a team of 50+ students building apps with 12,000+ active users",
      "Collaborate with iOS, Android, Design, and Marketing teams in Agile development to create and maintain apps",
      "CS 1998 Course Instructor, teaching client-server architecture, database design, and DevOps to 100+ students",
      "Previous Role: Backend Developer"
    ],
    icon: faMobileScreenButton
  },
  {
    company: "Paramount",
    role: "Software Engineer Intern",
    date: "June 2024 - August 2024",
    details: [
      "Implemented a CNN in Python with TensorFlow to classify ephemeral text within media with 94% accuracy",
      "Utilized Spark and Jupyter Notebooks to analyze data and train machine learning models, reducing noise by 80%",
      "Deployed model with AWS Lambda and Jenkins to the AIML pipeline, processing 9,000+ hours of content yearly"
    ],
    icon: faClapperboard
  },
  {
    company: "Johnson & Johnson",
    role: "Software Engineer Intern",
    date: "May 2023 - August 2023",
    details: [
      "Developed a ChatGPT-like AI chatbot using React, LangChain, and Django with 10,000+ users, achieving annual savings of $20,000+ through process automation",
      "Applied NLP algorithms to create text-based vector embeddings, optimizing document similarity search by 70%",
      "Integrated Milvus vector database to store/retrieve embeddings alongside single sign-on through Microsoft Azure"
    ],
    icon: faUserDoctor
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
  }
];