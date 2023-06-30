import {React, useRef} from "react";

let shown = true;
let running = true;

function ShowTypes({setPokemon, pokemonTypes, cleanData}){ 
    const handleFilter = async (id) => {
        running = true;

        while(running == true){
            cleanData()
            cleanData()
            const url = "https://pokeapi.co/api/v2/pokemon/";
            let response = await fetch(url + "?limit=1281&offset=0");
            let data = await response.json();

            for (let i = 0; i <= data.results.length - 1; i++) {
                let response = await fetch(data.results[i].url);
                let json = await response.json();
        
                const tipos = json.types.map(type => type.type.name);
                if (tipos.some(tipo => tipo.includes(id))) {
                    setPokemon((prevPokemon) => [...prevPokemon, json]);
                }
            } 
        }
    };

    function hideToggableTypeButtons() {
        //Hide the toggable navbar when the screen size has changed
        const willShow = shown == true ? "flex" : "none";
        document.querySelector(
          ".type-buttons"
        ).style.display = `${willShow}`;
        shown = !shown;
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <section className="types-buttons-container">
            <p>choose a specific type of pokemon you'd like to look for :)</p>
            
            <div className="deploy-filter-container">
                <img className="deploy-filter-button" src="src/assets/deploy.png" onClick={hideToggableTypeButtons}></img>
            </div>
            
            <div className="type-buttons">
                <button className="type-button-all" id="type-button-all" onClick={refreshPage}>
                    ALL
                </button>
                {pokemonTypes.map((type, index, e) =>{
                    return(
                        <button key={index} id={type.type} className={type.type + " type-button"} onClick={(e)=> handleFilter(e.currentTarget.id)}>
                            {running = false}
                            {type.type}
                        </button>
                    )
                })} 
            </div>
        </section>
    )
}

export default ShowTypes