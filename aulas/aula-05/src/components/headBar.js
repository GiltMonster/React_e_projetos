import React from "react";
import BanerAviso from "./baner";

function HeadBar() {

    const [usuario, setUsuario] = React.useState();  
    const [senha, setSenha] = React.useState();
    const [logado, setLogado] = React.useState();


    const usuarios = {
        "nome": "Lucas Santos Campos",
        "email": "lucas@teste.com",
        "senha": "senhaforte123",
    }
    
    function verifica() {
        if (usuarios.email === usuario && usuarios.senha === senha){
            setLogado(usuarios);            
        }
    }
    
return(

    !logado ?

    <>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                        {/* <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex column-gap-2" role="login">
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
        <BanerAviso setLogado={setLogado} logado={logado}/>
    </>

    );
}
export default HeadBar;