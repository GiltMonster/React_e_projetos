import Palavra from './components/palavra';
import React from "react";

function App() {
  const [palavra, setPalavra] = React.useState("");

  function verifica(minhaPalavra) {

    let palavraCerta = "teste"
    if (minhaPalavra == palavraCerta) {
      return(
        <>Acertou</>
      )
    }else
      return(
        <>Errou</>
      )
  }
  

  return (

<div className="container text-center">

      <div className="row">
        <div className="col-2">
          
        </div>
        <div className="col-8">
          <h1>Termo-React</h1>
          
          <Palavra palavra={palavra} setPalavra={setPalavra} /> 
          <button onClick={verifica(palavra)}>Verificar</button>

        </div>
        <div className="col-2">
          
          <p>{verifica(palavra)}</p>

        </div>
      </div>
    </div>

  );
}

export default App;
