import { combineReducers } from 'redux';
const { uuid } = require('uuidv4');

import { artistData } from '../data/artists';
import { CREATE_ARTIST, DELETE_ARTIST, UPDATE_ARTIST } from './actions';
import { merge } from '../helpers/index';

const artistReducer = (state = artistData, action) => {
    switch (action.type) {
        case CREATE_ARTIST:
            return [...state, { id: uuid(), ...action.payload}];
        case DELETE_ARTIST:
            return state.filter(artist => artist.id != action.payload);
        case UPDATE_ARTIST:
            return state.map((artist) => {
                return artist.id === action.payload.id ? merge(artist, action.payload) : artist
            });
        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    artists: artistReducer
});

export default combinedReducer;