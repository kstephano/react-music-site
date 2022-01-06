import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useDidMountEffect from '../../Hooks/useDidMountEffect';

const LyricsGenerator = () => {
    const [artistInput, setArtistInput] = useState("");
    const [titleInput, setTitleInput] = useState("");
    const [lyrics, setLyrics] = useState("");

    const navigate = useNavigate();

    const handleArtistInput = e => setArtistInput(e.target.value);
    const handleTitleInput = e => setTitleInput(e.target.value);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://api.lyrics.ovh/v1/${artistInput}/${titleInput}`);
        
        if (response.status === 404) {
            setLyrics("Invalid artist or title entered");
        } else {
            const data = await response.json();
            setLyrics(data.lyrics);
        }
    }

    const randomBgColor = () => {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
    }

    useDidMountEffect(() => {
        document.getElementById('root').style.background = randomBgColor();
    }, [lyrics]);
    
    return (
        <div className='lyrics-generator'>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/lyrics">Lyrics Generator</Link>
                <Link to="/artist">Artist</Link>
                <button onClick={() => navigate(-1)}>Go back</button>
            </nav>
            <form onSubmit={handleFormSubmit}>
                <h2>Insert an artist and title to retrieve the song's lyrics!</h2>
                <label htmlFor='artist'>Artist</label>
                <input type="text" id="artist" name="artist" placeholder='Enter an artist' value={artistInput} onChange={handleArtistInput}></input>
                <label htmlFor='title'>Title</label>
                <input type="text" id="title" name="title" placeholder='Enter a title' value={titleInput} onChange={handleTitleInput}></input>
                <input type="submit" id="submit-btn" value="Get lyrics!"/>
            </form>
            <p className='lyrics-container'>{lyrics}</p>
        </div>
    )
}

export default LyricsGenerator;