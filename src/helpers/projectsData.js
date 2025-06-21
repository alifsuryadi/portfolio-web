import maryamDentalCare from "../assets/Maryam-Dental-Caree.webp";
import actionFigureMarketplace from "../assets/Action-figure.webp";
// import cuwaca from "../assets/Cuwaca.webp";
// import snowBoarder from "../assets/Snow-boarder.webp";
// import drumKit from "../assets/Drum-kit.webp";
import noteKuliah from "../assets/Note-Kuliah.webp";
import pasalPintar from "../assets/Pasal-Pintar.webp";
import finBoost from "../assets/FinBoost.webp";

const projectsData = [
  {
    name: "FinBoost",
    img: finBoost,
    description:
      "As a Machine Learning Engineer at FinBoost, I tackled Indonesia's financial education challenges by developing an AI-powered financial education chat feature. I fine-tuned Generative AI models with financial planning datasets and improved user experience with LSTM models for question suggestions.",
    technologies:
      "Python / Tensorflow / NodeJS / Express / Prisma / Kotlin / GCP",
    repo_link: "https://github.com/Finboost/finboost-ml",
    url: "https://finboost-waitlist.vercel.app/",
  },
  {
    name: "Note Kuliah",
    img: noteKuliah,
    description:
      "Note Kuliah is a collaborative platform for students to share and access quality lecture notes, supporting the learning process and improving material understanding. The application is built with React, Redux for state management, and React Router for routing.",
    technologies: "React JS / Express JS / Tailwind / Redux / Axios / ZOD",
    repo_link:
      "https://github.com/alifsuryadi/fp_platform_berbagi_catatan_kuliah",
    url: "https://github.com/alifsuryadi/fp_platform_berbagi_catatan_kuliah",
  },
  {
    name: "Action Figure Marketplace",
    img: actionFigureMarketplace,
    description:
      "Action Figure Marketplace is an innovative project that serves as a dedicated platform for enthusiasts and collectors of action figures. As the founder of this venture, I spearheaded the development of a dynamic online marketplace where users can buy, sell, and trade a wide array of action figures from various genres and franchises.",
    technologies: "Laravel / SQL / Vue JS / SASS / Midtrans",
    repo_link: "https://github.com/alifsuryadi/action-figure-marketplace",
    url: "http://actionfigure.rf.gd/",
  },
  {
    name: "Maryam Dental Care",
    img: maryamDentalCare,
    description:
      "Maryam Dental Care is a website that provides information and services related to dental care and oral health. With a user-friendly design, this site provides in-depth explanations about various types of dental treatments, aesthetic procedures, and oral health solutions.",
    technologies: "SASS / Bootstrap / Swipper / AOS / Glightbox",
    repo_link: "https://github.com/alifsuryadi/maryam-dental-care",
    url: "https://github.com/alifsuryadi/maryam-dental-care/",
  },
  {
    name: "Pasal Pintar",
    img: pasalPintar,
    description:
      "Pasal Pintar is an AI-powered legal information application designed to provide users with fast and accurate solutions for their legal needs. The application aims to simplify access to legal knowledge by presenting comprehensive and easy-to-understand explanations of laws and regulations in Indonesia.",
    technologies: "TypeScript / Firebase / Flutter / Python / Tensorflow",
    repo_link: "https://github.com/Project404-PasalPintar",
    url: "https://pasalpintar.netlify.app/",
  },
  // {
  //   name: "Cuwaca",
  //   img: cuwaca,
  //   description: `The "cuwaca" website is an open-source project that provides real-time weather information to users. Its main feature is its ability to deliver accurate and up-to-date weather information for various locations worldwide.`,
  //   technologies: "Node JS / Express / EJS / Axios / JavaScript / CSS",
  //   repo_link: "https://github.com/alifsuryadi/cuwaca",
  //   url: "https://github.com/alifsuryadi/cuwaca",
  // },

  // {
  //   name: "Game 2D - Snow Boarder",
  //   img: snowBoarder,
  //   description: `Snow Boarder" is an exciting 2D game that delivers a thrilling snowboarding experience. Enjoy the challenge of navigating through snow-covered tracks filled with obstacles, epic jumps, and astonishing tricks.`,
  //   technologies: "Unity / C# / CSS / HTML",
  //   repo_link: "https://github.com/alifsuryadi/2D-Snow-Boarder",
  //   url: "https://alifsuryadi.github.io/2D-Snow-Boarder/",
  // },
  // {
  //   name: "Game 2D - Drum Kit",
  //   img: drumKit,
  //   description: `"Drum Kit" is an easily accessible drumming experience through the keyboard and mouse clicks. Feel the joy of creating your own rhythms with a variety of authentic drum sounds.`,
  //   technologies: "JavaScript / CSS / HTML",
  //   repo_link: "https://github.com/alifsuryadi/drum-kit",
  //   url: "https://alifsuryadi.github.io/drum-kit/",
  // },
];

export default projectsData;
