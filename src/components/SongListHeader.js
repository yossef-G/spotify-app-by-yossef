import React from "react";
import "./css/SongListHeader.css";

const SongListHeader = () => {
    return (
        <div className="song-item header">
            <div className="index">#</div>
            <div className="name">Title</div>
            <div className="author">Author</div>            
        </div>
    );
};

export default SongListHeader;
