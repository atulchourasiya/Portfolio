import React, { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Options from "./Options/Options";
import About from "./About/About";
import { LoadingContext } from "../Context/LoadingState";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";
const AppRoutes = () => {
  const { loading } = useContext(LoadingContext);
  return (
    <HashRouter>
      {
        loading ?
           <LoadingScreen />:
        <Routes>
          <Route path='/' exact />
          <Route path='/about' exact element={<About />} />
          <Route path='/skills' exact element={<Skills />} />
          <Route path='/projects' exact element={<Project />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      }
      <Navbar />
      <Social />
      <Options />
    </HashRouter>
  );
};

export default AppRoutes;
