import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ArtistCard from "../../components/ArtistCard";
import ArtistList from "../../components/ArtistList";
import './styles.css';

const Artist = ({ name, profileUrl, genre, intro, discography }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="artist-container">
                <nav className="nav-bar">
                    <Link className="text-link" to="/">Home</Link>
                    <Link className="text-link" to="/lyrics">Lyrics Generator</Link>
                    <Link className="text-link" to="/artist">Artist</Link>
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
            </div>
            <div className="footer">
                <p>Created by @kstephano. Built with React.</p>
            </div>
        </>
    )
}

export default Artist;