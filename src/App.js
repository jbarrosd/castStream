import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import {Container, Frame} from "./AppStyled";
import {lightTheme, darkTheme} from "./utils/Themes";
import Sidebar from "./components/SideBar/SideBar";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";


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
          </Frame>
        </Container>
      </BrowserRouter>
      
   </ThemeProvider>
  
  );
}


export default App;
