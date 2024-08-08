import { ProjectDataInterface } from "./ProjectCard";

export const ProjectData : ProjectDataInterface[] = [
  {
    name: "Eatery",
    stack: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
    description: "Eatery is a Cornell Dining app with 40,000+ downloads, allowing 10,000+ students and facility to track menu items and schedules for dining halls and resturants.",
    imageUrl: "/images/eatery.png",
    links: {
      github: "https://github.com/cuappdev/eatery-blue-backend",
      app: "https://apps.apple.com/us/app/eatery-cornell-dining/id1089672962"
    }
  },
  {
    name: "MusicMaster",
    stack: ["React", "Flask", "PostgreSQL"],
    description: "MusicMaster is a music recommendation engine built on the Spotify API and song dataset which utilizes machine learning and content-based filtering to recommend songs. Users can login with their Spotify account to add recommended songs to their playlists.",
    imageUrl: "/images/musicmaster.png",
    links: {
      github: "https://github.com/Aayush-Agnihotri/musicmaster"
    }
  },
  {
    name: "Volume",
    stack: ["TypeScript", "Python", "MongoDB", "GraphQL", "AWS", "Docker"],
    description: "Volume is a cross-platform open-source Cornell student publication app with 1,000+ users, facilitating the exploration, sharing, and saving of content and the amplifcation of student voices.",
    imageUrl: "/images/volume.png",
    links: {
      github: "https://github.com/cuappdev/volume-backend",
      app: "https://apps.apple.com/us/app/volume-cornell-news/id1547133564"
    }
  },
  {
    name: "NJoy",
    stack: ["React", "Firebase"],
    description: "NJoy is the go-to trip-advising app created for the Garden State, providing information about New Jersey's favorite places and activities. NJoy allows users to plan their next trip, read and add reviews about locations, get directions, and much more.",
    imageUrl: "/images/njoy.png",
    links: {
      github: "https://github.com/Aayush-Agnihotri/NJoy"
    }
  },
  {
    name: "TownMate",
    stack: ["Java", "Airtable"],
    description: "TownMate is a cross-platform app that gives newcomers to a community information about restaurants, shopping malls, public transportation, and more. Awarded 3rd place for TSA National Software Development Competition.",
    imageUrl: "/images/townmate.png",
    links: {
      github: "https://github.com/Aayush-Agnihotri/TownMate",
      other: {
        name: "TSA",
        url: "https://tsaweb.org/"
      }
    }
  }
]