import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ArtistCard from "../ArtistCard"
import AlbumList from "../AlbumList";
import './styles.css';

const Artist = ({ name, profileUrl, genre, intro, discography }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="artist-container">
                <ArtistCard 
                    name={name}
                    profileUrl={profileUrl}
                    genre={genre}
                    intro={intro}
                />
                <AlbumList
                    discography={discography}
                />
            </div>
        </>
    )
}

export default Artist;