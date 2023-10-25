import React from "react";
import "./Membership.css";
import MembershipGirl from "./Media/Membership-girl.png";

const Membership = () => {

    return (

        <div className="membership-page">
            <div className="membership-container">
                    <div className="box">
                        <div className="membership-left">
                        <img src={MembershipGirl} className="MembershipGirl"/>
                    </div>

                    <div className="membership-right">
                    <h1 className="join-line">
                        Become a Member of <br />our  <span className="cryptocult-box">Crypto Cult</span>
                    </h1>

                    <p className="membership-desc">Unlock exclusive benefits! Enjoy free access to airdrops, airdrop tracker, P2P opportunities, and more!"</p>
                    <button className="joinnow">Join Now</button>

                    </div>

                    </div>
            </div>
        </div>

    )
}

export default Membership;