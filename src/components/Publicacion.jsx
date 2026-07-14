import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

function Publicacion({ post, onSelect }) {
  const [likeado, setLikeado] = useState(false);

  return (
    <View style={styles.publicacion}>
      {/* Header: avatar + usuario + menu */}
      <View style={styles.encabezado}>
        <View style={styles.usuarioInfo}>
          <Image source={{ uri: post.fotoPerfil }} style={styles.avatar} />
          <Text style={styles.usuario}>{post.usuario}</Text>
        </View>

        <TouchableOpacity>
          <Feather name="more-vertical" size={20} color={colors.texto} />
        </TouchableOpacity>
      </View>

      {/* Imagen de la publicacion */}
      <TouchableOpacity activeOpacity={0.95} onPress={() => onSelect(post)}>
        <Image source={{ uri: post.contenido }} style={styles.imagen} />
      </TouchableOpacity>

      {/* Iconos de interaccion */}
      <View style={styles.interacciones}>
        <View style={styles.interaccionesIzquierda}>
          <TouchableOpacity onPress={() => setLikeado(!likeado)} style={styles.boton}>
            <Feather
              name="heart"
              size={24}
              color={likeado ? "#ed4956" : colors.texto}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelect(post)} style={styles.boton}>
            <Feather name="message-circle" size={24} color={colors.texto} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton}>
            <Feather name="send" size={22} color={colors.texto} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather name="bookmark" size={22} color={colors.texto} />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>
        Liked by <Text style={styles.negrita}>thekamraan</Text> and{" "}
        <Text style={styles.negrita}>{post.likes.toLocaleString("en-US")}</Text> others
      </Text>

      {/* Descripcion */}
      <Text style={styles.descripcion} numberOfLines={2}>
        <Text style={styles.negrita}>{post.usuario} </Text>
        {post.descripcion}
        <Text style={styles.masTexto}> ...more</Text>
      </Text>

      {/* Comentarios */}
      <TouchableOpacity onPress={() => onSelect(post)}>
        <Text style={styles.verComentarios}>
          View all {post.comentarios} comments
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  publicacion: {
    backgroundColor: colors.fondo,
    marginBottom: 8,
  },
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  usuarioInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  usuario: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.texto,
  },
  imagen: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eee",
  },
  interacciones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  interaccionesIzquierda: {
    flexDirection: "row",
    alignItems: "center",
  },
  boton: {
    marginRight: 14,
  },
  likes: {
    paddingHorizontal: 12,
    fontSize: 13,
    color: colors.texto,
    marginTop: 2,
  },
  descripcion: {
    paddingHorizontal: 12,
    fontSize: 13,
    color: colors.texto,
    marginTop: 4,
    lineHeight: 18,
  },
  masTexto: {
    color: colors.textoSecundario,
  },
  negrita: {
    fontWeight: "600",
  },
  verComentarios: {
    paddingHorizontal: 12,
    marginTop: 4,
    fontSize: 13,
    color: colors.textoSecundario,
  },
});

export default Publicacion;
