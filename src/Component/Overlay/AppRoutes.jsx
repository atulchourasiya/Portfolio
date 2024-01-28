import React, { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
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

                  <Route path='/' exact element={<Home />} />
                  <Route path='/project' exact element={<Project />} />
                  <Route path='/contact' exact element={<Contact />} />
               </Routes>
         }
         <Navbar />
      </HashRouter>
   );
};

export default AppRoutes;
