import React from "react";
import {Container, Topic, FavoritesContainer} from "../StyledPage/StyledFavorites";
import PodcastCards from "../components/Cards/PodcastCards";

const Favorites = () =>{

    return (
       <Container>
            <Topic>Favoritos</Topic>
            <FavoritesContainer>
                <PodcastCards/> 
                <PodcastCards/>
                <PodcastCards/>   
            </FavoritesContainer>
       </Container>
    );

}

export default Favorites;