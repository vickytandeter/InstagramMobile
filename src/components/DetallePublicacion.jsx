import React from "react";

import {
    FiSend,
    FiHeart,
    FiMessageCircle,
    FiX
} from "react-icons/fi";
import './estilos/detallePublicacion.css'

function DetallePublicacion({ post, onVolver })
{
    return (

        <div className="overlay">
            <div className="modalPublicacion">

                <button
                    className="cerrarModal"
                    onClick={onVolver}
                >
                    <FiX/>
                </button>

                <img src={post.contenido} className="modalImg"/>

                <div className="modalInfo">
                    <div className="modalUsuario">

                        <img src="https://i.pravatar.cc/40" className="fotoPerfil"/>
                        <h3>@{post.usuario}</h3>

                    </div>

                    <p className="modalDescripcion">{post.descripcion}</p>

                    <div className="modalInteracciones">

                        <button>
                            <FiHeart/>
                            {post.likes}
                        </button>

                        <button>
                            <FiMessageCircle/>
                            {post.comentarios}
                        </button>

                        <button>
                            <FiSend/>
                            {post.reenviados}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetallePublicacion;