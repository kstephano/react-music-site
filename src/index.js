import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { Artist, Artists, LyricsGenerator } from './pages';
import store from './redux/store';

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="lyrics" element={<LyricsGenerator/>} />
                <Route path="artist" element={<Artists/>} />
            </Routes>
        </BrowserRouter>
    </Provider>, 
    rootElement
);