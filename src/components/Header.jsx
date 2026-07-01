import React from "react";
import {
    FiCamera,
    FiInstagram,
    FiSettings,
    FiSend,
    FiPlusCircle
} from "react-icons/fi";
import SearchBar from "./Searchbar";
import './estilos/header.css'

function Header(){

    return(
        <header>

            <h1> <FiInstagram/>Instagram </h1>

            <div className = "buscar">
                <SearchBar/>
            </div>

            <div className="headerIcons">   
                <button>
                    <FiSettings/>
                </button>
                <button>
                    <FiCamera/>
                </button>
                <button>
                    <FiSend/>
                </button>
            </div>            
            

            <div className = "newPost">
                <button><FiPlusCircle/>New Post</button>
            </div>

        </header>
    );

}

export default Header;