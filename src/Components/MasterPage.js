import React from "react";
import "./MasterPage.css";
import MasterImage from "./Media/MasterImage.png";




const MasterPage = () => {
    
    return (
    <div className="master-page">
        <div className="master-left">
            <h1 className="master-line">
                Unleash power of crypto <br />
                and soar to new heights <br />
                with our cult!
            </h1>
            <h6 className="sub-master-line">
                Sign up now for exclusive Airdrops,  Tracker, P2P, and many more! 
            </h6>
            <div class="joincult-form">
                <input type="text" class="input" placeholder="E-mail address" />
                <button class="btn">Join for free</button>
            </div>
        </div>
        
        <div className="master-right">
            <img className="MasterImage" src={MasterImage}></img>
        </div>

        <div className="bottom-master">
            <h6>
            Join the mighty community of    <span className="bottom-master-number">200,000 </span>  warriors and conquer the digital frontier!

            </h6>
        </div>
        
        </div>
    )
}

export default MasterPage;