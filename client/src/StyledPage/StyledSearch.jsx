import styled from "styled-components";


export const SearchResultsContainer = styled.div`
    display:flex;
    gap: 20px;
  
    @media (max-width: 768px) {
       flex-direction: column;
    }

`;
export const SearchMain = styled.div`
    padding: 20px 30px;
    padding-bottom: 200px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width: 768px) {
        padding: 20px 9px;
    }

`;


export const Header = styled.div`
    align-items: flex-start;
    color: ${({ theme }) => theme.text_primary};
    font-size: 22px;
    font-weight: 540;
    margin: 10px 14px;
`;
export const BrowserAll = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 14px;
`;
export const SearchedCards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    padding: 14px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        padding: 6px;
    }
`;
export const Categories = styled.div`
    margin: 20px 10px;
`;
export const SearchBar = styled.div`
 max-width: 700px;
 display:flex;
 width: 100%;
 border: 1px solid ${({ theme }) => theme.text_secondary};
 border-radius:30px;
 cursor:pointer;
 padding:12px 16px;
 justify-content: flex-start;
 align-items: center;
 gap: 6px;
 color: ${({ theme }) => theme.text_secondary};
 `;
export const OtherResults = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 6px;
    padding: 4px 4px;
    @media (max-width: 768px) {
        height: 100%;
        padding: 4px 0px;
    }
`;

export const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`
export const DisplayNo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
color: ${({ theme }) => theme.text_primary};
`