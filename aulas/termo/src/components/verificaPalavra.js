function VerificaPalavra(props) {

    let palavraCerta = "TESTE"

    if (props.verificar === palavraCerta) {
        return(
            <>Acertou</>
        )
    }else
        return(
            <>Errou</>
    ) 
}

export default VerificaPalavra;