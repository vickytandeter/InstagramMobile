import React from "react";
import {
    FiHome,
    FiCompass,
    FiFilm,
    FiTv,
    FiBell
} from "react-icons/fi";
import './estilos/menu.css'

function Menu(){

    return(

        <div className = "MenuLateral">

            <button><FiHome/>Home</button>
            <button><FiCompass/>Explorar</button>
            <button><FiFilm/>Reels</button>
            <button><FiTv/>iGTV</button>
            <button><FiBell/>Notificaciones</button>

        </div>

    );
}

export default Menu;