import React from "react";
import { FiSend } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import Usuario from "./Usuario";
import Menu from "./MenuLateral";
import './estilos/barraLateral.css'

function BarraLateral(){

    return(
        <div className = "BarraLateral">
            <Usuario/>
            <Menu/>
        </div>
    );

}

export default BarraLateral;