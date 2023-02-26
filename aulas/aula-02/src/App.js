import React from 'react';
import  Noticia  from '../src/components/noticia';

function App() {
  const [noticias, setNoticia] = React.useState([]);

  function carregar() {
   
    setNoticia([{
      imagem:'https://picsum.photos/200/300?grayscale',
      titulo:'Titulo 01',
      texto:'lklsa;dkasdklkdjskjshksahkjdkjhsjdjshkjdsahkjsdahkjdhskjdhskjhhdsakjhdhdkjhdsakjhdkjhdkhkdjshdkhdkhdkjdkjshsdakjhkdjshkjdshkjdahkdhkjsahdkjdhsjkdhsjkashdkdkjshfdkshaflkadhskfhd'
  },{
      imagem:'https://picsum.photos/200/300',
      titulo:'Titulo 02',
      texto:'lklsa;dkasdklkdjskjshksahkjdkjhsjdjshkjdsahkjsdahkjdhskjdhskjhhdsakjhdhdkjhdsakjhdkjhdkhkdjshdkhdkhdkjdkjshsdakjhkdjshkjdshkjdahkdhkjsahdkjdhsjkdhsjkashdkdkjshfdkshaflkadhskfhd'
  }]); 
}

  return (
    
    noticias.length >= 2 ?
    
    <div className="container">
      {/* <Noticia imagem={"https://picsum.photos/200/300?grayscale"} titulo={"titulo 1"} texto={"texto1"}/> */}
      <Noticia imagem={noticias[0].imagem} titulo={noticias[0].titulo} texto={noticias[0].texto}/>
      <div className="row">
      <Noticia imagem={noticias[1].imagem} titulo={noticias[1].titulo} texto={noticias[1].texto}/>
      
      </div>
    </div>

    :

    <div className="container">
      
      <button onClick={carregar}>Carregar</button>

      {/* <Noticia imagem={"https://picsum.photos/200/300?grayscale"} titulo={"titulo 1"} texto={"texto1"}/> */}
      <div className="row">
        Sem noticia 
      </div>
    </div>
  );
}

export default App;
