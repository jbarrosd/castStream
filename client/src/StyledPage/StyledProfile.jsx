import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const ProfileMain = styled.div`
    padding: 20px 30px;
    padding-bottom: 200px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const UserDetails = styled.div`
    display flex;
    gap: 120px;
    
    @media (max-width: 768px) {
        width: fit-content;
        flex-direction: column; 
        gap: 20px;
        justify-content: center;
        align-items: center;
    }
`;

export const ProfileAvatar = styled.div`
    padding-left:3rem;
    
    @media (max-width: 768px) {
    padding-left:0rem;
    }
`;


export const ProfileName = styled.div`
    color: ${({ theme }) => theme.text_primary};
    font-size:34px;
    font-weight:500;
`;

export const ProfileEmail = styled.div`
    color:#2b6fc2;
    font-size:14px;
    font-weight:400;
`;

export const FlterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${({ box, theme }) => box && `
        background-color: ${theme.bg};
        border-radius: 10px;
        padding: 20px 30px;
    `}
`;



export const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;

   @media (max-width: 768px) {
        font-size: 18px;
    }
`;


export const Podcasts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding: 18px 6px;
    @media (max-width: 550px){
    justify-content: center;
    }
`;