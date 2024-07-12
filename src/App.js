import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import {Container, Frame} from "./AppStyled";
import {lightTheme, darkTheme} from "./utils/Themes";
import Sidebar from "./components/SideBar/SideBar";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard.jsx";
import Search from "../src/pages/Search.jsx";
import Favorites from "../src/pages/Favorites.jsx";
import Profile from "../src/pages/Profile.jsx";
import DisplayPodcasts from "../src/pages/DisplayPodcasts.jsx";
import PodcastDetails from "./pages/PodcastDetails.jsx";



function App(){   
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
        {menuOpen && ( <Sidebar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode}/>)}
         
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path='/' exact element={<Dashboard/>} />
              <Route path='/search' exact element={<Search />} />
              <Route path='/favorites' exact element={<Favorites />} />
              <Route path='/profile' exact element={<Profile />} />
              <Route path='/podcast/:id' exact element={<PodcastDetails />} />
              <Route path='/showpodcasts/:type' exact element={<DisplayPodcasts/>} />
            </Routes>
         
          </Frame>
           

        </Container>
      </BrowserRouter>
      
   </ThemeProvider>
  
  );
}


export default App;
