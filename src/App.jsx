import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import {Container, Frame} from "./AppStyled";
import {lightTheme, darkTheme} from "./utils/Themes";
import Sidebar from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";


function App(){   
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Sidebar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Frame>

          </Frame>
        </Container>
      </BrowserRouter>
      
   </ThemeProvider>
  
  );
}


export default App;
