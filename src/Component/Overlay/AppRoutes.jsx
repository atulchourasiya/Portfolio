import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';

const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/project' exact element={<Project />} />
            <Route path='/contact' exact element={<Contact />} />
         </Routes>
         <Navbar />
      </BrowserRouter>
   );
};

export default AppRoutes;
