import {React, useRef} from "react";

let shown = true;
let initialRotate = true;
let running = true;

function ShowTypes({setPokemon, pokemonTypes, cleanData}){ 
    const handleFilter = async (id) => {
        running = true;

        while(running == true){
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

    function rotateButton(){
        const rotate = initialRotate == true ? "rotate" : "";
        document.querySelector(
            ".deploy-filter-button"
        ).className = `deploy-filter-button ${rotate}`;
        initialRotate = !initialRotate;
    }

    function hideToggableTypeButtons() {
        rotateButton()
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
                <img className="deploy-filter-button" src="https://github.com/Steven-SantosVE/Pokedex/blob/main/src/assets/deployBtn.png?raw=true" onClick={hideToggableTypeButtons}></img>
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