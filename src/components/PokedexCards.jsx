import React from "react";
import { useState, useEffect, useRef } from "react";
import NavbarPokedex from "./NavbarPokedex";
import PokemonCardsInfo from "./PokemonCardsInfo";
import ToggledNavbar from "./ToggledNavbar";
import "./PkmonType.css"

let offset = 1
let limit = 9
let shown = true;

function PokedexCards(){
    const [pokemon, setPokemon] = useState([])
    const effectRan = useRef(false)

    const cleanData = () => {
        setPokemon([]); // Reset the `pokemon` state to an empty array
    };

    const handleSearch = (e) => {
        cleanData()

        if (e.target.value == "") {
            LoadPokemon(offset, limit)
            // console.log(offset)
        }else{
            const url = "https://pokeapi.co/api/v2/pokemon/";
            fetch(url + `${e.target.value.toLowerCase()}`)
                .then((response) => response.json())
                .then((data) => {
                setPokemon((prevPokemon) => [...prevPokemon, data]);
                })
                .catch((error) => {
                console.log("Error fetching Pokemon:", error);
                });
            }
    };

    function nextPage(){
        if (offset < 1281) {
            offset += 9;
            cleanData()
            LoadPokemon(offset, limit)
            // console.log(offset)
        }
    }

    function previousPage(){
        if (offset !== 1) {
            offset -= 9;
            cleanData()
        }
        if (offset <= 1){
            offset = 1;
            cleanData()
            // console.log(offset)
        }
        LoadPokemon(offset, limit)
    }
    
    const fetchPokemons = async (i) => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url + i)
            .then((response) => response.json())
            .then((data) => {
            setPokemon((prevPokemon) => [...prevPokemon, data]);
            })
            .catch((error) => {
            console.log("Error fetching Pokemon:", error);
            });
    };

    const LoadPokemon = async (offset, limit) => {
        for (let i = offset; i <= offset + limit; i++) {
            await fetchPokemons(i);
        }
    };

    useEffect(() => {
        const handleWindowResize = () => {
            document.querySelector(".toggled-navbar-pokedex").style.display = "none";
        };

        window.addEventListener('resize', handleWindowResize);

        if(effectRan.current === false){
            LoadPokemon(offset, limit)
            handleWindowResize()
        }

        return () =>{
            effectRan.current = true
        }
    }, [])

    function showHiddenNavbar(){
        //Hide the toggable navbar when the screen size has changed
        const willShow = shown == true ? "flex" : "none";
        document.querySelector(".toggled-navbar-pokedex").style.display = `${willShow}`
        shown = !shown
    }

    return(
        <>
            <NavbarPokedex 
            search={handleSearch} 
            toggleClicked={showHiddenNavbar}

            />
            <ToggledNavbar/>     
            <PokemonCardsInfo arr={pokemon}/>
            <div className="button-container">

                <button 
                    id="prev-button"
                    className="buttons"
                    onClick={previousPage}
                    >
                    {'Previous Page'}
                </button> 

                <button 
                    id="next-button"
                    className="buttons"
                    onClick={nextPage}
                    >
                    {'Next Page'}
                </button> 

            </div>
        </> 
    )
}
    
export default PokedexCards