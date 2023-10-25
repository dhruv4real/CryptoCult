import React from "react";
import "./TwitterSection.css";
import mic from "./Media/mic.png";
import jargon from "./Media/jargon.png";
import musicBeat from "./Media/musicBeat.png";

const TwitterSection = () => {
    
    return (
        <div className="TwitterSection">
            <div className="twitter-container">
                <div className="left-twitter-container">
                    <h2 className="twitter-heading">Twitter Spaces</h2>
                        <button className="twitter-btn"><img className="mic" src={mic} /> Start Listening</button>
                    </div>
                <div className="right-twitter-container">
                    <img src={jargon} className="jargon" />
                    <img src={musicBeat} className="musicBeat" />
                </div>

            </div>
        </div>
    )

}

export default TwitterSection;