import React from "react";

function PokemonCardsInfo({arr}){
    return(
        <section className={"cards-container"} id="pokedex">
            {arr.map((data, index) => (
            <div className={"image-container " + index} key={index} >
                <div className={"sprite-container " + data.types[0].type.name}>
                    <img src={data.sprites.front_default} alt="pokemon image" className="pokemon-image" />
                </div>

                <p className="pokemon-id">#{data.id}</p>
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
    )
}

export default PokemonCardsInfo