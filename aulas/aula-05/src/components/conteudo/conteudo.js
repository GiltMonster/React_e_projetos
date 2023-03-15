function Conteudo() {
    return (
        <>
            <div className="card m-5">
                <div className="card-body">
                    <h3>Palavra do dia:</h3>
                    <form className="row d-flex align-items-center m-3">
                        <div className="col-3">
                            <label className="col-3">Tema:</label>
                            <label className="col-auto">Geral (por agora :v)</label>
                        </div>
                        <div className="col" >
                            <input type="text" className="form-control" placeholder="Digite aqui..." />
                        </div>
                    </form>
                </div>
                <div className="modal-footer flex-column border-top-0">
                    {/* <button type="button" className="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button> */}
                    <button type="button" className="btn btn-success w-75 m-3 h-auto">Enviar</button>
                </div>
            </div>
        </>
    )
}

export default Conteudo;