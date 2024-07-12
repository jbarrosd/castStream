import React from "react";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Card,Top, Title, Description, CardImage, CardInformation, MainInfo, Creator, CreatersInfo, CreatorName, Views, Favorite, PlayIcon } from "../Cards/StyledPodcastCards";

const PodcastCards = () =>{
    return (
        <Card>
            <Top>
                <Favorite>
                    <FavoriteIcon style={{ width: '16px', height: '16px' }} />
                </Favorite>

                <CardImage src= "https://www.guarulhoshoje.com.br/wp-content/uploads/2023/01/artworks-000562191939-bs4nnz-t500x500.jpeg"/>
            </Top>
            
            <CardInformation>
                <MainInfo>
                    <Title>Garota de Ipanema</Title>
                    <Description>
                        uma das músicas brasileiras mais icônicas, foi composta por Tom Jobim e Vinicius de Moraes. Lançada em 1962, a canção rapidamente se tornou um sucesso internacional, ajudando a popularizar a Bossa Nova. A melodia suave e a letra poética capturam a essência do Rio de Janeiro e sua beleza natural. Interpretada por artistas como João Gilberto e Astrud Gilberto, "Garota de Ipanema" permanece um clássico atemporal. Ela continua a encantar gerações com seu charme e elegância musical.
                    </Description>
                    <CreatersInfo>
                        <Creator>
                            <Avatar style={{ width: '26px', height: '26px' }}></Avatar>
                            <CreatorName>Jean</CreatorName>
                        </Creator>
                        <Views>12 vistos</Views>
                    </CreatersInfo>
                </MainInfo>
            </CardInformation>
            <PlayIcon>
                {"video" === 'video' ?
                    <PlayArrowIcon style={{ width: '28px', height: '28px' }} />
                    :
                    <HeadphonesIcon style={{ width: '28px', height: '28px' }} />
                }
            </PlayIcon>
        </Card>
    )
}

export default PodcastCards;