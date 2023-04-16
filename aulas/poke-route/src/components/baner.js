import Botoes from './botoes';
import Headbar from './header';
import PokeImg from './pokeImg';
import MoreInformationText from './text';
import React from 'react';
import { useParams } from 'react-router-dom';



function Baner(){

    const [pokemon, setPokemon] = React.useState();
    
    const { idPokemon } = useParams();

    function carregar() {            
        fetch('https://pokeapi.co/api/v2/pokemon/'+ idPokemon)
        .then((response) =>response.json())
        .then((data) =>{
          setPokemon(data);
        })
    }
    React.useEffect(() => {
        carregar();
    }, []);
  return (

    pokemon ?

    <div className="container">
      <Headbar/>
      
        <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm h-md-250 justify-content-center">
          <div className="m-4 d-flex justify-content-center text-center">
            <PokeImg sprite={pokemon.sprites}/>
          </div>
          <div className="row d-flex justify-content-center p-4 m-0">
            <h3 className="mb-0">{pokemon.name}</h3>
            <strong className="text-primary"> Nº: {idPokemon}</strong>
            <div className="mb-1 text-muted"><MoreInformationText tipo={pokemon.types}/></div>
           
          </div>
        </div>

    </div>

    :

    <div className="container text-center">
    <Headbar/>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h3 className="mb-0">Featured post</h3>
          <div className="mb-1 text-muted">Nov 12</div>
            <button onClick={carregar} className="card-text mb-auto">Carregar</button>
        </div>
      </div>
  </div>

  );
}

export default Baner;