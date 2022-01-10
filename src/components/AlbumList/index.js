import React from "react";

import ListItem from '../ListItem';

const AlbumList = ({ discography }) => {
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

export default AlbumList;