import React from "react";
import FilmeList from "./components/FilmesList";
import { API_context } from "./Api/API_Context";
function App() {

  function carregar() {
    fetch("https://api.themoviedb.org/3/movie/560?api_key=8bb11c6a8bc4e61869c5927113cfc918&language=pt-BR")
    .then((response) => response.json())
    .then((data) => {
      setFilme(data);
      console.log(data);
    })
  }

  const [filme, setFilme] = React.useState({});

  return (
    
    <API_context.Provider value={filme}>
    
      <FilmeList/>
  
    </API_context.Provider>
    
  
  );
}

export default App;
