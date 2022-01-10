import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from 'react-hooks-use-modal';

import { ArtistProfile } from "../../Components";
import { artistData } from '../../data/artists';
import './styles.css';
import { createArtist, deleteArtist } from "../../redux/actions";

const Artists = () => {
    const [ chosenArtist, setChosenArtist ] = useState();
    const [ nameInput, setNameInput ] = useState("");
    const [ profileUrlInput, setprofileUrlInput ] = useState("");
    const [ genreInput, setGenreInput ] = useState("");
    const [ introInput, setIntroInput ] = useState("");

    const [ Modal, open, close ] = useModal('root', { preventScroll: true, closeOnOverlayClick: false });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const artists = useSelector(state => state.artists);

    const handleArtistSelect = id => {
        const chosenArtist = artists.find(artist => artist.id === id);
        setChosenArtist(chosenArtist);
    }

    const handleArtistDelete = id => {
        dispatch(deleteArtist(id));
    }

    const handleInput = setter => e => {
        setter(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(createArtist({
            name: nameInput,
            profileUrl: profileUrlInput,
            genre: genreInput,
            intro: introInput,
            discography: artistData.discography
        }));
        close();
    }

    const artistList = artists.map((artist) => (
        <div className="artist-list-item">
            <li key={artist.id} className="artist-list-item" onClick={() => handleArtistSelect(artist.id)}>{artist.name}</li>
            <button onClick={() => handleArtistDelete(artist.id)}>x</button>
        </div>
    ));
    
    return (
        <div className="artists-container">
            <nav className="nav-bar">
                <Link className="text-link" to="/">Home</Link>
                <Link className="text-link" to="/lyrics">Lyrics Generator</Link>
                <Link className="text-link" to="/artist">Artists</Link>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>
            <div className="artist-list-container">
                <Modal className="pop-up">
                    <form onSubmit={handleFormSubmit} className="add-artist-popup">
                        <h2>Add New Artist</h2>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id="name" name="name" placeholder='Enter a name' value={nameInput} onChange={handleInput(setNameInput)} required></input>
                        <label htmlFor='profilePicUrl'>Profile Picture URL</label>
                        <input type="text" id="url" name="profilePicUrl" placeholder='Enter an image URL' value={profileUrlInput} onChange={handleInput(setprofileUrlInput)} required></input> 
                        <label htmlFor='genre'>Genre</label>
                        <input type="text" id="genre" name="genre" placeholder='Enter a genre' value={genreInput} onChange={handleInput(setGenreInput)} required></input>
                        <label htmlFor='intro'>Intro</label>
                        <input type="text" id="intro" name="intro" placeholder='Enter an intro' value={introInput} onChange={handleInput(setIntroInput)} required></input>
                        <input type="submit" id="submit-btn" value="Create artist!"></input>
                        <button onClick={close} id="close-pop-up-btn">Close</button>
                    </form>
                </Modal>
                <ul className="artist-list">
                    {artistList.length === 0 && <p>No artists to show</p>}
                    {artists.length > 0 && artistList}
                </ul>
                <button className="add-artist-btn" onClick={open}>Add artist</button>
            </div>
            { chosenArtist && <ArtistProfile
                    name={chosenArtist.name}
                    profileUrl={chosenArtist.profileUrl}
                    genre={chosenArtist.genre}
                    intro={chosenArtist.intro}
                    discography={artistData[0].discography}
                />
            }
            <div className="footer">
                <p>Created by @kstephano. Built with React.</p>
            </div>
        </div>
    )
}

export default Artists;