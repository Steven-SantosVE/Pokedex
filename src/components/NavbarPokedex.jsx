import React from "react";

function NavbarPokedex(){
    return(
        <nav className="navbar-pokedex">
            <ul className="navbar-items">
                <a href="#">
                    <li>POKEDEX</li>
                </a>
                <a href="#">
                    <li>CHAT ROOM</li>
                </a>
                <a href="#">
                    <li>FAVOURITES</li>
                </a>
            </ul>

            <input 
            type="text" 
            placeholder="FIND YOUR FAVOURITE POKEMON" 
            className="pokemon-searchbar"
            >
            </input>
        </nav>
    )
}

export default NavbarPokedex