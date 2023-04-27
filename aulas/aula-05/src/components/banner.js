function BannerAviso(props) {
    
    function voltar() {
        props.setLogado();
        
    }

    return(
        <>
        <div className="modal modal-sheet position-static d-block py-5" tabindex="-1" role="dialog" id="modalSheet">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                <div className="modal-header border-bottom-0">
                    <h1 className="modal-title fs-5">Ola {props.logado.nome}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body py-0">
                    <p>Isso é um teste.</p>
                </div>
                <div className="modal-footer flex-column border-top-0">
                    {/* <button type="button" className="btn btn-lg btn-primary w-100 mx-0 mb-2">Save changes</button> */}
                    <button type="button" className="btn btn-lg btn-danger w-100 mx-0" data-bs-dismiss="modal" onClick={voltar}>Close</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BannerAviso;