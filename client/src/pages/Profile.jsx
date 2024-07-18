import React from "react";
import PodcastCards from "../components/Cards/PodcastCards";
import { ProfileMain, UserDetails, ProfileAvatar, ProfileContainer, ProfileName, ProfileEmail, FlterContainer, Topic, Podcasts } from "../StyledPage/StyledProfile";
import Avatar from '@mui/material/Avatar';

const Profile = () =>{

    return (
       <ProfileMain>
            <UserDetails>
                <ProfileAvatar>
                    <Avatar sx={{ height: 165, width: 165 , fontSize: '24px'}}></Avatar>
                </ProfileAvatar>
                
                <ProfileContainer>
                    <ProfileName>
                        Jean Barros Duarte
                    </ProfileName>
                    <ProfileEmail>ryatsui@gmail.com</ProfileEmail>
                </ProfileContainer>
            </UserDetails>
            <FlterContainer>
                <Topic>Seus Favoritos</Topic>
                <Podcasts>
                    <PodcastCards/>
                    <PodcastCards/>
                    <PodcastCards/>
                </Podcasts>
            </FlterContainer>
       </ProfileMain>
    );

}

export default Profile;