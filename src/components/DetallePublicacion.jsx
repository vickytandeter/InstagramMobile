import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../theme/colors";

// Equivalente nativo del ".overlay" + ".modalPublicacion" del proyecto web,
// usando el componente <Modal> de React Native.

function DetallePublicacion({ post, onVolver }) {
  if (!post) return null;

  return (
    <Modal visible={!!post} animationType="slide" onRequestClose={onVolver}>
      <View style={styles.contenedor}>
        <View style={styles.cabecera}>
          <TouchableOpacity onPress={onVolver} style={styles.cerrar}>
            <Feather name="arrow-left" size={24} color={colors.texto} />
          </TouchableOpacity>
          <Text style={styles.titulo}>{post.usuario}</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView>
          <Image source={{ uri: post.contenido }} style={styles.imagen} />

          <View style={styles.info}>
            <View style={styles.usuarioFila}>
              <Image source={{ uri: post.fotoPerfil }} style={styles.avatar} />
              <Text style={styles.usuario}>{post.usuario}</Text>
            </View>

            <Text style={styles.descripcion}>{post.descripcion}</Text>

            <View style={styles.interacciones}>
              <View style={styles.interaccion}>
                <Feather name="heart" size={20} color={colors.texto} />
                <Text style={styles.numero}>{post.likes}</Text>
              </View>

              <View style={styles.interaccion}>
                <Feather name="message-circle" size={20} color={colors.texto} />
                <Text style={styles.numero}>{post.comentarios}</Text>
              </View>

              <View style={styles.interaccion}>
                <Feather name="send" size={19} color={colors.texto} />
                <Text style={styles.numero}>{post.reenviados}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
  cabecera: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borde,
  },
  cerrar: {
    padding: 4,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.texto,
  },
  imagen: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#eee",
  },
  info: {
    padding: 14,
  },
  usuarioFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  usuario: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.texto,
  },
  descripcion: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.texto,
    marginBottom: 20,
  },
  interacciones: {
    flexDirection: "row",
    gap: 24,
  },
  interaccion: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  numero: {
    fontSize: 14,
    color: colors.texto,
  },
});

export default DetallePublicacion;
