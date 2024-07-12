import React from "react";
import {DashboardMain, FilterContainer, Topic, Span, Podcasts} from "../StyledPage/StyledDashboard";
import PodcastCards from "../components/Cards/PodcastCards";
import { Link } from 'react-router-dom';


const Dashboard = () =>{

    return (
       <DashboardMain>
            <FilterContainer>
                <Topic>
                    Mais Populares
                    <Link to={`/showpodcasts/mostpopular`} style={{ textDecoration: "none" }}>
                        <Span>Mostrar Todos</Span>
                    </Link>
                </Topic>

                <Podcasts>
                    <PodcastCards/>
                    <PodcastCards/>
                </Podcasts>
            </FilterContainer>

            <FilterContainer>
                <Topic>
                    Comédias
                    <Link to={`/showpodcasts/comedy`} style={{ textDecoration: "none" }}>
                        <Span>Mostrar Todos</Span>
                    </Link>
                </Topic>

                <Podcasts>
                    <PodcastCards/>
                </Podcasts>
            </FilterContainer>
       </DashboardMain>
    );

}

export default Dashboard;