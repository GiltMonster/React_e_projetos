import React from "react";
import "../style/principal.css"

function Botoes(props) {

    function voltar(cont) {
        if(props.cont < 1){
            props.setCont(props.cont+1)
        }else{
            props.setCont(props.cont-1)
        }
    }
    function proximo() {
        props.setCont(props.cont+1)
    }

    return(
        <>        
            <button className="col-5 m-1 btn btn-outline-dark" onClick={voltar}>Voltar</button>
            <button className="col-5 m-1 btn btn-outline-dark" onClick={proximo}>Proximo</button>
        </>               
    )
}

export default Botoes;