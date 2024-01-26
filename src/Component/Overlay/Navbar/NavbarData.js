import { faHive  } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faScrewdriverWrench, faCircleInfo ,faEnvelope  } from '@fortawesome/free-solid-svg-icons'; 

export const NavbarData = [
   {
      id : 1,
      title : 'Home',
      icon : faHouse,
      link :'/'
   },
   {
      id : 2,
      title : 'About',
      icon : faCircleInfo,
      link :'/about'
   },
   {
      id : 3,
      title : 'Skills',
      icon : faScrewdriverWrench,
      link :'/skill'
   },
   {
      id : 4,
      title : 'Project',
      icon : faHive,
      link :'/project'
   },
   {
      id : 5,
      title : 'Contact',
      icon : faEnvelope,
      link :'/contact'
   },
]