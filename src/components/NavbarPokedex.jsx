import React from "react";

function NavbarPokedex({value, search, toggleClicked}){

    return(
        <nav className="navbar-pokedex">
            <div className="toggle-button" onClick={toggleClicked}>
                <div className="navbar-toggle-button"></div>
                <div className="navbar-toggle-button"></div>
                <div className="navbar-toggle-button"></div>
            </div>

            <ul className="navbar-items">
                <a href="#pokedex">
                    <li>POKEDEX</li>
                </a>
                <a href="#">
                    <li>CHAT ROOM</li>
                </a>
                <a href="#" className="favourites-button">
                    <li>FAVOURITES</li>
                </a>
            </ul>

            <input 
            type="text" 
            placeholder="FIND YOUR FAVOURITE POKEMON" 
            className="pokemon-searchbar"
            onChange={search}
            // value={value}
            >
            </input>            
        </nav>
    )
}

export default NavbarPokedex