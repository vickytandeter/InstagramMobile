import React from "react";
import {
    FiHeart,
    FiUser,
    FiCheckCircle
} from "react-icons/fi";
import fotoPerfil from "../assets/img/fotoPerfil.png";
import './estilos/usuario.css'

function Usuario(){

    return(

        <div className="usuario">

            <img src={fotoPerfil}/>

            <div className="usuario">
                <div className="nombreUsuario">
                    <h2>usuario</h2>
                    <FiCheckCircle className="verificado"/>
                </div>
                <p>@usuario</p>
            </div>

            <div className="usuarioNumeros">
                <div>
                    <FiUser/>
                    <span>121K</span>
                </div>
                <div>
                    <FiHeart/>
                    <span>900K</span>
                </div>
            </div>
        </div>

    );

}

export default Usuario;