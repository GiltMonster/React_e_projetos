import React from "react";
import { useContext } from "react"
import { ContextApi } from "../../context/contextApi";
import { ContextFilm } from "../../context/contextFilme";

export default function Filme() {

    const db = useContext(ContextApi);
    const [filme, setFilme] = React.useState();

    function carregaFilme(api) {
        fetch(api)
            .then((response) => response.json())
            .then((data) =>{
                setFilme(data);
            });
    }

   
    React.useEffect(() => {
        carregaFilme(db);
    }, Filme);


    console.log(filme)

    return(
        filme?

            <ContextFilm.Provider value={filme}>
                 <>{filme.title}</>
            </ContextFilm.Provider>
            
            :

            <div className="bg-light border rounded-3 m-3 overflow-hidden shadow-sm">
                <div className="row justify-content-center m-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden" >Loading...</span>
                    </div>
                </div>
            </div>
    );
}