import React from "react";
import './estilos/historia.css'

function Historia({ historia }) {

    return (

        <div className="historia">

            <img
                src={historia.contenido}
                className="historiaImg"
            />

            <div className="publicacionUsuario">
                <p>@{historia.usuario}</p>
            </div>

        </div>

    );

}

export default Historia;