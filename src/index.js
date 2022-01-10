import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { Artist, LyricsGenerator } from './pages';
import { artistData } from './data/artists';
import store from './redux/store';

const rootElement = document.getElementById('root');

render(
    <Provider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="lyrics" element={<LyricsGenerator/>} />
                <Route path="artist" element={
                    <Artist
                        name={artistData.name}
                        profileUrl={artistData.profileUrl}
                        genre={artistData.genre}
                        intro={artistData.intro}
                        discography={artistData.discography}
                    />
                } />
            </Routes>
        </BrowserRouter>
    </Provider>, 
    rootElement
);