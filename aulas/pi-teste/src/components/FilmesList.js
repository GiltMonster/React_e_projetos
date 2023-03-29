import { useContext } from "react"
import { API_context } from "../Api/API_Context";

export default function FilmeList() {

    const filme = useContext(API_context);

    return(
        <div>
            <h1>Titulo:</h1>
            <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} />
            <h3>{filme.title}</h3>
            <button className="btn btn-warning" onClick={filme.carregar}>carregar</button>
        </div>
    )    
}