import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {

    if( !song ) {
        return <div>Select a song to see details!</div>
    }
    return (
        <div>
            <h3>Title: { song.title }</h3>
            <p>Duration: { song.duration }</p>
        </div>
    );

};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);