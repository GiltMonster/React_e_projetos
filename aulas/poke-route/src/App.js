import { Routes, Route } from "react-router-dom";
import Baner from "./components/baner";
import ListaPokemon from "./components/listaPokemon";

function App() {
  return (

    <Routes>
      <Route path="/">
        <Route index element={<ListaPokemon />}/>
      </Route>

      <Route path="lista">

      <Route path=":idPokemon" element={<Baner />}/>
      </Route>
    </Routes>

  );
}

export default App;
