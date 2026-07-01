import React from "react";
import Historia from "./Historia"
import './estilos/historia.css'

function ListaHistorias({ historias }){

    return (
        <div className="listaHistorias">
            <div className="historias">
                {historias.map((historia) => (
                    <Historia
                        key={historia.id}
                        historia={historia}
                    />
                ))}
            </div>
        </div>
    );

}

export default ListaHistorias;