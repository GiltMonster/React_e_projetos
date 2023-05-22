import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home"
import DetalhesFilme from "./pages/DetalhesFilmes";
import Login from "./pages/Login";
import PesquisaFilmes from "./components/filme/pesquisaFilmes";
import Card from "./components/filme/card";
function App() {
  return (

    <>
      <PesquisaFilmes/>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme" element={<DetalhesFilme />} />
        <Route path="/pesquisar" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
