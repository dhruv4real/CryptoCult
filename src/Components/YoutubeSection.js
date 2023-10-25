import React from "react";
import "./YoutubeSection.css";
import YoutubeLogo from "./Media/YoutubeLogo.png";
import thumbnail1 from "./Media/thumbnail1.png";
import thumbnail2 from "./Media/thumbnail2.png";
import thumbnail3 from "./Media/thumbnail3.png";
import ShareButton from "./Media/ShareButton.png";
import PlayButton from "./Media/PlayButton.png";


const YoutubeSection = () => {

    return (
        <div className="youtube-section">
            <div className="heading">
                <h1 className="heading-h1">Explore our  </h1>
                <img className="YoutubeLogo" src={YoutubeLogo} />
            </div>
            <div className="youtube-carousel">
                
                <div className="left-vid"></div>

                <div className="vid">
                    <img src={thumbnail3} className="thumbnail1" />
                    <div className="on-hover">
                        <h4 className="yt-title">Crypto Tax Discussion</h4>
                        <p className="yt-desc">
                            BLUR APTOS Sharedum Node running
                        </p>
                        <div className="on-hover-footer">
                            <img src={PlayButton} />
                            <p>18th Feb, 2023 • 5,930 views</p>
                            <img src={ShareButton} />
                        </div>
                    </div>
                </div>

                <div className="vid">
                    <img src={thumbnail2} className="thumbnail2" />
                    <div className="on-hover">
                        <h4 className="yt-title">Crypto Airdrop  Masterclass with...</h4>
                        <p className="yt-desc">
                            END of Crypto in India?  What to do? Wazirx
                        </p>
                        <div className="on-hover-footer">
                            <img src={PlayButton} />
                            <p>18th Feb, 2023 • 5,930 views</p>
                            <img src={ShareButton} />
                        </div>
                    </div>
                </div>

                <div className="vid">
                    <img src={thumbnail3} className="thumbnail3" />
                    <div className="on-hover">
                        <h4 className="yt-title">Masa AMA</h4>
                        <p className="yt-desc">
                            25 Dollar Regular Income
                        </p>
                        <div className="on-hover-footer">
                            <img src={PlayButton} />
                            <p>18th Feb, 2023 • 5,930 views</p>
                            <img src={ShareButton} />
                        </div>
                    </div>
                </div>

                <div className="right-vid"></div>

            </div>
        </div>
    )
}

export default YoutubeSection;