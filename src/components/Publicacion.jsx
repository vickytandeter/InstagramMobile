import React from "react";
import { FiSend } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import './estilos/publicacion.css'

function Publicacion({ post, onSelect }) 
{
    return (

        <div className="publicacion" onClick={() => onSelect(post)}>

            <img src={post.contenido} className="publicacionImg"/>

            <div className="publicacionDesc">
                
                <div className="publicacionUsuario">
                    <img src={post.fotoPerfil} className="fotoPerfil"/>
                    <p>@{post.usuario}</p>
                </div>

                <div className="publicacionInteracciones">
                    <button>
                        <FiHeart/>
                    </button>
                    <button>
                        <FiMessageCircle/>
                    </button>
                    <button>
                        <FiSend/>
                    </button>
                </div>
                
            </div>
        </div>

    );
}

export default Publicacion;