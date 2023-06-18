import React from "react";

function GenerationFilterButton({gen}){
    return(
        <button 
        id="next-button"
        className="gen-buttons"
        >
            {gen}
        </button> 
    )
}

export default GenerationFilterButton