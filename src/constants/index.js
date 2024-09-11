import {
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";

export const links = [
  {
    id: 1,
    title: "Portfolio Website",
    url: "https://artaabedi.com",
    icon: FaGlobe,
    category: "Portfolio",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/artaabedi/",
    icon: FaLinkedinIn,
    category: "Social Media",
  },
  {
    id: 3,
    title: "X",
    url: "https://x.com/artaabedi",
    icon: FaXTwitter,
    category: "Social Media",
  },
  {
    id: 4,
    title: "Github",
    url: "https://github.com/artaabedi/",
    icon: FaGithub,
    category: "Portfolio",
  },
  {
    id: 5,
    title: "Mail",
    url: "mailto:hey@artaabedi.com.com",
    icon: IoIosMail,
    category: "Contact",
  },
  {
    id: 6,
    title: "Resume",
    url: "https://artaabedi.com/Assets/Arta Abedi - CV.pdf",
    icon: GrDocumentPdf,
    category: "Portfolio",
  },
  {
    id: 7,
    title: "Instagram",
    url: "https://www.instagram.com/rtaafj",
    icon: FaInstagram,
    category: "Social Media",
  },
  {
    id: 8,
    title: "Snapchat",
    url: "https://www.snapchat.com/add/arta.abedi?share_id=cl8jnC7ldrk&locale=en-US",
    icon: FaSnapchatGhost,
    category: "Social Media",
  },
  {
    id: 9,
    title: "Threads",
    url: "https://www.threads.net/@rtaafj",
    icon: FaThreads,
    category: "Social Media",
  },
  {
    id: 10,
    title: "Discord",
    url: "https://www.discordapp.com/users/artaabedi",
    icon: FaDiscord,
    category: "Social Media",
  },
];
