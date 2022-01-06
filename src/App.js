import React from "react";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Awesome React Music Website</h1>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/lyrics">Lyrics Generator</Link>
                <Link to="/artist">Artist</Link>
                <button onClick={() => navigate(-1)}>Go back</button>
            </nav>
        </>
    )
}

export default App;