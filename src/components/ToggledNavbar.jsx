import React from "react";

function ToggledNavbar(){
    return(
        <div className="toggled-navbar-pokedex">
            <ul className="navbar-items-toggled">
                <a href="index.html">
                    <li>POKEDEX</li>
                </a>
                <a href="#">
                    <li>CHAT ROOM</li>
                </a>
                {/* <a href="#" className="favourites-button">
                    <li>FAVOURITES</li>
                </a> */}
            </ul>
        </div>
    )
}

export default ToggledNavbar