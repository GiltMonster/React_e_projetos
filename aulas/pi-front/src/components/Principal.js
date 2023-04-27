import { ContextApi } from "../context/contextApi"
import { key } from "../key";
import Filme from "./filme/filme";

export default function Principal() {
    return(
        <>
            <ContextApi.Provider value={`https://api.themoviedb.org/3/movie/310?api_key=${key}&language=pt-BR`}>
                <Filme/>
            </ContextApi.Provider>
        </>
    );
}