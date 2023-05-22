import { useContext, useState, useEffect } from "react"
import { ContextFilm } from "../../context/contextFilme";

export default function CardFilme() {

    const filme = useContext(ContextFilm);

    const [novaData, setNovaData] = useState("");

    function data(data){
        setNovaData(data.split("-"));
        return(novaData);
    }

    useEffect(() => {
        data(filme.release_date);
    }, []);

    return (
        <div className="card mx-1" style={{width: '18rem'}}>
            <img src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`} className="card-img-top" alt={`Imagem do filme ${filme.title}`}/>
                <div className="card-body">
                    <h5 className="card-title">{filme.title}</h5>
                    <p className="card-text"><small className="text-muted">{`${novaData[2]}/${novaData[1]}/${novaData[0]}`}</small></p>
                    <p className="card-text">{filme.tagline}</p>
                </div>
        </div>
    )

}