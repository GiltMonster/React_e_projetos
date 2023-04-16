import '../style/principal.css'
function PokeImg(props) {
    return(
        <>
            <img className="imgPrincipal" src={props.sprite["other"]["official-artwork"]["front_default"]}/>
        </>
    );
}

export default PokeImg;