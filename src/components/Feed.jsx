import React from "react";
import Publicacion from "./Publicacion";
import './estilos/feed.css'

function Feed({ publicaciones, onSelect }) {

    return (
        <div className="feed">
            <div className="publicaciones">
                {publicaciones.map((post) => (
                    <Publicacion
                        key={post.id}
                        post={post}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </div>

    );
}

export default Feed;