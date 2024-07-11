import styled from "styled-components";

export const MenuContainer = styled.div `

  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  
  display: flex;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  
  
    @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
    }

  
 
`;

export const Flex = styled.div `
    justify-content: space-between;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: 0px 18px;
    width: 90%;
    

`;

export const Image = styled.img `
    height: 40px;
    
`;



export const Logo = styled.div `
  
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;

`;


export const Close = styled.div `
    display: none;
    
    
    @media (max-width: 1100px) {
        display: block;

    }

`;


export const Elements = styled.div `   
    
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary};
    text-decoration: none !important;
    &:hover{
        background-color: ${({ theme }) => theme.text_secondary + 50};
    
        }

`;

export const NavText = styled.div `
    padding: 12px 0px;

`;

export const HR = styled.div `
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.text_secondary + 50};
    margin: 10px 0px;
`;