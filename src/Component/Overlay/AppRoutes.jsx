import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import { LoadingContext } from '../Context/LoadingState';
import LoadingScreen from './LoadingScreen/LoadingScreen';

const AppRoutes = () => {
   const { loading } = useContext(LoadingContext);
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/project' exact element={<Project />} />
            <Route path='/contact' exact element={<Contact />} />
         </Routes>
         {loading && <LoadingScreen />}
         <Navbar />
      </BrowserRouter>
   );
};

export default AppRoutes; 
