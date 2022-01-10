// action types
export const CREATE_ARTIST = 'CREATE_ARTIST';
export const DELETE_ARTIST = 'DELETE_ARTIST';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';

// action creators
export const updateArtist = (update) => ({
    type: UPDATE_ARTIST,
    payload: update
});

export const createArtist = (artist) => ({
    type: CREATE_ARTIST,
    payload: artist
});

export const deleteArtist = (id) => ({
    type: DELETE_ARTIST,
    payload: id
});