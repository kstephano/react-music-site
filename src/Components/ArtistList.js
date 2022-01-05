import React from "react";

import ListItem from '../Components/ListItem';

const ArtistList = ({ discography }) => {
    console.log(discography)
    const listItems = discography.map(d => {
        return (
            <ListItem 
                albumCoverUrl={d.albumCoverUrl}
                albumName={d.albumName}
                releaseDate={d.releaseDate}
            />
        )
    });

    return (
        <div className="album-grid">
            {listItems}
        </div>
    )
}

export default ArtistList;