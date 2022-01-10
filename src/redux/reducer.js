import { combineReducers } from 'redux';

import { CREATE_ARTIST, DELETE_ARTIST, UPDATE_ARTIST } from './actions';
import { merge } from '../helpers/index';

const artistReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_ARTIST:
            return [...state, { ...actionpayload }];
        case DELETE_ARTIST:
            return state.filter(artist => artist.id != action.payload.id);
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