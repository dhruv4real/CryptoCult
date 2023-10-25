import React from "react";
import Rectangle from "./Media/Rectangle.png";
import RectangleTranslucent from "./Media/RectangleTranslucent.png";
import CJLogo from "./Media/CJLogo.png";
import CCLogo from "./Media/CCLogo.png";
import CKCLogo from "./Media/CKCLogo.png";
import GJLogo from "./Media/GJLogo.png";
import "./BelowMaster.css";
import leftTweet from "./Media/leftTweet.png";
import centerTweet from "./Media/centerTweet.png";
import rightTweet from "./Media/rightTweet.png";



const BelowMaster = () => {

    return (


<div className="belowmasterdiv">
        <div className="scroll-arrow">
        <div className="arrow"></div>
    </div>      
         <div className="all-community-container">

<img src={RectangleTranslucent} className="RectangleTranslucent" />
<img src={Rectangle} className="Rectangle" />

<div className="community-content">


    <div className="community-box">
        <img className="CJLogo" src={CJLogo} />
        <div className="community-info">
            <h6 className="community-title cryptojargon-info">Crypto Jargon</h6>
            <p className="community-desc cryptojargon-info">Technical Analysis, Crypto</p>
        </div>
    </div>


    <div className="community-box">
        <img className="CCLogo" src={CCLogo} />
        <div className="community-info">
            <h6 className="community-title cryptocult-info">Crypto Cult</h6>
            <p className="community-desc cryptocult-info cc-desc">Airdrop Tutorials in English</p>
        </div>                
    </div>


    <div className="community-box">
    <img className="CKCLogo" src={CKCLogo} />
        <div className="community-info">
            <h6 className="community-title ckc-info">Crypto Ka Cult</h6>
            <p className="community-desc ckc-info">Airdrop Tutorials in Hindi</p>
        </div>                          
    </div>


    <div className="community-box">
        <img className="GJLogo" src={GJLogo} />
        <div className="community-info">
            <h6 className="community-title gj-info">Growth Jargon</h6>
            <p className="community-desc gj-info">Finance for young minds</p>
        </div>                          
    </div>

</div>
    

       
    <div className="top-threads-section">
        <h1 className="top-threads-heading">Our Top Threads</h1>
        <div className="top-threads-body">

                <div className="tweet-container hovered">
                    <img src={leftTweet} className="leftTweet" />
                </div>

                <div className="tweet-container hovered" id="tweet-mid-container">
                    <img src={centerTweet} className="centerTweet" />
                </div>

                <div className="tweet-container hovered">
                    <img src={rightTweet} className="rightTweet" />
                </div>
                
        </div>

    </div>
</div>

    

</div>


    )
}

export default BelowMaster;