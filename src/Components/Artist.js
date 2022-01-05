import React from "react";

import ArtistCard from "../Components/ArtistCard";
import ArtistList from "../Components/ArtistList";

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