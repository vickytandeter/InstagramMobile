import React from "react";
import {
    FiHeart,
    FiUser,
    FiCheckCircle
} from "react-icons/fi";
import fotoPerfil from "../assets/img/fotoPerfil.png";
import './estilos/usuario.css'
import { SafeAreaView } from "react-native/types_generated/index";

function Usuario(){

    return(

        <SafeAreaView>
            <HeaderUsuario/>
            <UsuarioDetalle/>
            <Destacadas/>
            <PublicacionesPerfil/>
            <Footer/>
        </SafeAreaView>

    );

}

export default Usuario;