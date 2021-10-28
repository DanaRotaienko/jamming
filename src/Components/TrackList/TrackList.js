import React from "react";
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.songs.map(song => {
                        return <Track song={song} key={song.id}/>
                    })
                }
            </div>
        )
    }

}

export default TrackList;
