function Texto(props){
    return(
        <>
            <h1>{props.titulo}</h1>
            <p>
                {props.texto}
            </p>
        </>
    );
}

export default Texto;