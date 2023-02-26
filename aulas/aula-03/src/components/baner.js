import Botoes from './botoes';
import PokeImg from './pokeImg';
import MoreInformationText from './text';
import React from 'react';

function Baner(){

    const [pokemon, setPokemon] = React.useState({});
    const [cont, setCont] = React.useState(1);
    
    function carregar() {            
        fetch('https://pokeapi.co/api/v2/pokemon/'+ cont)
        .then((response) =>response.json())
        .then((data) =>{
          setPokemon(data);
        })
    }
    React.useEffect(() => {
        carregar();
    }, [cont]);
  return (

    pokemon.sprites ?

    <div className="container">
      <header>
        <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm h-md-250 justify-content-center">
          <div className="m-4 d-flex justify-content-center text-center">
            <PokeImg sprite={pokemon.sprites}/>
          </div>
          <div className="row d-flex justify-content-center p-4 m-0">
            <h3 className="mb-0">{pokemon.name}</h3>
            <strong className="text-primary"> Nº: {cont}</strong>
            <div className="mb-1 text-muted"><MoreInformationText tipo={pokemon.types}/></div>
           
            <Botoes cont={cont} setCont={setCont}/>
          </div>
        </div>
      </header>

    </div>

    :

    <div className="container text-center">
    <header>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
            <button onClick={carregar} className="card-text mb-auto">Carregar</button>
        </div>
      </div>
    </header>
  </div>

  );
}

export default Baner;