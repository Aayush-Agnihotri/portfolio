import { WorkDataInterface } from "./WorkAccordion";

export const WorkData: WorkDataInterface[] = [
  {
    company: "Cornell AppDev",
    role: "Vice Team Lead | Previously Backend Lead, Developer, & Course Instructor",
    date: "September 2023 - Present",
    details: [
      "Lead all development and delivery for an open-source team of 60+ students building apps with 15,000+ users",
      "Collaborate with iOS, Android, Backend, Design, and Marketing teams using Agile to create and maintain apps",
      "Taught weekly sessions to 100+ students focusing on client-server architecture, database design, and DevOps"
    ],
    image: "/images/aidev.png"
  },
  {
    company: "Google",
    role: "Software Engineer Intern, Google Cloud Platform Vertex AI",
    date: "May 2025 - August 2025",
    details: [
      "Built a synthetic benchmark generator in Python utilizing critique agents, reducing benchmark creation time by 95%",
      "Integrated an autorater evaluation framework within a RAG system, leading to a 39% increase in generation quality",
      "Developed an agentic AI system to generate LLM prompts, resulting in an 8x increase in prompt engineering output"
    ],
    image: "/images/google.png"
  },
  {
    company: "Paramount",
    role: "Machine Learning Engineer Intern, AI/ML Global Supply Chain Operations",
    date: "June 2024 - August 2024",
    details: [
      "Implemented a CNN in Python with TensorFlow to classify ephemeral text within media with 94% accuracy",
      "Utilized parallel computing via Spark and Jupyter Notebooks to train neural networks, reducing train time by 80%",
      "Deployed microservice on AWS Lambda and Jenkins using CI/CD pipelines, processing 9,000+ media hours yearly"
    ],
    image: "/images/paramount.png"
  },
  {
    company: "Johnson & Johnson",
    role: "Software Engineer Intern, Intelligent Automation",
    date: "May 2023 - August 2023",
    details: [
       "Developed a RAG LLM in React, LangChain, and Django with 10,000+ users, achieving annual savings of $20,000+",
       "Applied NLP algorithms to create text-based vector embeddings, optimizing document semantic search by 70%",
       "Integrated Milvus vector database to store/retrieve embeddings and single sign-on (SSO) through Microsoft Azure"
    ],
    image: "/images/jnj.png"
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
    image: "/images/nexus.png"
  }
];