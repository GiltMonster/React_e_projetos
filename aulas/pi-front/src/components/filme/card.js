export default function Card(filme) {
    return (
        <>
            {filme.map((filmeBuscado) => {
                console.log(filmeBuscado)
            })}
        </>
    )
}