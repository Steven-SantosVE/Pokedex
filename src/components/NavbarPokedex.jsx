import React from "react";

function NavbarPokedex({value, search}){
    return(
        <nav className="navbar-pokedex">
            <ul className="navbar-items">
                <a href="#pokedex">
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
            onChange={search}
            value={value}
            >
            </input>
        </nav>
    )
}

export default NavbarPokedex