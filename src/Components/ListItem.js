import React from "react";


const ListItem = ({ albumCoverUrl, albumName, releaseDate }) => {
    // const albumCover = require(`../assets/${albumCoverUrl}`);
    return (
        <div className="list-item">
            <img src={albumCoverUrl}/>
            <p><b>{albumName}</b></p>
            <p>{releaseDate}</p>
        </div>
    )
}

export default ListItem;