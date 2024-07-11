import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import {Container} from "./AppStyled";
import {lightTheme, darkTheme} from "./utils/Themes";


function App(){   
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>
      <Container>
        CastStream
      </Container>
   </ThemeProvider>
  
  );
}


export default App;
