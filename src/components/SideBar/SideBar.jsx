import React from "react";
import { MenuContainer, Image, Logo, Close, Elements, NavText, Flex, HR} from "./StyledSideBar";
import {CloudUploadRounded, LightModeRounded, LogoutRounded, DarkModeRounded, CloseRounded } from "@mui/icons-material";
import LogoIcon from "../../imgs/podcast.png";
import { Link } from "react-router-dom";
import { menuItens} from "./MenuItens";

const Sidebar = ({menuOpen,setMenuOpen, setDarkMode, darkMode}) =>{

    const button = [

        {
            fun: () => console.log("Upload"),
            name:"Upload",
            icon: <CloudUploadRounded />,
        },
        {
            /*funcao para escolher entre o thema claro e escuro */
            fun: () => setDarkMode(!darkMode),
            name: darkMode ? "Light Mode" : "Dark Mode",
            icon: darkMode ? <LightModeRounded /> : <DarkModeRounded/>,
        },
        {
            fun: () => console.log("Log Out"),
            name:"Log Out",
            icon: <LogoutRounded />,
        },
    ];


    return(
        /*menuOpen: para abrir e fechar o sideBar do site */
        <MenuContainer menuOpen={menuOpen}>
            <Flex>
                <Logo>
                    <Image src={LogoIcon}/> 
                    CastStream
                </Logo>
                     
                     {/*checando se o menu sideBar esta aberto */}
                <Close onClick={() => setMenuOpen(false)}>
                    {/* icone de fechar*/}
                    <CloseRounded />
                </Close>
            </Flex>

                {/*props que mapeia o object criado no menuitens*/}
            {menuItens.map((item) => (
                <Link to={item.link} style={{ textDecoration: "none"}}>
                    <Elements>
                        {/* icone de casinha: home*/}
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                </Link>   
            ))}

            <HR />

            {button.map((item) => (
                    <Elements onClick={item.fun}>  
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                 
            ))}

            
        </MenuContainer>
    );
}

export default Sidebar;