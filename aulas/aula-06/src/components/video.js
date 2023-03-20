import React from "react";

export default function Video({video}) {
    return (
        <div className="bg-light border rounded-3 m-3">
            <div className="row">
        
                <div className="col-2 m-2">
                    <img src={video.imagem} className="rounded"/>
                </div>
                <div className="col-8">

                    <div className="my-3">
                        <h3>{video.nome}</h3>
                        <span>{video.descricao}</span>
                    </div>

                    <div>
                        <button className="btn btn-sm btn-outline-primary me-1">Editar</button>
                        <button className="btn btn-sm btn-outline-secondary me-1">Estatistica</button>
                        <button className="btn btn-sm btn-outline-success me-1">Comentarios</button>
                        <button className="btn btn-sm btn-outline-warning me-1">Link</button>
                        <button className="btn btn-sm btn-outline-danger me-1">Excluir</button>
                    </div>
                </div>

                
            { video.like ? 
            <div className="col-1 d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>
            
            :
            
                <div className="col-1 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>
                
            }


            </div>
        </div>
    )
}