import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ArtistCard from "../ArtistCard";
import ArtistList from "../ArtistList";

const Artist = ({ name, profileUrl, genre, intro, discography }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/lyrics">Lyrics Generator</Link>
                <Link to="/artist">Artist</Link>
                <button onClick={() => navigate(-1)}>Go back</button>
            </nav>
            <ArtistCard 
                name={name}
                profileUrl={profileUrl}
                genre={genre}
                intro={intro}
            />
            <ArtistList
                discography={discography}
            />
        </>
    )
}

export default Artist;