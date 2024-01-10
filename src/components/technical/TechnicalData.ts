import { TechnicalDataInterface } from "./TechnicalCard";

export const TechnicalData: TechnicalDataInterface[] = [
  {
    type: "Languages",
    skills: [
      {
        name: "Java",
        text: "Programming Language",
        imageUrl: "/icons/java.svg",
      },
      {
        name: "Python",
        text: "Programming Language",
        imageUrl: "/icons/python.svg",
      },
      {
        name: "JavaScript & TypeScript",
        text: "Programming Language",
        imageUrl: "/icons/js.svg",
      },
      {
        name: "C++",
        text: "Programming Language",
        imageUrl: "/icons/cpp.svg",
      }
    ]
  },
  {
    type: "Frameworks",
    skills: [
      {
        name: "React",
        text: "Frontend UI Library",
        imageUrl: "/icons/react.svg",
      },
      {
        name: "Express & Node.js",
        text: "JavaScript Runtime",
        imageUrl: "/icons/node.svg",
      },
      {
        name: "Flask",
        text: "Backend Framework",
        imageUrl: "/icons/flask.svg",
      },
      {
        name: "Django",
        text: "Backend Framework",
        imageUrl: "/icons/django.svg",
      }
    ]
  },
  {
    type: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        text: "Relational Database",
        imageUrl: "/icons/postgres.svg",
      },
      {
        name: "MongoDB",
        text: "NoSQL Database",
        imageUrl: "/icons/mongo.svg",
      },
      {
        name: "GraphQL",
        text: "API Query Language",
        imageUrl: "/icons/graphql.svg",
      },
      {
        name: "MySQL",
        text: "Relational Database",
        imageUrl: "/icons/mysql.svg",
      }
    ]
  },
  {
    type: "DevOps",
    skills: [
      {
        name: "Docker",
        text: "Containerization Platform",
        imageUrl: "/icons/docker.svg",
      },
      {
        name: "Kubernetes",
        text: "Container Orchestration",
        imageUrl: "/icons/kubernetes.svg",
      },
      {
        name: "AWS, Azure, GCP",
        text: "Cloud Services",
        imageUrl: "/icons/cloud.svg",
      },
      {
        name: "Git",
        text: "Version Control",
        imageUrl: "/icons/git.svg",
      }
    ]
  },
  {
    type: "Machine Learning",
    skills: [
      {
        name: "PyTorch",
        text: "ML Framework",
        imageUrl: "/icons/pytorch.svg",
      },
      {
        name: "TensorFlow",
        text: "ML Framework",
        imageUrl: "/icons/tf.svg",
      },
      {
        name: "Scikit-Learn",
        text: "ML Toolkit",
        imageUrl: "/icons/sklearn.svg",
      },
      {
        name: "NumPy",
        text: "ML Toolkit",
        imageUrl: "/icons/np.svg",
      }
    ]
  }
];