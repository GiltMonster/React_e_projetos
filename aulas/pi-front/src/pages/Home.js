import Filme from "../components/filme/filme";
import { ContextApi } from "../context/contextApi";
import { keyv3 } from "../key";

export default function Home() {
    return(
        <>
            <ContextApi.Provider value={`https://api.themoviedb.org/3/movie/118512?api_key=${keyv3}&language=pt-BR&append_to_response=videos,images`}>
                <Filme/>
            </ContextApi.Provider>
        </>

    );
}