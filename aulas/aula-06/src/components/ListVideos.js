import { useContext } from "react";
import { VideoContext } from "../VideoContext";
import Video from "./video";

export default function ListVideos() {
    const db = useContext(VideoContext);

    return(
        <div>
            <h1>Total de {db.length} videos:</h1>

            {db.map((video) => <Video video={video}/>)}
        </div>
    )

}