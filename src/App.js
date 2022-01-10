import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './App.css';

const App = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <nav className="nav-bar">
                <Link className="text-link" to="/">Home</Link>
                <Link className="text-link" to="/lyrics">Lyrics Generator</Link>
                <Link className="text-link" to="/artist">Artist</Link>
                <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
            </nav>
            <div className="home-page">
                <h1 aria-label="title">Musicly</h1>
                <p>Welcome to Musicly, a website built for browsing different music. This app is currently in production and has limited features. 
                    Visit the Lyrics Generator page to retrieve lyrics for a song. Or, view the Artist page to see information and discography for an
                    artist; currently only displaying information for Logic. 
                </p>
            </div>
            <div className="footer">
                <p>Created by @kstephano. Built with React.</p>
            </div>
        </div>
    )
}

export default App;