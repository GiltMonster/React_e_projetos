import imgTeste from './img/teste.jpeg';
import './App.css';

function App() {

  function alertar() {
      alert(`Você clicou no titulo.`)
  }

  return (
    <div className="App">
      
      <div className='img'>
        <img src={imgTeste}/>
          <div class="txt">
            <h1>Titulo da notícia</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec elit eget lorem interdum pharetra. Aenean dui tortor, tempus eu suscipit vitae, porta at dolor. Maecenas elementum elementum eros et dignissim. Integer quis mauris non urna dapibus accumsan. Proin ligula velit, vestibulum in mauris et, dictum fermentum mi. 
              </p>
          </div>
      </div>
      

      <div className='img'>
        <div className='txt'>
          <h1>Titulo da notícia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec elit eget lorem interdum pharetra. Aenean dui tortor, tempus eu suscipit vitae, porta at dolor. Maecenas elementum elementum eros et dignissim. Integer quis mauris non urna dapibus accumsan. Proin ligula velit, vestibulum in mauris et, dictum fermentum mi. 
          </p>
          <img src={imgTeste}/>
        </div>
      </div>
    </div>
  );
}

export default App;
