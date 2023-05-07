import React from "react";


export default function ComponentLogin() {

    // const login = React.useRef(null);
    // const senha = React.useRef(null);

    // function verifica() {
    //     console.log(`Login: ${login.current.value}`)
    //     console.log(`Senha: ${senha.current.value}`)
        
    // }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Login:</h2>
            </div>
            <div className="card-body">
                <form action="http://localhost:3002/login" method="POST">
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="usuario" name="usuario"/>
                        {/* - <input type="email" className="form-control" id="email" ref={login} /> - */}
                        <div id="emailHelp" className="form-text">Nunca compartilhe seu email com estranhos :v</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha:</label>
                        <input type="password" className="form-control" id="senha" name="senha"/>
                        {/* - <input type="password" className="form-control" id="senha" ref={senha}/> - */}
                    </div>
                    <button type="submit" className="btn btn-primary">Logar</button>
                </form>
            </div>
        </div>

    )
}