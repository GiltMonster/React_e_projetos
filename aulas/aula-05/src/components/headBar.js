import React from "react";
import BannerAviso from "./banner";

function HeadBar() {

    const [usuario, setUsuario] = React.useState();  
    const [senha, setSenha] = React.useState();
    const [logado, setLogado] = React.useState();


    const usuarios = {
        "usuario":{
            "nome": "Lucas Santos Campos",
            "email": "lucas@teste.com",
            "senha": "senhaforte123",
        }
    }
    
    function verifica() {
        if (usuarios.email === usuario || usuarios.senha === senha){
            setLogado(usuarios);            
            console.log(usuarios.nome)
        }
    }
    
return(

    !logado ?

    <>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" fill="currentColor" className="bi bi-question-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                        </svg>
                    </a>
                        <a className="nav-link px-4">Tem no Senac</a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {/* <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li> */}
                        {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex column-gap-2">
                        <input type="email" className="form-control form-control-dark text-bg-withe" placeholder="Login" aria-label="Login" onChange={(e) => setUsuario(e.target.value)}/>
                        <input type="password" className="form-control form-control-dark text-bg-withe" placeholder="Senha" aria-label="Senha" onChange={(e) => setSenha(e.target.value)}/>
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2" onClick={verifica}>Login</button>
                    </div>
                </div>
            </div>
        </header>
    </>

    :

    <>
        <BannerAviso setLogado={setLogado} logado={logado}/>
    </>

    );
}
export default HeadBar;