import { useContext } from "react"
import { RandomContext } from "./RandomContext";
import React from 'react';

export default function User() {

    const db = useContext(RandomContext);
    const [usuario, setUsuario] = React.useState();

    function novoUsuario(api) {
        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                setUsuario(data);
                genero(data["results"][0].gender);
            })
    }

    React.useEffect(() => {
        novoUsuario(db);

    }, User);


    const [cor, setCor] = React.useState("");
    const [sexo, setSexo] = React.useState("")
    function genero(sex) {
        if (sex == "male") {
            setCor("text-primary");
            setSexo("Masculino");
        } else {
            setCor("text-danger");
            setSexo("Feminino");
        }
    }

    console.log()

    return (

        usuario ?
            <div className="bg-light border rounded-3 m-3 overflow-hidden shadow-sm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-2 m-2 justify-content-center ">
                        <img className="rounded-2" src={`${usuario["results"][0].picture.large}`} />
                    </div>
                    <div className="col-8">
                        <div className="my-3">
                            <h3>{`${usuario["results"][0].name.first} ${usuario["results"][0].name.last}`}</h3>
                            <ul  className="list-group">
                                <li className="list-group-item text-muted">{`E-mail: ${usuario["results"][0].email}`}</li>
                                <li className={`list-group-item ${cor}`}>{`Genero: ${sexo}`}</li>
                                <li className="list-group-item text-muted">{`Pais: ${usuario["results"][0].location.country}, ${usuario["results"][0].location.state}`}</li>
                                <li className="list-group-item text-muted">{`Telefone: ${usuario["results"][0].phone}`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            :

            <div className="bg-light border rounded-3 m-3 overflow-hidden shadow-sm">
                <div className="row justify-content-center m-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden" >Loading...</span>
                    </div>
                </div>
            </div>
    )
}