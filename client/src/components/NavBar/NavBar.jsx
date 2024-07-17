import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {ContainerNavbar, Button, IcoButton } from "./StyledNiveBar";

const Navbar = ({  menuOpen, setMenuOpen }) =>{

    return (
        <ContainerNavbar>
            <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon />
            </IcoButton>
            <Button>Login</Button>

        </ContainerNavbar>
    );

}

export default Navbar;