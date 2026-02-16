import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "gptlab",
    companyName: "GPTLab",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "All-in-one AI platform: smart chat, article generation, image creation, background removal & resume feedback.",
    websiteLink: "https://gpt-lab.vercel.app",
    githubLink: "https://github.com/iamj3/gptlab",
    techStack: [
      "React",
      "PostgreSQL",
      "express.js",
      "Node.js",
      "Vercel",
    ],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-12-01"),
    companyLogoImg: "/projects/gptlab/logo.png",
    pagesInfoArr: [
      {
        title: "GPTLab",
        description:
          "All-in-one AI web app: ChatGPT-like chat, AI image & article generation, background removal and more.",
        imgArr: ["/projects/gptlab/logo.png", "/projects/gptlab/img_1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "I built GPTLab, a full-stack AI platform that combines multiple powerful tools into one seamless web app for content creators and professionals.",
        "From generating articles and blog titles with Gemini AI to creating and editing images, removing backgrounds, and providing smart resume feedback, it makes AI accessible and practical for everyday use.",
      ],
      bullets: [
        "Developed a complete full-stack application using React, Vite, Tailwind CSS on the frontend, and Node.js, Express, PostgreSQL on the backend.",
        "Integrated advanced AI services like Google Gemini for text generation, Cloudinary and Clipdrop for image manipulation, and Clerk for authentication.",
        "Launched with a freemium model (free tier + premium features), deployed on Vercel (frontend) and Render (backend), and optimized for quick local setup and scalability.",
      ],
    },
  },

];

export const featuredProjects = Projects.slice(0, 3);
