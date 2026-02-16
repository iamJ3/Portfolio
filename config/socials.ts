import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@iamj3",
    icon: Icons.gitHub,
    link: "https://github.com/iamj3",
  },
  {
    name: "LinkedIn",
    username: "Jatin Sharma",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/jatin-sharma-434723279/",
  },
  {
    name: "Twitter",
    username: "@nitaj333",
    icon: Icons.twitter,
    link: "https://twitter.com/nitaj333",
  },
  {
    name: "Gmail",
    username: "Jatin Sharma",
    icon: Icons.gmail,
    link: "mailto:jatinsharma.techy@gmail.com",
  },
];
