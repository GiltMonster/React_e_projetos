import React from "react";

function Palavra(props) {

    juntaChar(props.palavra);
    function juntaChar(palavra) { 
        const novaString = palavra
            .split('')
            .map((caractere) => {
                return caractere.toUpperCase(); 
            }).join('');
        return(novaString)
    }

    return(
        
        <>
            <input type="text"  value={props.palavra} onChange={e => props.setPalavra(e.target.value)}/>
            <h2>Sua palavra:</h2>
            <p>{props.palavra}</p>
        </>
    )    
}

export default Palavra;