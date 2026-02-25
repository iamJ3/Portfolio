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
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-12-05"),
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
 {
  id: "chitchat",
  companyName: "ChitChat",
  type: "Personal",
  category: ["Web Dev", "MERN Stack", "Socket.io", "UI/UX"],
  shortDescription:
    "Modern real-time chat application with user authentication, messaging, and responsive design.",
  websiteLink: "https://chit-chat-space.vercel.app",
  githubLink: "https://github.com/iamJ3/ChitChat",
  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "JWT",
    "Socket.IO",
    "Cloudinary",
    "MongoDB",
    "Vercel",
  ],
  startDate: new Date("2026-01-01"),
  endDate: new Date("2026-02-20"),
  companyLogoImg: "/projects/chitchat/image1.png",  // ← update path if you have a specific logo; otherwise keep or add one
  pagesInfoArr: [
    {
      title: "ChitChat",
      description:
        "A modern real-time chat app built with clean architecture, Socket.IO for live messaging, authentication, and responsive UI.",
      imgArr: ["/projects/chitchat/image1.png", "/projects/chitchat/image2.png"],  // ← add your actual screenshot paths here
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I developed ChitChat, a full-stack real-time messaging application that enables users to chat instantly with clean, intuitive design and secure authentication.",
      "It uses Socket.IO for live message delivery, MongoDB for storing conversations, and JWT for secure user sessions—perfect for learning real-time web apps or as a base for custom chat features.",
    ],
    bullets: [
      "Built a complete real-time chat system using React (frontend), Node.js + Express (backend), and Socket.IO for instant messaging.",
      "Implemented secure user authentication with JWT and password hashing (bcrypt), plus image upload support via Cloudinary.",
      "Deployed frontend on Vercel with responsive, modern UI; backend likely on a compatible host—easy to clone, run locally, and extend.",
    ],
  },
},
{
  id: "course-selling-backend",
  companyName: "Course Selling API",
  type: "Personal",
  category: ["Backend", "Web Dev", "E-commerce"],
  shortDescription:
    "Scalable RESTful API backend for a course-selling platform with user authentication, admin course management, and purchase tracking.",
  websiteLink: "",  // Add if you have a frontend demo/live API docs (e.g. Swagger/Postman collection)
  githubLink: "https://github.com/iamJ3/Course-Selling-Backend",
  techStack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
  ],
  startDate: new Date("2025-11-01"),  // ← adjust if actual start date differs
  endDate: new Date("2025-12-08"),    // ← adjust as needed
  companyLogoImg: "/projects/course-selling-backend/image.png",  // ← update path; add a logo/screenshot if available
  pagesInfoArr: [
    {
      title: "Course Selling Backend",
      description:
        "Robust Node.js + Express backend API for course-selling apps: secure auth (JWT), admin course CRUD, user purchases, and MongoDB persistence.",
      imgArr: [
        "/projects/course-selling-backend/img_2.png",
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I built a complete backend API for a course-selling platform, enabling users to browse, preview, and purchase courses while admins can create and manage content securely.",
      "It features role-based access (users vs admins), JWT authentication, MongoDB for data storage, and clean route separation—ideal as a foundation for full-stack e-learning apps.",
    ],
    bullets: [
      "Implemented secure authentication & authorization using JWT for users and admins, with dedicated middleware for protected routes.",
      "Developed full CRUD for courses (create, list, preview) by admins, plus user purchase functionality and purchase history tracking.",
      "Structured with Express routes (user, admin, courses), Mongoose schemas (User, Admin, Course, Purchase), and easy local setup with Nodemon.",
      "Designed for scalability: RESTful endpoints, MongoDB integration, and clear config for JWT secrets & DB connection—ready for frontend pairing.",
    ],
  },
},

{
  id: "cvisionary",
  companyName: "CVisionary",
  type: "Personal",
  category: ["Web Dev", "Gemini", "Full Stack", "UI/UX"],
  shortDescription:
    "AI-powered resume analyzer: upload resumes, get smart feedback, ATS scores, improvement suggestions, and job matching—all in-browser with no backend.",
  websiteLink: "https://c-visionary.vercel.app",
  githubLink: "https://github.com/iamJ3/CVisionary",
  techStack: [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Vite",
    "shadcn/ui",
    "Zustand",
    "React Router v7",
    "Puter.js",  // Handles auth, storage, AI evaluations
  ],
  startDate: new Date("2026-01-01"),  // ← adjust to actual start date
  endDate: new Date("2026-12-01"),    // ← adjust as needed
  companyLogoImg: "/projects/cvisionary/logo.png",  // ← update path; add a logo or main screenshot (e.g., upload + analysis UI)
  pagesInfoArr: [
    {
      title: "CVisionary",
      description:
        "Modern AI resume tool: seamless upload, Puter.js-powered auth & storage, Gemini-like AI for feedback, ATS compatibility, and intelligent job matching.",
      imgArr: [
        "/projects/cvisionary/img_1.png",    // ← add paths to real screenshots (e.g., resume upload screen, analysis results, feedback panel)
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I created CVisionary, an innovative AI-driven resume analyzer that empowers job seekers to upload resumes and receive instant, intelligent feedback—without needing a traditional backend server.",
      "Leveraging Puter.js for authentication, secure storage, and AI processing, it delivers ATS scores, personalized improvement suggestions, and job-candidate matching in a clean, responsive React app—ideal for quick career boosts.",
    ],
    bullets: [
      "Built a fully frontend-focused AI app with React, TypeScript, Vite, Tailwind CSS + shadcn/ui for a modern, accessible UI.",
      "Integrated Puter.js SDK to handle user auth, resume upload/storage, and on-device AI evaluations—no separate Node.js/Express backend required.",
      "Implemented core features: resume parsing, AI-generated feedback & suggestions, ATS compatibility scoring, and smart job matching insights.",
      "Used Zustand for efficient state management and React Router for smooth navigation; fully responsive and deployable on Vercel.",
      "Emphasized ease of use: clone, npm install, npm run dev—ready for local testing or community contributions via Discord.",
    ],
  },
},

{
  id: "chat2code",
  companyName: "Chat2Code",
  type: "Personal",
  category: ["Web Dev", "Full Stack", "Gemini", "Socket.io", "UI/UX"],
  shortDescription:
    "AI-powered collaborative code editor: chat with Gemini to generate code, edit & run Node.js apps in-browser, real-time team collaboration.",
  websiteLink: "https://chat2code.vercel.app/",
  githubLink: "https://github.com/iamJ3/Chat2Code",
  techStack: [
    "React 18",
    "Google Gemini AI",
    "Highlight.js",
    "WebContainers",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "MongoDB",
    "Mongoose",
    "Redis",
    "JWT",
  ],
  startDate: new Date("2026-01-01"),  // ← adjust to actual start date
  endDate: new Date("2026-12-01"),    // ← adjust as needed
  companyLogoImg: "/projects/chat2code/img_1.png",  // ← update path; add a logo or main screenshot
  pagesInfoArr: [
    {
      title: "Chat2Code",
      description:
        "Gemini-powered AI chat app + in-browser IDE: generate code via @AI chat, live edit with syntax highlighting, run Node.js code using WebContainers, real-time collaboration.",
      imgArr: [
        "/projects/chat2code/img_1.png",
        "/projects/chat2code/img_1.png",     // ← add paths to actual screenshots (e.g., chat + editor view)
        "/projects/chat2code/img_2.png",     // ← e.g., live output modal or file tree
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I built Chat2Code, a full-stack AI-driven development environment that lets users chat with Google Gemini to generate code instantly (prefix with @AI), while providing a real-time collaborative code editor and in-browser execution.",
      "It combines a modern React frontend with Node.js backend, Socket.IO for live updates, WebContainers for running Node.js apps directly in the browser, and MongoDB for project persistence—perfect for solo devs, teams, or learning AI-assisted coding.",
    ],
    bullets: [
      "Integrated Google Gemini AI for intelligent code generation and assistance directly in chat (e.g., '@AI create a React component').",
      "Enabled browser-based code execution and live preview using WebContainers (StackBlitz-powered), with syntax highlighting (Highlight.js) and tabbed file editing.",
      "Added real-time collaboration via Socket.IO: multiple users can edit the same codebase simultaneously, plus team member invites.",
      "Built secure user auth (JWT), project management (MongoDB/Mongoose), Redis caching, and easy setup/deploy (Vercel for frontend, compatible backend host).",
      "Focused on JS/Node ecosystem with plans for broader language support; includes output modal for server logs and responsive, Tailwind-styled UI.",
    ],
  },
},

{
  id: "resumecraft",
  companyName: "ResumeCraft",
  type: "Personal",
  category: ["Web Dev", "UI/UX", "Frontend"],
  shortDescription:
    "Modern resume builder: intuitive forms, live preview, Clerk auth, rich text editing, dark mode, and shareable links.",
  websiteLink: "https://resumecraftmaker.netlify.app",
  githubLink: "https://github.com/iamJ3/resumecraft",
  techStack: [
    "React 18",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
    "Lucide Icons",
    "React Router",
  ],
  startDate: new Date("2025-09-01"),  // ← adjust to actual start date
  endDate: new Date("2026-10-01"),    // ← adjust as needed
  companyLogoImg: "/projects/resumecraft/image.png",  // ← update path; add a logo or main screenshot (e.g., builder interface)
  pagesInfoArr: [
    {
      title: "ResumeCraft",
      description:
        "Clean, responsive resume builder with modular sections, real-time preview, Clerk-powered auth, rich text summary editor, and easy sharing.",
      imgArr: [
        "/projects/resumecraft/image.png",    // ← add paths to real screenshots (e.g., form + preview side-by-side)
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I developed ResumeCraft, a frontend-focused resume builder that lets users create professional resumes quickly with a beautiful, intuitive interface and instant live previews.",
      "It uses Clerk for secure authentication, ShadCN + Radix UI for polished components, Framer Motion for smooth animations, and supports dark mode, rich text editing, and shareable resume links—perfect for job seekers wanting a fast, modern tool.",
    ],
    bullets: [
      "Implemented modular resume sections (Personal Info, Skills, Projects, Experience, Education) with easy editing and real-time updates.",
      "Integrated Clerk for user authentication and session management; added shareable links via react-share for easy distribution.",
      "Built with React 19 + Vite for fast performance, Tailwind CSS + ShadCN for sleek, responsive UI, and Framer Motion for engaging animations.",
      "Added rich text editor (React Simple WYSIWYG) for professional summaries, dark mode support, and mobile-friendly design.",
      "Currently frontend-only (deployed on Netlify); future plans include backend integration and local storage for persistence.",
    ],
  },
},

{
  id: "subscription-tracker-api",
  companyName: "Subscription Tracker API",
  type: "Personal",
  category: ["Backend", "API", "Full Stack", "Web Dev", "Automation"],
  shortDescription:
    "RESTful API for subscription management: track renewals, CRUD operations, JWT auth, and automated email reminders (7/5/2/1 days before).",
  websiteLink: "",  // Add if you deploy a frontend/demo or Swagger docs later
  githubLink: "https://github.com/iamJ3/Subscription-Tracker-API",
  techStack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcryptjs",
    "Nodemailer",
    "cookie-parser",
  ],
  startDate: new Date("2025-10-01"),  // ← adjusted based on similar projects' timelines; update to your actual start
  endDate: new Date("2026-02-01"),    // ← approximate based on recent activity; set to your real completion date
  companyLogoImg: "/projects/subs/image.jpg",  // ← update path; add a logo or API diagram/screenshot
  pagesInfoArr: [
    {
      title: "Subscription Tracker API",
      description:
        "Secure Node.js API to manage subscriptions: add/track renewals, user auth (JWT), and scheduled email alerts for upcoming payments.",
      imgArr: [
        "/projects/subs/image_2.jpg",       // ← add: e.g., flow diagram of auth → DB → reminders
      ],
    },
  ],
  descriptionDetails: {
    paragraphs: [
      "I built Subscription-Tracker-API, a robust backend service that helps users avoid surprise charges by tracking subscriptions and sending timely email reminders before renewals.",
      "It features secure JWT authentication, full CRUD for subscriptions, admin/user separation, and automated workflows using QStash to trigger reminders at 7, 5, 2, and 1 day intervals—ready for integration into personal finance apps or dashboards.",
    ],
    bullets: [
      "Developed a complete RESTful API with Express.js, MongoDB/Mongoose schemas for Users and Subscriptions (including price, frequency, currency, status).",
      "Implemented JWT-based auth (sign-up/sign-in/sign-out) with bcrypt hashing and cookie-based sessions; protected routes via middleware.",
      "Added automated email notifications using Nodemailer + QStash/Upstash for scheduled reminders on upcoming renewals.",
      "Integrated Arcjet for advanced security: rate limiting, bot detection, and protection against common attacks.",
      "Supported key endpoints for subscriptions (create/update/delete/cancel/view upcoming), user management, and easy setup with dotenv config.",
      "Designed for scalability and ease: nodemon dev server, environment-secured secrets, and modular structure—great foundation for frontend pairing.",
    ],
  },
},
];

export const featuredProjects = Projects.slice(0, 3);
