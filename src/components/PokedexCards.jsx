import React from "react";
import { useState, useEffect, useRef } from "react";
import NavbarPokedex from "./NavbarPokedex";
import "./PkmonType.css"

let offset = 1
let limit = 9

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
            fetch(url + `${e.target.value}`)
                .then((response) => response.json())
                .then((data) => {
                setPokemon((prevPokemon) => [...prevPokemon, data]);
                })
                .catch((error) => {
                console.log("Error fetching Pokemon:", error);
                });
            }
    };

    function next(){
        if (offset < 1281) {
            offset += 9;
            cleanData()
            LoadPokemon(offset, limit)
            // console.log(offset)
        }
    }

    function previous(){
        if (offset !== 1) {
            offset -= 9;
            cleanData()
            // console.log(offset)
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
        if(effectRan.current === false){
            LoadPokemon(offset, limit)
        }

        return () =>{
            effectRan.current = true
        }
    }, [])

    return(
        <>
            <NavbarPokedex search={handleSearch} />
            <section className="cards-container" id="pokedex">
                {pokemon.map((data, index) => (
                <div className="image-container" key={index}>
                    <div className={"sprite-container " + data.types[0].type.name}>
                        <img src={data.sprites.front_default} alt="pokemon image" className="pokemon-image" />
                    </div>

                    <h1 className="pokemon-name">{data.name.toUpperCase()}</h1>
                    <p>HP: {data.stats[0].base_stat}</p>
                    <p>ATK: {data.stats[1].base_stat}</p>
                    <p>DEF: {data.stats[2].base_stat}</p>
                    <p>SPE.ATK: {data.stats[3].base_stat}</p>
                    <p>SPE.DEF: {data.stats[4].base_stat}</p>
                    <p>SPEED: {data.stats[5].base_stat}</p>
                </div>
                 ))}
            </section>
            <div className="button-container">
                <button 
                id="prev-button"
                className="buttons"
                onClick={previous}
                >
                    {'Previous Page'}
                </button> 
                <button 
                id="next-button"
                className="buttons"
                onClick={next}
                >
                    {'Next Page'}
                </button> 
            </div>
        </> 
    )
}
    
export default PokedexCards