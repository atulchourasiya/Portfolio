import { faHive  } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faScrewdriverWrench, faEnvelope, faAddressCard  } from '@fortawesome/free-solid-svg-icons'; 

export const NavbarData = [
   {
      id : 1,
      title : 'Home',
      icon : faHouse,
      link :'/',
      heading : 'DEVATUL',
   },
   {
      id : 2,
      title : 'About',
      icon : faAddressCard,
      link :'/about',
      heading: ' ABOUT ',
   },
   {
      id : 3,
      title : 'Skills',
      icon : faScrewdriverWrench,
      link :'/skill',
      heading: 'SKILLS',
   },
   {
      id : 4,
      title : 'Project',
      icon : faHive,
      link :'/project',
      heading: 'PROJECTS',
   },
   {
      id : 5,
      title : 'Contact',
      icon : faEnvelope,
      link :'/contact',
      heading: 'CONTACT',
   },
]