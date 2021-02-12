import { types } from "../actions/types";
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:05' },
        { title: 'I want it that way', duration: '3:15' }
    ];
};

const selectedSongReducer = (selectSongState = null , action) => {
    switch ( action.type ) {
        case types.songSelected:
            return action.payload;
        default:
            return selectSongState;
    };
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})