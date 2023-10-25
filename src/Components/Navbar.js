import React from "react";
import "./Navbar.css";
import navdropdownarrow from "./Media/navdropdownarrow.png"
import CryptoCultNavLogo from "./Media/CryptoCultNavLogo.png"


const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="navBar-left">
                        <div className="dropdown-btn">
                            <h4>Join us LIVE!
                            <img className="navdropdownarrow" src={navdropdownarrow} />

                            </h4>

                            <div className="dropdown-content">
                                <a className="dropdown-box" href="#">AMAs</a>
                                <a className="dropdown-box" href="#">Youtube</a>
                                <a className="dropdown-box" href="#">Spaces</a>
                            </div>
                         </div>
                         <a className="threads" href="#"><p>Threads</p></a>

            </div>

            <div className="navBar-center">
                <img className="CryptoCultNavLogo" src={CryptoCultNavLogo} />
            </div>

            <div className="navBar-right">
                <a className="nav-item-right" href="#">P2P</a>
                <a className="nav-item-right" href="#">Tracker</a>
                <a className="nav-item-right" href="#">Login</a>
                <button className="JoinCult">Join Cult</button>

            </div>
        </nav>
    )
}

export default Navbar;