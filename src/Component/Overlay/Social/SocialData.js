import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const SocialData = [
   {
      id: 1,
      icon: faGithub,
      link: "https://github.com/atulchourasiya",
      isDownload : false,
      title : 'Github'
   },
   {
      id: 2,
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/atul-chourasiya-7414ba215/",
      isDownload : false,
      title : 'LinkedIn'
   },
   {
      id: 3,
      icon: faDownload,
      link: "/AtulChourasiyaResume.pdf",
      isDownload : true,
      title : 'Resume'
   },
]