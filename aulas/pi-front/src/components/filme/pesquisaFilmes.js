import { useRef, useState } from "react"
import { keyv3 } from "../../key";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./card";


export default function PesquisaFilmes() {

    let urlFilme = `https://api.themoviedb.org/3/search/movie?api_key=${keyv3}&language=pt-BR&append_to_response=videos,images&query=`;

    const nomeFilme = useRef({});
    const [filme, setFilme] = useState();

    function buscarFilme() {
        console.log(nomeFilme.current.value)
        axios.get(urlFilme + nomeFilme.current.value)
            .then((resp) => {
                console.log(resp.data.results)
                setFilme(resp.data);
            }).catch((error) => {
                console.error(error);
              })
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center ">
                <input type="text" className="form-control" id="pesquisa" placeholder="Pesquisar:" ref={nomeFilme}/>
                <Link className="btn btn-primary mx-3" to={"/pesquisar"} onClick={buscarFilme}>Pesquisar</Link>
            </div>
        </div>
    )
}