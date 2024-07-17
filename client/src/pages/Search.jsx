import SearchOffOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState } from "react";
import {SearchMain, SearchBar, Header, Categories, BrowserAll, Loader, OtherResults, SearchResultsContainer} from "../StyledPage/StyledSearch"
import {Category} from "../utils/Data.jsx";
import { DefaultCard } from "../components/Cards/DefaultCard";
import { CircularProgress, Link } from "@mui/material";
import MoreResults from "../components/Results/MoreResults.jsx"
import TopResult from "../components/Results/TopResults.jsx";



const Search = () =>{
    const [searched, setSearched] = useState("");
    const [searchedPodcasts, setSearchedPodcasts] = useState([1,2,3,4,5,6]);
    const [loading, setLoading] = useState(false);
    const handleChange = async(e) =>{
        setSearched(e.target.value) //buscando valor digitado no input onChange={(e) => handleChange(e)
        /*
        setSearchedPodcasts([]);
        setLoading(true);
        */
    }   

    return (
        <SearchMain>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                <SearchBar>
                    <SearchOffOutlinedIcon sx={{color: "inherit"}} />
                    <input type="text" placeholder="O que você quer ouvir?" style={{border: "none", outline: "none", width:"100%", background: "inherit", color: "inherit",}} 
                        value={searched}
                        onChange={(e) => handleChange(e)}
                    />
                </SearchBar>
            </div>

            {/*PROCURAR CATEGORIAS */}
            {searched === "" ? (
                <Categories>
                    <Header>Todos</Header>
                    <BrowserAll>
                        {Category.map((category)=>(
                            <Link to={`/showpodcasts/${category.name.toLowerCase()}`} style={{ textDecoration: "none" }} >
                                <DefaultCard category={category} />
                            </Link>
                        ))}
                    </BrowserAll>
                </Categories>) : (
                  <>
                    {loading ? ( <Loader><CircularProgress /></Loader> ) 
                        : 
                        (
                          <>
                            {searchedPodcasts.length === 0 ? (<>Nenhum Podcast foi encontrado</>) 
                            
                              : 

                                ( 
                                    <SearchResultsContainer>
                                        <TopResult />

                                        <OtherResults>{/**procurando podecasts */}
                                            {searchedPodcasts.map((podcasts) =>(
                                                <MoreResults podcasts={podcasts} />
                                            ))}
                                        </OtherResults>
                                    </SearchResultsContainer>
                                )}
                          </>
                        )}
                  </>
            )}
        </SearchMain>
    );

}

export default Search;