
function MoreInformationText(props){

    function pokeType(pokeTipo){
        let tipo = []        
            for(let novoTipo of pokeTipo){
                console.log("Tipo :",novoTipo["type"]["name"]);
                tipo.push(novoTipo.type.name + " ");
                tipo.toLocaleString(novoTipo.type.name)
            }
        
        return tipo
    }


    return(
        <>
            <p>Tipo: {pokeType(props.tipo)}</p>
        </>
    )

    
}

export default MoreInformationText;