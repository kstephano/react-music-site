import React from "react";

const ArtistCard = ({ name, profileUrl, genre, intro }) => {
    return (
        <div className="card-container">
            <h2>{name}</h2>
            <img
                className="card-picture"
                src={profileUrl}
            />
            <p><b>Genre:</b> {genre}</p>
            <p className="card-intro">{intro}</p>
        </div>
    )
}

export default ArtistCard;