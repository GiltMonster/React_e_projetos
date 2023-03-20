import Header from "./components/header";
import Buscar from "./components/buscar";
import { videos } from "./data/Videos"
import { VideoContext } from "./VideoContext";
import ListVideos from "./components/ListVideos";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <VideoContext.Provider value={videos}>
          <Buscar/>
          <ListVideos/>
        </VideoContext.Provider>  
      </div>
    </div>
  );
}

export default App;
