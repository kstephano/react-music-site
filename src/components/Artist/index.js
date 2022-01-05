import React from "react";

import ArtistCard from "../ArtistCard";
import ArtistList from "../ArtistList";

const Artist = ({ name, profileUrl, genre, intro, discography }) => {
    return (
        <>
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