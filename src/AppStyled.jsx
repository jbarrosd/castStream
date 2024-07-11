import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    flex-direction: row;


    background: ${({theme}) => theme.bgLight};
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;

   

`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
`;