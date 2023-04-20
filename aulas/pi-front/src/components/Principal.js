import { ContextApi } from "../context/contextApi"
import { key } from "../key";

export default function Principal() {
    return(
        <div>
        
            <ContextApi.Prvider value={`https://api.themoviedb.org/3/movie/550?api_key=${key}`}>

            </ContextApi.Prvider>

        </div>
    );
}