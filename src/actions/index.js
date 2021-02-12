import { types } from "./types"

// Action creator
export const selectSong = song => {
    // Action object
    return {
        type: types.songSelected,
        payload: song
    };
};