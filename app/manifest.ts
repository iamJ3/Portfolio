import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jatin Sharma | Full Stack Developer",
    short_name: "Jatin Sharma",
    description:
      "Jatin Sharma - Full-stack developer building scalable, high-performance web applications from idea to deployment with clean architecture and modern technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/jatin.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/jatin.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
