import React, { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import { LoadingContext } from '../Context/LoadingState';
import LoadingScreen from './LoadingScreen/LoadingScreen';

const AppRoutes = () => {
   const { loading } = useContext(LoadingContext);
   return (
      <HashRouter>
         {
            loading ?
               <LoadingScreen />
               : <Routes>
                  <Route path='/' exact  />
                  <Route path='/about' exact element={<About />} />
                  <Route path='/project' exact element={<Project />} />
                  <Route path='/contact' exact element={<Contact />} />
               </Routes>
         }
         <Navbar />
      </HashRouter>
   );
};

export default AppRoutes;
