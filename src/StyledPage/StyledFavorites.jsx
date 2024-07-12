import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 30px;
    padding-bottom: 200px;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavoritesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding: 18px 6px;
    @media (max-width: 550px){
    justify-content: center;
    }
`;